export interface RazorpayPlan {
  name: string;
  priceINR: number;
  priceUSD: number;
  period: 'monthly' | 'yearly';
}

export interface SubscriptionData {
  planName: string;
  amount: number;
  currency: string;
  paymentId: string;
  orderId?: string;
  signature?: string;
  status: 'pending' | 'success' | 'failed';
  createdAt: any;
  userId?: string;
  organizationId?: string;
  email?: string;
}

// Razorpay Test Key (replace with live key in production)
const RAZORPAY_KEY_ID = "rzp_test_S6VSjQt222ctmL";

// Plan prices in INR (convert from USD approximately)
export const planPrices: Record<string, RazorpayPlan> = {
  Starter: {
    name: 'Starter',
    priceINR: 4099, // ~$49
    priceUSD: 49,
    period: 'monthly',
  },
  Professional: {
    name: 'Professional',
    priceINR: 8299, // ~$99
    priceUSD: 99,
    period: 'monthly',
  },
};

declare global {
  interface Window {
    Razorpay: any;
  }
}

// Load Razorpay script dynamically
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

interface PaymentOptions {
  planName: string;
  amount: number;
  currency?: string;
  email?: string;
  contact?: string;
  name?: string;
  userId?: string;
  organizationId?: string;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
}

// Initialize payment with Razorpay (without Firebase for now)
export const initiatePayment = async ({
  planName,
  amount,
  currency = 'INR',
  email,
  contact,
  name,
  onSuccess,
  onError,
}: PaymentOptions): Promise<void> => {
  const isLoaded = await loadRazorpayScript();

  if (!isLoaded) {
    onError?.({ message: 'Failed to load Razorpay SDK' });
    return;
  }

  if (!RAZORPAY_KEY_ID) {
    onError?.({ message: 'Razorpay Key ID not configured' });
    return;
  }

  const options = {
    key: RAZORPAY_KEY_ID,
    amount: amount * 100, // Razorpay expects amount in paise
    currency,
    name: 'HR Management System',
    description: `${planName} Plan Subscription`,
    image: '/favicon.ico',
    prefill: {
      name: name || '',
      email: email || '',
      contact: contact || '',
    },
    notes: {
      planName,
    },
    theme: {
      color: '#7c3aed', // Primary purple color
    },
    handler: (response: any) => {
      // Payment successful
      console.log('Payment successful:', response);
      onSuccess?.(response);
    },
    modal: {
      ondismiss: () => {
        console.log('Payment modal closed');
      },
    },
  };

  const razorpay = new window.Razorpay(options);

  razorpay.on('payment.failed', (response: any) => {
    console.error('Payment failed:', response.error);
    onError?.(response.error);
  });

  razorpay.open();
};
