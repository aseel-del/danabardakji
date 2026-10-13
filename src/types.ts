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
  currency: 'USD' | 'DHS' | 'AED';
  type: ItemType;
  slug: string;
  quantity: number;
  badge?: string;
  digitalDownloadUrl?: string;
  selectedOption?: string;
}

export interface PackagePlan {
  id: string;
  slug: string;
  name: string;
  arabicName?: string;
  englishName?: string;
  priceDhs: number;
  priceAed?: number;
  priceUsd?: number;
  duration: string;
  subscriberCount: number;
  popular?: boolean;
  tagline?: string;
  description?: string;
  features: string[];
  gumroadUrl?: string;
  headerColor?: string;
  accentColor?: string;
  zoomFollowUps?: number;
  dietPlansCount?: number;
  durationWeeks?: number;
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
  arabicTitle?: string;
  subtitle: string;
  arabicSubtitle?: string;
  priceWithoutFollowUpAed: number; // 350 AED
  priceWithFollowUpAed: number;    // 550 AED
  priceDhs?: number;
  priceUsd?: number;
  category: 'protocol' | 'meal-plan' | 'guide';
  badge: string;
  description: string;
  longDescription: string;
  suitableFor: string[];
  whatsIncluded: string[];
  duration: string;
  downloadFormat: string;
  gumroadUrlWithoutFollowUp?: string;
  gumroadUrlWithFollowUp?: string;
  sampleMealSchedule?: {
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
