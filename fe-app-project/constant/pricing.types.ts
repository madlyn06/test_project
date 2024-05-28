export interface Feature {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  plans: Plans;
}

export interface Plans {
  data: Daum[];
}

export interface Daum {
  id: number;
  attributes: Attributes2;
}

export interface Attributes2 {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  starter: string;
  professional: string;
  organization: string;
  enterprise: string;
}
