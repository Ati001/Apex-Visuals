import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}