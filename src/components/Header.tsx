type Props = {
  dark: boolean;
  toggleDark: () => void;
};

export default function Header({ dark, toggleDark }: Props) {
  return (
    <header className="w-full px-6 md:px-8 py-6 md:py-10 flex justify-between items-center">
      
      <h1 className="text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em]">
        ENRIC ABAD
      </h1>

      <div className="flex gap-4 md:gap-6 text-[10px] md:text-xs tracking-widest">
        <a href="#gallery" className="opacity-60 hover:opacity-100 transition">
          WORK
        </a>
        <a href="#bio" className="opacity-60 hover:opacity-100 transition">
          BIO
        </a>
        <a href="#contact" className="opacity-60 hover:opacity-100 transition">
          CONTACT
        </a>

        <button
          onClick={toggleDark}
          className="opacity-60 hover:opacity-100 transition"
        >
          {dark ? "LIGHT" : "DARK"}
        </button>
      </div>
    </header>
  );
}