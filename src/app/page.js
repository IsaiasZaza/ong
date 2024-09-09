import Feito from "@/components/Feito";
import NewsLetterForm from "@/components/NewsLetterForm";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:py-1 py-28">
      <Section />
      <Feito />
      <NewsLetterForm />
    </main>
  );
}
