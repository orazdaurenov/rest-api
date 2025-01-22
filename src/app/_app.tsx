import { Nunito } from "next/font/google";
import type { AppProps } from "next/app";

const inter = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable} font-nunito`}>
      <Component {...pageProps} />
    </main>
  );
}
