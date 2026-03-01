import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function PageIllustration({
  multiple = false,
}: {
  multiple?: boolean;
}) {
  return (
    <>
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 overflow-hidden w-full flex justify-center animate-fade-in"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-40 sm:opacity-100 scale-75 sm:scale-100 transition-transform duration-1000 ease-in-out hover:scale-105"
          src={Illustration}
          width={846}
          height={594}
          alt="Page illustration"
          priority
        />
      </div>

      {multiple && (
        <>
          <div
            className="pointer-events-none absolute left-1/2 top-[400px] -z-10 -mt-20 -translate-x-full opacity-30 sm:opacity-50 hidden sm:block animate-fade-in-delayed"
            aria-hidden="true"
          >
            <Image
              className="max-w-none transition-all duration-700 hover:scale-110"
              src={BlurredShapeGray}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-[440px] -z-10 -translate-x-1/3 hidden sm:block animate-fade-in-delayed-more"
            aria-hidden="true"
          >
            <Image
              className="max-w-none transition-all duration-1000 hover:scale-110"
              src={BlurredShape}
              width={760}
              height={668}
              alt="Blurred shape"
            />
          </div>
        </>
      )}
    </>
  );
}