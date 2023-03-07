import { FC, PropsWithChildren, ReactNode } from "react";
import { ActiveHeaderPage, Header } from "@/components/header/Header";
import { Footer } from "@/components/footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
  activePage?: ActiveHeaderPage;
}

export const MainLayout: FC<MainLayoutProps> = (props) => {
  const { children, activePage } = props;

  return (
    <>
      <Header activePage={activePage} />
      <div className="content">{children}</div>
      <Footer activePage={activePage} />
    </>
  );
};
