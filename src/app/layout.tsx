import { Inter } from "next/font/google";

/* import { ThemeProvider } from "@/components/theme-provider"
 */ import "./globals.css";

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
        {/*  <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        </ThemeProvider> */}
        {children}
      </body>
    </html>
  );
}
