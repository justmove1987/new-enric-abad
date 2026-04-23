import ContactForm from "./ContactForm";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-32 px-6 md:px-10 py-16 border-t border-black/10 dark:border-white/10"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          
          {/* BIO */}
          <div id="bio" className="text-sm leading-relaxed opacity-70">
            <p>
              Pintor contemporáneo centrado en la relación entre luz,
              textura y silencio. Cada obra explora el equilibrio entre
              materia y vacío.
            </p>
          </div>

          {/* CONTACTO */}
          <div className="text-sm">
            <p className="mb-4 text-xs tracking-widest opacity-50">
              CONTACT
            </p>

            <a
              href="mailto:tuemail@email.com"
              className="block hover:underline mb-2"
            >
              tuemail@email.com
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="block hover:underline"
            >
              Instagram
            </a>
          </div>

          {/* FORM */}
          <div>
            <p className="mb-4 text-xs tracking-widest opacity-50">
              MESSAGE
            </p>

            <ContactForm />
          </div>

        </div>

        {/* FOOTER BOTTOM */}
        <div className="mt-16 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Enric Abad
        </div>

      </div>
    </footer>
  );
}