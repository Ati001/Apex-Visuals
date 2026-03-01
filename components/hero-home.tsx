import VideoThumb from "@/public/images/video-thumbnail.jpg"; 
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* pt-32 for mobile (to clear the fixed header) and pt-48 for desktop */}
        <div className="pt-32 pb-12 md:pt-48 md:pb-20">
          
          <div className="pb-10 text-center md:pb-16">
            <h1
              className="mb-6 animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
              data-aos="fade-up"
            >
              Your Go-To Video Editing and <br className="hidden md:block" /> Motion Graphics Team.
            </h1>
            
            <div className="mx-auto max-w-2xl">
              <p className="mb-8 text-base text-indigo-200/65 md:text-xl" data-aos="fade-up" data-aos-delay={200}>
                At Apex Visuals, we transform your raw footage into cinematic masterpieces. 
              </p>
              
              <div className="flex justify-center" data-aos="fade-up" data-aos-delay={400}>
                <a className="btn rounded-full bg-indigo-600 px-8 py-3 text-sm font-bold text-white hover:bg-indigo-500" href="#portfolio">
                  View Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* The Video Container Fix */}
          <div className="relative mx-auto max-w-4xl px-2 sm:px-0" data-aos="fade-up" data-aos-delay={600}>
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