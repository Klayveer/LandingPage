import ClientesImg from "../assets/clientes.svg";

const Clientes = () => {
    return ( 
        <div className=" flex w-full bg-white justify-center items-center h-24 mb-6">
            <img src= {ClientesImg} alt="" />
        </div>
     );
}
 
export default Clientes;