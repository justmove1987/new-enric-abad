import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ArtworkPage from "./pages/ArtworkPage";
import Hero from "./components/Hero";
import Cursor from "./components/Cursor";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [dark, setDark] = useState(false);
  const location = useLocation();

  // DARK MODE
  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [dark]);

  // SCROLL A SECCIONES (BIO / CONTACT)
  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);

      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
    <Cursor />
    <ScrollToTop />
      <Cursor />

      <div className="min-h-screen bg-white text-black dark:bg-[#0e0e0e] dark:text-white transition-colors duration-500">
        
        <Header dark={dark} toggleDark={() => setDark(!dark)} />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            
            {/* HOME */}
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Hero />

                  <main id="gallery">
                    <Gallery />
                  </main>
                </motion.div>
              }
            />

            {/* ARTWORK */}
            <Route
              path="/art/:id"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <ArtworkPage />
                </motion.div>
              }
            />

          </Routes>
        </AnimatePresence>

        <Footer />
      </div>
    </>
  );
}