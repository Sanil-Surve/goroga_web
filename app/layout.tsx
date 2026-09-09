import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GoRoga - Stress Relief, Meditation and Sleep",
  description:
    "Discover GoRoga, a non-invasive device and mindfulness app offering stress relief, guided meditation, and improved sleep. Ideal for individuals and teams to enhance well-being and productivity.",
  keywords: [
    "GoRoga",
    "Vagus Nerve Stimulation",
    "Stress Relief",
    "Meditation",
    "Sleep",
    "Mental Wellness",
    "Biohacking",
  ],
  icons: {
    icon: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/66e86807c24e8b4bcf470054_Favicon.png",
    apple: "https://cdn.prod.website-files.com/664f8c6767a446b70ba9e96d/66e86839d843c9ee4c247603_Webclip.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#257f8d]/20 selection:text-[#257f8d]">
        {children}
      </body>
    </html>
  );
}

