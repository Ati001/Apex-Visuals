export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col justify-center bg-gray-950">
      {children}
    </main>
  );
}