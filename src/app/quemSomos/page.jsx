import Historia from "@/components/Historia"
import TimelineSwiper from "@/components/TimelineSwiper"
import VisaoEscopoValores from "@/components/VisaoEscopoValores"
import Image from "next/image"

export default function NossaEquipe() {
    return (
        <section className="">
            <div className="relative bg-gray-100 bg-no-repeat p-56" style={{ backgroundImage: "url('/quemSomos.png')", backgroundSize: 'cover' }}>
            </div>
            <div className="">
                <div className='bg-no-repeat ' style={{ backgroundImage: "url('/bg.png')", backgroundSize: 'cover' }}>
                    <div className='flex container mx-auto'>
                        <Image className='py-2 relative' width={180} height={100} src="/rounded.png"></Image>
                        <p className='lg:text-3xl mt-14 ml-8 text-white text-xl'>Quem Somos</p>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <div className=" mx-auto container py-10 text-center">
                    <div className="">
                        <h1 className="text-2xl font-bold mb-6">Somos a Gamboa Ação</h1>
                        <div className="text-start mb-8 flex ">
                            <p className="text-lg w-1/2 mx-auto">
                                A <strong>Gamboa Ação</strong> é uma instituição sem fins lucrativos, situada na região portuária do Rio de Janeiro, <strong>que
                                incentiva o desenvolvimento integral de crianças e adolescentes em situação de vulnerabilidade familiar e
                                social</strong>, com o objetivo de ajudá-los a
                                sonhar e lutar por um futuro melhor e digno.
                            </p>
                        </div>
                    </div>
                </div>
                <Historia />
                <TimelineSwiper />
                <VisaoEscopoValores />
            </div>
        </section>

    )
}