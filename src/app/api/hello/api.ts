import axios from "axios";
import { RegisterData } from "@/app/register/page";

export const login = async (
  email: string,
  password: string
): Promise<string> => {
  const response = await axios.post<{ token: string }>(
    "http://localhost:3000/auth",
    { email, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data.token;
};

export const register = async (data: RegisterData): Promise<boolean> => {
  try {
    const response = await axios.post("http://localhost:3000/accounts", data);
    return response.status === 200;
  } catch (error) {
    console.error(error);
    return false;
  }
};
