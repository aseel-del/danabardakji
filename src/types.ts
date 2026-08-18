export interface PackagePlan {
  id: string;
  name: string;
  priceDhs: number;
  priceUsd?: number;
  duration: string;
  subscriberCount: number;
  popular?: boolean;
  tagline: string;
  description: string;
  features: string[];
  options?: {
    id: string;
    label: string;
    subscribers: number;
    duration: string;
    features: string[];
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
}

export interface ConsultationOption {
  id: string;
  title: string;
  priceUsd: number;
  duration: string;
  note: string;
  description: string;
}
