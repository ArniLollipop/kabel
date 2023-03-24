import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setIsLoggedIn } from "@/store/slices/AuthSlice";
import { useEffect } from "react";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    token ? dispatch(setIsLoggedIn(true)) : dispatch(setIsLoggedIn(false));
  }, [isLoggedIn]);

  return isLoggedIn;
};
