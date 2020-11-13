export interface Message {
  message: string;
}

export interface Action {
  type: string;
  payload?: any;
}

export interface BaseEntity {
  id: string | null;
}

export interface Widget extends BaseEntity {
  title: string;
  description: string;
  price: number;
}
