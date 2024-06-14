import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const AppLayout = () => {
  return (
    <>
      <div className="bg-slate-100">
      <Header />
      <Outlet />
      <Footer />
      </div>
    </>
  );
};
