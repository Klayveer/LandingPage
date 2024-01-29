import Anos from "./assets/anos.svg";
import levantado from "./assets/levantado.svg";
import Sastifacao from "./assets/sastifacao.svg";
import Projeto from "./assets/projeto.svg";

const Dados = () => {
    return ( 
        
      <div className="flex flex-col py-12 bg-green-100 items-center justify-center">
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={Projeto} className="w-14" alt="" />
            <p className="font-medium">Projeto Realizados</p>
          </div>
          <h1 className="text-primary text-xl font-bold">250 +</h1>
        </div>
        <div className="w-[1px] h-44 bg-zinc-300"></div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={Sastifacao} className="w-14" alt="" />
            <p className="font-medium">Satisfação dos clientes</p>
          </div>
          <h1 className="text-primary text-xl font-bold">85 %</h1>
        </div>
        <div className="w-[1px] h-44 bg-zinc-300"></div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={levantado} className="w-14" alt="" />
            <p className="font-medium">Levantado por clientes</p>
          </div>
          <h1 className="text-primary text-xl font-bold">R$10 M</h1>
        </div>
        <div className="w-[1px] h-44 bg-zinc-300"></div>
        
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <img src={Anos} className="w-14" alt="" />
            <p className="font-medium">Anos no mercado</p>
          </div>
          <h1 className="text-primary text-xl font-bold">2 anos</h1>
        </div>
      </div>
    </div>
     );
}
 
export default Dados;