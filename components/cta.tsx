import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      {/* Background Glow Shape */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2 opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-24 border-t border-slate-800/50">
          <div className="mx-auto max-w-3xl text-center">
            
            {/* Location & Info Tags */}
            <div className="flex flex-wrap justify-center gap-4 mb-8" data-aos="fade-up">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800/40 border border-white/5 text-slate-400 text-sm backdrop-blur-sm">
                📍 Mandi Bahauddin, Punjab, Pakistan
              </span>
              <a 
                href="mailto:m.badarzaman02@gmail.com" 
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-800/40 border border-white/5 text-indigo-400 text-sm backdrop-blur-sm hover:border-indigo-500/30 transition-colors"
              >
                ✉️ m.badarzaman02@gmail.com
              </a>
            </div>

            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-8 text-3xl font-bold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Let's Create Something <br /> Extraordinary Together
            </h2>

            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              {/* WhatsApp Button */}
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group w-full bg-[#25D366] py-3 px-8 rounded-full text-white font-bold shadow-lg hover:shadow-green-500/20 hover:scale-105 transition-all sm:w-auto flex items-center justify-center gap-2"
                  href="https://wa.me/923418453807"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg 
                    className="w-5 h-5 fill-current" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.53.909 3.155 1.389 4.825 1.39h.005c5.448 0 9.886-4.437 9.889-9.886 0-2.641-1.03-5.123-2.902-6.994s-4.353-2.903-6.994-2.903c-5.447 0-9.884 4.438-9.887 9.887-.001 1.769.463 3.49 1.345 4.991l-.143.235-1.129 4.125 4.223-1.107.248-.148z" />
                  </svg>
                  Contact WhatsApp
                </a>
              </div>
            </div>

            {/* Sub-note */}
            <p className="mt-6 text-sm text-slate-500" data-aos="fade-up" data-aos-delay={600}>
              Available for freelance projects and long-term collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}