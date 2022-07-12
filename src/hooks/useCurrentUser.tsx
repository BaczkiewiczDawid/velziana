import { useNavigate } from "react-router-dom";

const useCurrentUser = () => {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("currentUser");

  if (currentUser === "undefined") {
    navigate("/", { replace: true });
  }

  return currentUser;
};

export default useCurrentUser