import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Upload, X } from "lucide-react";

interface PurchaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  planPrice: string;
  onSubmit: (data: PurchaseFormData) => void;
  isLoading: boolean;
}

export interface PurchaseFormData {
  organizationName: string;
  email: string;
  contactPhone: string;
  hrAdminName: string;
  hrAdminEmployeeCode: string;
  hrAdminPan: string;
  logoFile: File | null;
  logoPreview: string;
}

export const PurchaseDialog = ({
  isOpen,
  onClose,
  planName,
  planPrice,
  onSubmit,
  isLoading,
}: PurchaseDialogProps) => {
  const [formData, setFormData] = useState<PurchaseFormData>({
    organizationName: "",
    email: "",
    contactPhone: "",
    hrAdminName: "",
    hrAdminEmployeeCode: "",
    hrAdminPan: "",
    logoFile: null,
    logoPreview: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, logo: "Logo must be less than 5MB" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          logoFile: file,
          logoPreview: reader.result as string,
        });
        setErrors({ ...errors, logo: "" });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setFormData({ ...formData, logoFile: null, logoPreview: "" });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.organizationName.trim()) {
      newErrors.organizationName = "Organization name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.hrAdminName.trim()) {
      newErrors.hrAdminName = "HR Admin name is required";
    }

    if (!formData.hrAdminEmployeeCode.trim()) {
      newErrors.hrAdminEmployeeCode = "Employee code is required";
    }

    if (!formData.hrAdminPan.trim()) {
      newErrors.hrAdminPan = "PAN is required";
    } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.hrAdminPan.toUpperCase())) {
      newErrors.hrAdminPan = "Please enter a valid PAN (e.g., ABCDE1234F)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({
        ...formData,
        hrAdminPan: formData.hrAdminPan.toUpperCase(),
      });
    }
  };

  const handleClose = () => {
    setFormData({
      organizationName: "",
      email: "",
      contactPhone: "",
      hrAdminName: "",
      hrAdminEmployeeCode: "",
      hrAdminPan: "",
      logoFile: null,
      logoPreview: "",
    });
    setErrors({});
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Subscribe to {planName} Plan
          </DialogTitle>
          <p className="text-muted-foreground">
            {planPrice}/month • Enter your organization details to continue
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Logo Upload */}
          <div className="space-y-2">
            <Label>Company Logo (Optional)</Label>
            <div className="flex items-center gap-4">
              {formData.logoPreview ? (
                <div className="relative">
                  <img
                    src={formData.logoPreview}
                    alt="Logo preview"
                    className="w-16 h-16 object-contain rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-16 h-16 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors">
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="hidden"
                  />
                </label>
              )}
              <span className="text-sm text-muted-foreground">
                Max 5MB, PNG or JPG
              </span>
            </div>
            {errors.logo && (
              <p className="text-sm text-destructive">{errors.logo}</p>
            )}
          </div>

          {/* Organization Name */}
          <div className="space-y-2">
            <Label htmlFor="organizationName">Organization Name *</Label>
            <Input
              id="organizationName"
              value={formData.organizationName}
              onChange={(e) =>
                setFormData({ ...formData, organizationName: e.target.value })
              }
              placeholder="Your Company Name"
            />
            {errors.organizationName && (
              <p className="text-sm text-destructive">{errors.organizationName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="admin@company.com"
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Contact Phone */}
          <div className="space-y-2">
            <Label htmlFor="contactPhone">Contact Phone (Optional)</Label>
            <Input
              id="contactPhone"
              value={formData.contactPhone}
              onChange={(e) =>
                setFormData({ ...formData, contactPhone: e.target.value })
              }
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="text-sm font-medium mb-3">HR Admin Account Details</p>
            
            {/* HR Admin Name */}
            <div className="space-y-2 mb-3">
              <Label htmlFor="hrAdminName">HR Admin Name *</Label>
              <Input
                id="hrAdminName"
                value={formData.hrAdminName}
                onChange={(e) =>
                  setFormData({ ...formData, hrAdminName: e.target.value })
                }
                placeholder="Admin Full Name"
              />
              {errors.hrAdminName && (
                <p className="text-sm text-destructive">{errors.hrAdminName}</p>
              )}
            </div>

            {/* Employee Code */}
            <div className="space-y-2 mb-3">
              <Label htmlFor="hrAdminEmployeeCode">Employee Code *</Label>
              <Input
                id="hrAdminEmployeeCode"
                value={formData.hrAdminEmployeeCode}
                onChange={(e) =>
                  setFormData({ ...formData, hrAdminEmployeeCode: e.target.value })
                }
                placeholder="EMP001"
              />
              {errors.hrAdminEmployeeCode && (
                <p className="text-sm text-destructive">{errors.hrAdminEmployeeCode}</p>
              )}
            </div>

            {/* PAN */}
            <div className="space-y-2">
              <Label htmlFor="hrAdminPan">PAN Number *</Label>
              <Input
                id="hrAdminPan"
                value={formData.hrAdminPan}
                onChange={(e) =>
                  setFormData({ ...formData, hrAdminPan: e.target.value.toUpperCase() })
                }
                placeholder="ABCDE1234F"
                maxLength={10}
              />
              <p className="text-xs text-muted-foreground">
                Will be used as login password (in uppercase)
              </p>
              {errors.hrAdminPan && (
                <p className="text-sm text-destructive">{errors.hrAdminPan}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1"
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-hero text-primary-foreground hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Continue to Payment"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
