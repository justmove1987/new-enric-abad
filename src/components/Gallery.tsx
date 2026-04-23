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
                alt={art.title}
                className={`
                  w-full 
                  h-[75vh] 
                  md:h-[400px] 
                  object-cover 
                  transition duration-700 
                  group-hover:scale-105
                  ${art.sold ? "opacity-60" : ""}
                `}
              />
            </Link>

            {/* SOLD overlay */}
            {art.sold && (
              <div className="absolute inset-0 flex items-center justify-center">
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

            {/* Botón */}
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
                  hover:bg-black 
                  hover:text-white 
                  dark:hover:bg-white 
                  dark:hover:text-black 
                  transition
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