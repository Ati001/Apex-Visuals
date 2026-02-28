import VideoThumb from "@/public/images/video-thumbnail.jpg"; // <-- CHANGE THIS to your new image name
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Padding-top (pt-32) prevents header overlap */}
        <div className="pt-32 pb-12 md:pt-48 md:pb-20">
          
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-6xl"
              data-aos="fade-up"
            >
              Your Go-To Video Editing and <br className="hidden md:block" /> Motion Graphics Team.
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
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
                    className="btn relative w-full bg-gray-800 text-gray-300 hover:bg-gray-700 sm:w-auto px-8"
                    href="#portfolio"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Component */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Apex Visuals Showreel"
            video="/videos/Intro-video.mp4" // Added leading slash for correct pathing
            videoWidth={1920}
            videoHeight={1080}
          />

        </div>
      </div>
    </section>
  );
}