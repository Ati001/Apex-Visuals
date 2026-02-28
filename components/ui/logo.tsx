import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 transition-transform hover:scale-105" aria-label="Apex Visuals">
      <img 
        src="/images/apex-logo.png" 
        alt="Apex Visuals Logo" 
        /* Increased to 64px height/width */
        className="h-16 w-16 object-contain rounded-xl"
        onError={(e) => console.error("Logo not found")}
      />
    </Link>
  );
}
