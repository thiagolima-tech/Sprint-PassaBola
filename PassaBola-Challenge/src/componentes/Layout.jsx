// src/components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Agora o Header cuida do seu próprio menu */}
      <main className="flex-1">
        <Outlet /> {/* Aqui as páginas serão renderizadas */}
      </main>
      <Footer />
    </div>
  );
}
