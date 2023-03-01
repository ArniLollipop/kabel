import { FC, PropsWithChildren } from "react";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};
