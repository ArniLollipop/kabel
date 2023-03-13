import { FC, PropsWithChildren, ReactNode, useEffect } from "react";
import { ActiveHeaderPage, Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setIsLoggedIn, setUser } from "@/store/slices/AuthSlice";

interface MainLayoutProps {
  children: ReactNode;
  activePage?: ActiveHeaderPage;
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children, activePage } = props;

  const dispatch = useAppDispatch();
  const { isLoggedIn } = useAppSelector((state) => state.AuthSlice);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const user = localStorage.getItem("user");
    if (token) {
      dispatch(setIsLoggedIn(true));
      user && dispatch(setUser(JSON.parse(user)));
    } else dispatch(setIsLoggedIn(false));
  }, [isLoggedIn]);

  return (
    <>
      <Header activePage={activePage} />
      <div className="content">{children}</div>
      <Footer activePage={activePage} />
    </>
  );
};
