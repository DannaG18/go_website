export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}