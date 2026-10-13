export type ItemType = 'package' | 'program' | 'consultation';

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  focusAreas: string[];
  color?: string;
  icon?: any;
}

export interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceNumber: number;
  currency: 'USD' | 'DHS';
  type: ItemType;
  slug: string;
  quantity: number;
  badge?: string;
  digitalDownloadUrl?: string;
}

export interface PackagePlan {
  id: string;
  slug: string;
  name: string;
  priceDhs: number;
  priceUsd: number;
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

export interface ProgramItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  priceUsd: number;
  category: 'protocol' | 'meal-plan' | 'guide';
  badge: string;
  description: string;
  longDescription: string;
  suitableFor: string[];
  whatsIncluded: string[];
  duration: string;
  downloadFormat: string;
  sampleMealSchedule: {
    meal: string;
    timing: string;
    focus: string;
  }[];
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  program: string;
  result: string;
  quote: string;
  rating: number;
}

export interface OrderItem {
  id: string;
  orderNumber: string;
  date: string;
  status: 'Confirmed' | 'Active' | 'Completed';
  items: {
    id: string;
    title: string;
    price: string;
    type: ItemType;
    downloadUrl?: string;
  }[];
  total: string;
  consultationScheduledDate?: string;
}
