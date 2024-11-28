import { Container, Header } from "@/shared/components";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["cyrillic"],
  variable: "--font-Inter",
  weight: ["400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <hr />
        <Container>
          <main>{children}</main>   
        </Container>
     
      </body>
    </html>
  );
}
