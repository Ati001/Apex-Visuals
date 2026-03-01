import VideoThumb from "@/public/images/video-thumbnail.jpg"; 
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Optimized Padding: pt-12 for mobile because Layout already provides pt-20 */}
        <div className="pt-12 pb-12 md:pt-20 md:pb-20">
          
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-3xl font-semibold leading-tight text-transparent sm:text-4xl md:text-6xl"
              data-aos="fade-up"
            >
              Your Go-To Video Editing and <br className="hidden md:block" /> Motion Graphics Team.
            </h1>
            <div className="mx-auto max-w-2xl">
              <p
                className="mb-8 text-lg text-indigo-200/65 md:text-xl"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                At Apex Visuals, we transform your raw footage into cinematic masterpieces. 
                High-quality editing tailored for creators and brands.
              </p>
              
              {/* Centered Portfolio Button */}
              <div className="flex justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group relative inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500"
                    href="#portfolio"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Component */}
          <div className="relative mx-auto max-w-4xl" data-aos="fade-up" data-aos-delay={600}>
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Apex Visuals Showreel"
              video="/videos/Intro-video.mp4" 
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>

        </div>
      </div>
    </section>
  );
}