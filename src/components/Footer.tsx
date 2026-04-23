export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-24 px-6 md:px-8 py-12 md:py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        <div id="bio" className="text-sm leading-relaxed opacity-70">
          <p>
            Pintor contemporáneo centrado en la relación entre luz,
            textura y silencio.
          </p>
        </div>

        <div className="text-sm">
          <p className="mb-2 opacity-60">Contact</p>

          <a href="mailto:tuemail@email.com" className="block hover:underline">
            tuemail@email.com
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            className="block hover:underline mt-2"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="mt-12 text-center text-xs opacity-40">
        © {new Date().getFullYear()} Enric Abad
      </div>
    </footer>
  );
}