import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout({ onDonateClick }) {
  return (
    <>
      <Navbar onDonateClick={onDonateClick} />
      <Outlet />
      <Footer />
    </>
  );
}