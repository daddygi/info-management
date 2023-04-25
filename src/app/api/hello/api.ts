import axios from "axios";

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
