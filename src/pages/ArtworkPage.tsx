import { useParams, Link } from "react-router-dom";
import { artworks } from "../data/artworks";

export default function ArtworkPage() {
  const { id } = useParams();
  const art = artworks.find((a) => a.id === Number(id));

  if (!art) {
    return <div className="p-10">Artwork not found</div>;
  }

  return (
    <div className="min-h-screen px-6 md:px-10 py-10">
      
      {/* Back */}
      <Link to="/" className="text-sm opacity-60 hover:opacity-100">
        ← Back
      </Link>

      <div className="mt-10 grid md:grid-cols-2 gap-12 items-start">
        
        {/* Imagen */}
        <div className="relative">
          <img
            src={art.image}
            alt={`${art.title} - pintura contemporánea de Enric Abad`}
            className="w-full max-h-[80vh] object-cover"
          />

       
        </div>

        {/* Info */}
        <div className="max-w-md">
          <h1 className="text-2xl mb-4 tracking-wide">{art.title}</h1>
          
          <p className="opacity-60 mb-6">{art.price}</p>

          {/* Descripción */}
          <p className="leading-relaxed mb-10 text-sm opacity-80">
            {art.description}
          </p>

          {/* Estado */}
          {art.sold ? (
            <div className="space-y-2">
              <p className="text-sm opacity-50">This piece is sold</p>
              <p className="text-xs opacity-40">
                Contact for similar works
              </p>
            </div>
          ) : (
            <a
              href={art.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block 
                border 
                px-6 
                py-3 
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

      </div>
    </div>
  );
}