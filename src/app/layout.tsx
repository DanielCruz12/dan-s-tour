import { Inter } from "next/font/google";
import { Header } from "@/components/header";
/* import { ThemeProvider } from "@/components/theme-provider"
 */ import "./globals.css";
import Footer from "@/components/footer";
import NewsletterSection from "@/components/newsletter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Echemonos-untour - Your Travel Companion",
  description: "Discover amazing destinations and book your next adventure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        {children}
        <NewsletterSection />
        <Footer />
      </body>
    </html>
  );
}
