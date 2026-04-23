export type Artwork = {
  id: number;
  title: string;
  image: string;
  price: string;
  link: string;
  sold?: boolean;
  description: string;
};

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Silencio I",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    price: "220€",
    link: "https://buy.stripe.com/test_1",
    sold: true,
    description:
      "Una exploración del vacío y la quietud. La obra busca capturar ese momento suspendido donde la luz apenas roza la materia.",
  },
  {
    id: 2,
    title: "Materia",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=800&auto=format&fit=crop",
    price: "180€",
    link: "https://buy.stripe.com/test_2",
    description:
      "Trabajo centrado en la textura y la densidad. Capas superpuestas crean una superficie que invita a ser recorrida lentamente.",
  },
  {
    id: 3,
    title: "Fragmento",
    image: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=800&auto=format&fit=crop",
    price: "250€",
    link: "https://buy.stripe.com/test_3",
    description:
      "Un recorte de algo mayor. La pieza juega con la idea de incompletitud y la tensión entre lo visible y lo sugerido.",
  },
  {
    id: 4,
    title: "Luz tenue",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
    price: "200€",
    link: "https://buy.stripe.com/test_4",
    sold: true,
    description:
      "La luz aparece de forma contenida, casi tímida. Un ejercicio de equilibrio entre presencia y desaparición.",
  },
  {
    id: 5,
    title: "Horizonte roto",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop",
    price: "275€",
    link: "https://buy.stripe.com/test_5",
    description:
      "Una línea que se interrumpe. La obra cuestiona la estabilidad del paisaje y sugiere una ruptura emocional.",
  },
  {
    id: 6,
    title: "Eco",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop",
    price: "190€",
    link: "https://buy.stripe.com/test_6",
    description:
      "Repetición y resonancia. Formas que parecen responderse entre sí, creando una sensación de profundidad temporal.",
  },
  {
    id: 7,
    title: "Suspensión",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
    price: "230€",
    link: "https://buy.stripe.com/test_7",
    description:
      "Un instante detenido. La composición busca eliminar referencias para centrar la atención en el equilibrio puro.",
  },
  {
    id: 8,
    title: "Vacío",
    image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=800&auto=format&fit=crop",
    price: "210€",
    link: "https://buy.stripe.com/test_8",
    sold: true,
    description:
      "No ausencia, sino espacio. El vacío entendido como lugar de posibilidad y contemplación.",
  },
];