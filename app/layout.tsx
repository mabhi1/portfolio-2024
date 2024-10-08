import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Menu } from "@/components/layout/menu";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Abhishek Mishra's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className={cn("flex flex-col md:flex-row w-full flex-1 overflow-hidden", "min-h-screen md:h-screen")}>
            <Menu />
            <main className="flex-1 w-full md:px-10 lg:px-0 text-sm flex flex-col">
              <div className="flex-1 px-10 overflow-auto w-full flex">{children}</div>
              <Footer />
            </main>
          </div>
          <Toaster closeButton richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
