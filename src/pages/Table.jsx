import React from "react";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center md:h-[90vh] h-[70vh]">
        <h1 className="text-[32px] mb-6 font-geistm">Tabela de Pontos</h1>
        <table className="border-collapse md:min-h-[35%] min-h-[60%] md:min-w-[750px] min-w-[350px] md:text-[22px] md:mb-[75px]">
            <thead className="bg-[#ffffff1f] text-center">
                <tr>
                    <th>Tipo</th>
                    <th>Motivo</th>
                    <th>Quantia</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr className="border-b border-[#ffffff1f]">
                    <td><span className="text-[#43bc2e]">+</span> Adicionar</td>
                    <td>1x Hora de estudo</td>
                    <td>30pts</td>
                </tr>
                <tr className="border-b border-[#ffffff1f]">
                    <td><span className="text-[#43bc2e]">+</span> Adicionar</td>
                    <td>1x Simulado</td>
                    <td>300pts</td>
                </tr>
                <tr className="border-b border-[#ffffff1f]">
                    <td><span className="text-[#bc2e2e]">-</span> Remover</td>
                    <td>1x Dia de descanso</td>
                    <td>100pts</td>
                </tr>
                <tr>
                    <td><span className="text-[#bc2e2e]">-</span> Remover</td>
                    <td>1x Sair para beber</td>
                    <td>200pts</td>
                </tr>
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
