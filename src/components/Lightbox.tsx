type Props = {
  image: string;
  title: string;
  onClose: () => void;
};

export default function Lightbox({ image, title, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <img
        src={image}
        alt={title}
        className="max-h-[90%] max-w-[90%] object-contain"
      />
    </div>
  );
}