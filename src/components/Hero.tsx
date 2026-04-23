import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Movimiento suave hacia arriba
  const y = useTransform(scrollY, [0, 800], [0, -150]);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      
      {/* Imagen con parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/image.png')",
          y,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/70" />

      {/* Contenido */}
      <div className="relative z-10 px-6">
        
        <motion.h1
          className="text-3xl md:text-6xl tracking-[0.15em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          ENRIC ABAD
        </motion.h1>

        <motion.p
          className="text-sm md:text-base opacity-70 max-w-md mx-auto leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          Pintura contemporánea centrada en la luz, la materia y el silencio.
        </motion.p>

        <motion.a
          href="#gallery"
          className="text-xs tracking-widest opacity-70 hover:opacity-100 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          VIEW WORK
        </motion.a>

      </div>
    </section>
  );
}