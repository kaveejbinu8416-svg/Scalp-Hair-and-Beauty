export interface ServiceItem {
  id: string;
  name: string;
  category: 'scalp' | 'treatments' | 'styling-color' | 'bridal-groom' | 'facials';
  categoryLabel: string;
  duration: string;
  price: string;
  description: string;
  benefits: string[];
  popular?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'makeovers' | 'scalp' | 'colors' | 'bridal' | 'ambiance';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  comment: string;
  rating: number;
  date: string;
}
