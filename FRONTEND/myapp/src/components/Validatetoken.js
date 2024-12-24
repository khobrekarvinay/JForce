
import axios from "axios";

export const validateToken = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/api/auth/verify",
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data; 
  } catch (error) {
    return null; 
  }
};
