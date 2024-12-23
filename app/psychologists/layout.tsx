export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section className="text-3xl h-full">

      {children}
    </section>
  )
}
