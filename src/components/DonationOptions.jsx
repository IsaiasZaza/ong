import Image from 'next/image';
import Link from 'next/link';


const DonationOptions = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Cartão de Transferência Bancária */}
                <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
                    <div className='bg-white'>
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/transferencia.png"
                                alt="Transferência Bancária"
                                width={200}
                                height={150}
                            />
                        </div>
                    </div>

                    <h2 className="text-orange-500 font-bold text-xl mb-2">Doe por Transferência Bancária</h2>
                    <p>Banco Itaú - 341<br />
                        Agência 6002<br />
                        Conta Corrente 19757-7<br />
                        CNPJ: 24.884.949/0001-60<br />
                        Associação Beneficente Gamboa Ação
                    </p>
                </div>

                {/* Cartão de Pix */}
                <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
                    <div className='bg-white'>
                        <div className="flex justify-center mb-4 ">
                            <Image
                                src="/pix.png" // Substitua pelo caminho do ícone do Pix
                                alt="Doar por Pix"
                                width={150}
                                height={80}
                            />
                        </div>
                    </div>
                    <h2 className="text-orange-500 font-bold text-xl mb-2">Doe por Pix</h2>
                    <p>Pix - CNPJ:<br />
                        24.884.949/0001-60<br />
                        Selecione <strong>repetir = mensal</strong>
                    </p>
                </div>

                {/* Cartão de PayPal */}
                <div className="bg-gray-100 shadow-md rounded-lg p-6 text-center">
                    <div className='bg-white'>
                        <div className="flex justify-center mb-4">
                            <Image
                                src="/paypal.png"
                                alt="Doar via PayPal"
                                width={200}
                                height={80}
                            />
                        </div>
                    </div>

                    <Link target='_blank' href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=RREGBJQ28YU2E&ssrt=1730225617926" className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full ">
                        Doar com um Cartão
                    </Link>
                    <p className='mb-4 mt-3'>Você será redirecionado
                        para a página segura do PayPal.
                    </p>
                    <p className="text-base mt-2">Selecione: <strong>transformar em doação mensalmente</strong></p>
                </div>
            </div>
        </>
    )
}

export default DonationOptions;