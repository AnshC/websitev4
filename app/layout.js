import { Montserrat, Instrument_Serif } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const instrument_serif = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  subsets: ["latin"]
})

export const metadata = {
  title: "Ansh Chauhan",
  description: "Web Developer, Designer, and DJ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${instrument_serif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
