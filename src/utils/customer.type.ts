export interface CustomerModel {
  id: string;
  name: string;
  phone: string;
  email: string;
  address?: string | null;
  userId: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}
