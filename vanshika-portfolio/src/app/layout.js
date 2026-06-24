import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  title: "Vanshika Bansal | My Playful Personal Scrapbook",
  description: "Welcome to Vanshika Bansal's personal portfolio website! Vanshika is a cheerful, creative, and talkative 9-year-old girl in Class 5. Explore her amazing 3D pen creations, drawings, skating adventures, and family memories.",
  keywords: ["Vanshika Bansal", "Vanshika", "Portfolio", "Personal Scrapbook", "3D Pen Creations", "St. John's School Firozabad", "Skating"],
  authors: [{ name: "Vanshika Bansal" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full font-sans antialiased text-slate-800 bg-[#fffcf5] flex flex-col">
        {children}
      </body>
    </html>
  );
}
