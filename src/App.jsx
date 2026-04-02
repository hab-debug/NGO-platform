import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import DonateModal from "./components/DonateModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Impact from "./pages/Impact";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import "./styles/global.css";

const router = (onDonateClick, amount, setAmount) =>
  createBrowserRouter([
    {
      path: "/",
      element: <AppLayout onDonateClick={onDonateClick} />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "programs", element: <Programs /> },
        { path: "impact", element: <Impact /> },
        { path: "contact", element: <Contact /> },
        { path: "donate", element: <Donate amount={amount} setAmount={setAmount} /> },
      ],
    },
  ]);

export default function App() {
  const [donateOpen, setDonateOpen] = useState(false);
  const [hideDonatePrompt, setHideDonatePrompt] = useState(false);
  const [amount, setAmount] = useState("10000");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem("hideDonatePrompt");
    setHideDonatePrompt(saved === "true");
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  const handleDonateClick = () => {
    if (!hideDonatePrompt) setDonateOpen(true);
    else window.location.href = "/donate";
  };

  const closeDonate = () => {
    setDonateOpen(false);
    const saved = localStorage.getItem("hideDonatePrompt");
    setHideDonatePrompt(saved === "true");
  };

  return (
    <>
      {loading && (
        <div className="page-loader" aria-hidden="true">
          <div className="loader-ring" />
          <span>Loading HopeBridge...</span>
        </div>
      )}
      <RouterProvider router={router(handleDonateClick, amount, setAmount)} />
      <DonateModal isOpen={donateOpen} onClose={closeDonate} amount={amount} setAmount={setAmount} />
    </>
  );
}