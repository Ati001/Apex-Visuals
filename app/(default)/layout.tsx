export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      <main className="flex-grow">
        {children}
      </main>
      {/* Header and Footer removed from here because they are in RootLayout */}
    </div>
  );
}