export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/xjgjpzyn"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        className="border-b border-black/20 dark:border-white/20 bg-transparent py-1 text-sm outline-none placeholder:opacity-50"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="border-b border-black/20 dark:border-white/20 bg-transparent py-1 text-sm outline-none placeholder:opacity-50"
      />

      <textarea
        name="message"
        placeholder="Message"
        required
        rows={3}
        className="border-b border-black/20 dark:border-white/20 bg-transparent py-1 text-sm outline-none resize-none placeholder:opacity-50"
      />

      <button
        type="submit"
        className="
          mt-3 
          text-xs 
          tracking-widest 
          self-start
          border-b 
          border-current 
          pb-1
          hover:opacity-60 
          transition
        "
      >
        SEND
      </button>
    </form>
  );
}