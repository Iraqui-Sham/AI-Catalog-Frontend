import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { useState } from "react";

export default function MainLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">

      <Sidebar isOpen={open} onToggle={() => setOpen(!open)} />

      <div className="flex-1 lg:ml-64">

        <Navbar />

        <main className="p-6 bg-gray-50 min-h-screen">
          {children}
        </main>

      </div>
    </div>
  );
}