"use client"
import { useState } from 'react';

export default function NewsLetterForm() {
    const [form, setForm] = useState({ name: '', email: '', telefone: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Enviando...');

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('Mensagem enviada com sucesso!');
                setForm({ name: '', email: '', telefone: '' });
            } else {
                const data = await res.json();
                setStatus(data.message || 'Erro ao enviar a mensagem.');
            }
        } catch (error) {
            console.error(error);
            setStatus('Erro ao enviar a mensagem.');
        }
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 px-8 py-8 font-sans">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-3xl font-semibold mb-4 text-blue-950">Newsletter Gamboa Ação</h2>
                <p className="text-blue-900">
                    Cadastre-se aqui e receba todas as novidades da Gamboa Ação
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="md:w-1/3 bg-white p-6 rounded-md shadow-md"
            >
                <div className="mb-4">
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full border-b-2 border-gray-300 focus:border-orange-500 px-3 py-2 focus:outline-none"
                        placeholder="Nome *"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full border-b-2 border-gray-300 focus:border-orange-500 px-3 py-2 focus:outline-none "
                        placeholder="Email *"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type='tel' // Corrigido para 'tel' em vez de 'number'
                        name="telefone"
                        value={form.telefone}
                        onChange={handleChange}
                        required
                        className="w-full border-b-2 border-gray-300 focus:border-orange-500 px-3 py-2 focus:outline-none"
                        placeholder="Seu número"
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center text-gray-600">
                        <input type="checkbox" className="mr-2" />
                        Aceito receber informações sobre as atividades da Gamboa Ação.
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition"
                >
                    Cadastrar
                </button>
                {status && <p className="mt-4 text-center text-gray-600">{status}</p>}
            </form>
        </div>
    );
}
