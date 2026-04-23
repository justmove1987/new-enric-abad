import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtworkPage from "./pages/ArtworkPage";
import Hero from "./components/Hero";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-white text-black dark:bg-[#0e0e0e] dark:text-white transition-colors duration-500"
    >
      <Header dark={dark} toggleDark={() => setDark(!dark)} />

      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main id="gallery">
                <Gallery />
              </main>
            </>
          }
        />

        {/* Página individual */}
        <Route path="/art/:id" element={<ArtworkPage />} />
      </Routes>

      <Footer />
    </motion.div>
  );
}