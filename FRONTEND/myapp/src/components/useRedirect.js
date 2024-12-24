import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateToken } from "./Validatetoken"; 

const useRedirectIfLoggedIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      validateToken(token).then((isValid) => {
        if (isValid) {
          toast.info("You are already logged in.");
          navigate("/welcome");
        } else {
          localStorage.removeItem("token");
          toast.error("Your session has expired. Please log in again.");
        }
      });
    }
  }, [navigate]);
};

export default useRedirectIfLoggedIn;
