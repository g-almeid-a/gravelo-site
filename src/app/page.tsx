import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Espaçamento para não cobrir a parte de baixo */}
      <div className="h-20" />

      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <img src="/logo-gravelo-clean.png" alt="Logo Gravelo" className="w-40 h-auto mb-6" />
        <h1 className="text-4xl font-bold tracking-wide">GRAVELO</h1>
        <p className="mt-4 text-lg italic text-gray-700">Estilo não se veste – se vive!</p>
      </section>
    </main>
  );
}
