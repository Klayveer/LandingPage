import Clientes from "./components/Clientes";
import Dados from "./components/Dados";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function App() {
  return (
    <main className="flex flex-col min-h-screen py-3">
      <Header />
      <Hero />
      <Clientes />
      <Services />
      <Dados />
    </main>
  );
}
