import { api } from "@/lib/api";
import { CustomerModel } from "@/utils/customer.type";

export const getOrCreateCustomerByUserId = async (
  userId: string,
): Promise<CustomerModel> => {
  try {
    // Faça uma chamada à API para buscar o cliente pelo userId
    const response = await api.get(`/api/customer?userId=${userId}`);
    const customer = response.data;

    // Se encontrou o cliente, retorna ele
    if (customer) {
      return customer;
    }

    // Se não encontrou, retorna um novo objeto de cliente vazio
    return {
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      userId: "",
      createdAt: null,
      updatedAt: null,
      // Outros campos do cliente conforme necessário
    };
  } catch (error) {
    console.error("Failed to get customer by userId", error);
    // Em caso de erro, pode retornar um novo objeto de cliente vazio ou lançar o erro
    return {
      id: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      userId: "",
      createdAt: null,
      updatedAt: null,
    };
  }
};
