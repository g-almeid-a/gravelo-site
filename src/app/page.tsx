import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      {/* Espaçamento para não cobrir a parte de baixo */}
      <div className="h-20" />

      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <img src="/LogoMelhorQualidade.png" alt="Logo Gravelo" className="fixed bottom-0 rigth-0 w-40 h-auto mb-6" />
      </section>
    </main>
  );
}
