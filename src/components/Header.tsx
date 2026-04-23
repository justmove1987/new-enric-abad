import { Link, useNavigate } from "react-router-dom";

type Props = {
  dark: boolean;
  toggleDark: () => void;
};

export default function Header({ dark, toggleDark }: Props) {
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    navigate("/", { state: { scrollTo: id } });
  };

  return (
    <header className="w-full px-6 md:px-8 py-6 md:py-10 flex justify-between items-center">
      
      <h1 className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em]">
        ENRIC ABAD
      </h1>

      <div className="flex gap-4 md:gap-6 text-[10px] md:text-xs tracking-widest">
        
        {/* WORK */}
        <Link
          to="/"
          className="
            relative 
            opacity-60 
            hover:opacity-100 
            transition
            after:absolute 
            after:left-0 
            after:-bottom-1 
            after:h-[1px] 
            after:w-0 
            after:bg-current 
            after:transition-all 
            hover:after:w-full
          "
        >
          WORK
        </Link>

        {/* BIO */}
        <button
          onClick={() => goToSection("bio")}
          className="
            relative 
            opacity-60 
            hover:opacity-100 
            transition
            after:absolute 
            after:left-0 
            after:-bottom-1 
            after:h-[1px] 
            after:w-0 
            after:bg-current 
            after:transition-all 
            hover:after:w-full
          "
        >
          BIO
        </button>

        {/* CONTACT */}
        <button
          onClick={() => goToSection("contact")}
          className="
            relative 
            opacity-60 
            hover:opacity-100 
            transition
            after:absolute 
            after:left-0 
            after:-bottom-1 
            after:h-[1px] 
            after:w-0 
            after:bg-current 
            after:transition-all 
            hover:after:w-full
          "
        >
          CONTACT
        </button>

        {/* DARK MODE */}
        <button
          onClick={toggleDark}
          className="
            opacity-60 
            hover:opacity-100 
            transition 
            hover:scale-105
          "
        >
          {dark ? "LIGHT" : "DARK"}
        </button>
      </div>
    </header>
  );
}