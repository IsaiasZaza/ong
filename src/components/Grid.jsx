export default function Grid() {
    return (
        <div className="bg-gray-700 py-16 px-8 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
                <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                    <p className="text-4xl font-bold">+ 300</p>
                    <p className="mt-2">crianças e jovens assistidos diretamente ao longo de 8 anos</p>
                </div>
                <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg">
                    <p className="text-4xl font-bold">+ 1500</p>
                    <p className="mt-2">beneficiários impactados indiretamente ao longo de 8 anos</p>
                </div>
                <div className="bg-orange-500 text-white p-8 rounded-lg shadow-lg">
                    <p className="text-4xl font-bold">+ 80</p>
                    <p className="mt-2">famílias impactadas ao longo de 8 anos</p>
                </div>
                <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
                    <p className="text-4xl font-bold">+ 40</p>
                    <p className="mt-2">empregos e renda gerados diretamente ao longo de 8 anos
                    </p>
                </div>
            </div>
        </div>
    );
}
