import Navbar from '../components/Navbar';
import Inicio from '../components/Inicio';
import Produtos from '../components/Produtos';
import Contato from '../components/Contato';
import Sobre from '../components/Sobre';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <Inicio />
      <Produtos />
      <Contato />
      <Sobre />

      {/* Espaçamento para não cobrir a parte de baixo */}
      <div className="h-20" />
      
      {/* Adiciona um marca d'agua*/}
      <img
        src="/logoMelhorQualidade.png" alt="Marca d'água" className="fixed bottom-0 right-0 w-32 h-auto m-4 opacity -30 pointer-events-none"
      />

    </main>
  );
}
