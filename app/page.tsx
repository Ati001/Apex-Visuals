import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";

export const metadata = {
  title: "Apex Visuals",
  description: "Video Editing & Motion Graphics Team | Mandi Bahauddin",
};

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
    </>
  );
}