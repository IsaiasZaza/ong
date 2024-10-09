import ActuationSection from "@/components/ActuationSection ";
import Feito from "@/components/Feito";
import NewsLetterForm from "@/components/NewsLetterForm";
import Section from "@/components/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Section />
      <ActuationSection />
      <Feito />
      <NewsLetterForm />
    </main>
  );
}
