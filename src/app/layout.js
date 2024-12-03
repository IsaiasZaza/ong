import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@fontsource/itim"; // Defaults to weight 400


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gamboa Acao",
  description: "Bem-vindo ao site do Gamboa Ação, uma iniciativa dedicada a transformar vidas e fortalecer comunidades por meio da educação, cultura e desenvolvimento social. Atuamos com projetos que promovem inclusão e oferecem oportunidades reais para pessoas e famílias, valorizando o potencial humano e estimulando o crescimento coletivo. Nosso compromisso é construir um futuro mais justo e sustentável, com a colaboração de todos. Descubra quem somos, nossas ações e como você pode fazer parte dessa jornada.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="font-itim">
        <section className="lg:mx-20">
          <Header />
        </section>
        {children}
        <Footer />
      </body>
    </html>
  );
}
