import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitaSaarthi | Daily Mind Management & Wisdom App",
  description: "A modern daily life-management app based on the Bhagavad Gita — overcome anxiety, career burnout, and overthinking with practical ancient psychology.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "GitaSaarthi"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#FAF8F5"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[#FAF8F5] text-[#1E1B18] select-none touch-manipulation" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
