import { jsPDF } from "jspdf";

export const generatePdfGuide = () => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Title
  doc.setFontSize(24);
  doc.setTextColor(59, 130, 246);
  doc.text("HR Management System", pageWidth / 2, 30, { align: "center" });
  
  doc.setFontSize(14);
  doc.setTextColor(100, 100, 100);
  doc.text("Complete Guide", pageWidth / 2, 40, { align: "center" });
  
  // Introduction
  doc.setFontSize(16);
  doc.setTextColor(30, 30, 30);
  doc.text("Overview", 20, 60);
  
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  const intro = "Our HR Management System streamlines employee management, attendance tracking, leave requests, salary slips, and more across multiple organizations.";
  doc.text(doc.splitTextToSize(intro, 170), 20, 70);
  
  // Features Section
  doc.setFontSize(16);
  doc.setTextColor(30, 30, 30);
  doc.text("Key Features", 20, 95);
  
  const features = [
    "Employee Management - Complete profile management with document uploads",
    "Attendance Tracking - Real-time punch-in/out with automated reporting",
    "Leave Management - 12+ leave types with approval workflows",
    "Salary Slip Generation - Automated monthly slips with PDF download",
    "Birthday Wishes - Team culture building with personalized messages",
    "Multi-Organization Support - Manage multiple organizations",
    "Role-Based Access - 5 user roles (Super Admin, HR, HOD, Staff, Intern)"
  ];
  
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  let yPos = 105;
  features.forEach((feature) => {
    doc.text(`• ${feature}`, 25, yPos);
    yPos += 10;
  });
  
  // User Roles Section
  doc.setFontSize(16);
  doc.setTextColor(30, 30, 30);
  doc.text("User Roles", 20, yPos + 10);
  
  const roles = [
    "Super Admin - System-wide access across all organizations",
    "HR Admin - Organization-scoped HR management",
    "HOD - Department head with approval capabilities",
    "Staff - Regular employee access",
    "Intern - Limited access for interns"
  ];
  
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  yPos += 20;
  roles.forEach((role) => {
    doc.text(`• ${role}`, 25, yPos);
    yPos += 8;
  });
  
  // Leave Types Section
  doc.setFontSize(16);
  doc.setTextColor(30, 30, 30);
  doc.text("Leave Types", 20, yPos + 10);
  
  const leaveTypes = [
    "Casual Leave, Sick Leave, Earned Leave",
    "Maternity Leave, Paternity Leave",
    "Compensatory Off, Loss of Pay",
    "Marriage Leave, Bereavement Leave",
    "Study Leave, Sabbatical Leave"
  ];
  
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  yPos += 20;
  leaveTypes.forEach((leave) => {
    doc.text(`• ${leave}`, 25, yPos);
    yPos += 8;
  });
  
  // Tech Stack
  doc.setFontSize(16);
  doc.setTextColor(30, 30, 30);
  doc.text("Technology Stack", 20, yPos + 10);
  
  doc.setFontSize(11);
  doc.setTextColor(80, 80, 80);
  doc.text("Built with React, TypeScript, Firebase, and Tailwind CSS", 25, yPos + 20);
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text("© 2024 HR Management System. All rights reserved.", pageWidth / 2, 285, { align: "center" });
  
  // Download
  doc.save("HR-Management-System-Guide.pdf");
};
