"use client";
import { usePathname } from "next/navigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <section className="text-3xl border border-yellow-300 h-full">
      <p>Dashboard layout</p>
      <p>pathname: {pathname}</p>
      {children}
    </section>
  );
}
