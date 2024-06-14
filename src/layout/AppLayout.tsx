import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppLayout = () => {
  return (
    <>
      <div className="bg-slate-100">
        <Header />
        <Outlet />
        <Footer />
        <ToastContainer pauseOnHover={false} draggable={true} />
      </div>
    </>
  );
};
