import React from "react";

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Fejléc */}
            <header className="bg-blue-600 text-white py-8">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Használtautó Kereskedés</h1>
                    <p className="text-lg mt-2">Találja meg álmai autóját nálunk!</p>
                </div>
            </header>

            {/* Kiemelt autók */}
            <section className="container mx-auto mt-8 px-4">
                <h2 className="text-3xl font-semibold text-center mb-6">Kiemelt autók</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {["Autó 1", "Autó 2", "Autó 3"].map((car, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                            <img
                                src={`https://via.placeholder.com/300x200?text=${car}`}
                                alt={car}
                                className="rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold">{car}</h3>
                            <p className="text-gray-600 mt-2">
                                Ez egy fantasztikus autó, kiváló ár-érték aránnyal!
                            </p>
                            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                                Részletek
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Szolgáltatások */}
            <section className="mt-12 bg-gray-200 py-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6">Szolgáltatásaink</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold">Autó értékesítés</h3>
                            <p className="text-gray-600 mt-2">
                                Válogatott használt autók, amelyek garantáltan megfelelnek az igényeinek.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold">Finanszírozás</h3>
                            <p className="text-gray-600 mt-2">
                                Kedvező hitelkonstrukciók az autóvásárláshoz.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h3 className="text-xl font-bold">Szerviz szolgáltatások</h3>
                            <p className="text-gray-600 mt-2">
                                Karban tartjuk az autóját, hogy mindig kiváló állapotban legyen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kapcsolat */}
            <section className="mt-12 py-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-4">Kapcsolat</h2>
                    <p className="text-gray-700">Elérhetőség: +36 30 123 4567</p>
                    <p className="text-gray-700">Email: info@hasznaltauto.hu</p>
                    <p className="text-gray-700">Cím: 1234 Budapest, Autó utca 12.</p>
                </div>
            </section>

            {/* Lábjegyzet */}
            <footer className="bg-gray-800 text-white py-4 mt-12 text-center">
                <p>&copy; 2025 Használtautó Kereskedés. Minden jog fenntartva.</p>
            </footer>
        </div>
    );
};

export default Home;
