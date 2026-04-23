import { artworks, type Artwork } from "../data/artworks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-6 md:px-10 py-10">
      {artworks.map((art: Artwork) => (
        <motion.div
          key={art.id}
          className="group"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="relative overflow-hidden">
            
            {/* Imagen */}
            <Link to={`/art/${art.id}`}>
              <img
                src={art.image}
                alt={`${art.title} - pintura contemporánea de Enric Abad`}
                className="
                  w-full 
                  h-[75vh] 
                  md:h-[400px] 
                  object-cover 
                  transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                  group-hover:scale-[1.03]
                  group-hover:brightness-95
                "
              />
            </Link>

            {/* SOLD */}
            {art.sold && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-white text-xl tracking-[0.3em] bg-black/70 px-4 py-2">
                  SOLD
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="mt-4 flex justify-between items-center text-sm">
            <div>
              <p className="tracking-wide">{art.title}</p>
              <p className="opacity-60">{art.price}</p>
            </div>

            {art.sold ? (
              <span className="text-xs opacity-40">UNAVAILABLE</span>
            ) : (
              <a
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-xs 
                  border 
                  px-4 
                  py-2 
                  relative 
                  overflow-hidden 
                  transition-all duration-300
                  hover:text-white 
                  dark:hover:text-black
                  before:absolute before:inset-0 
                  before:bg-black dark:before:bg-white 
                  before:translate-y-full 
                  before:transition-transform before:duration-300
                  hover:before:translate-y-0
                  before:-z-10
                "
              >
                BUY
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}