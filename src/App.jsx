import React from "react";
import Navbar from "./components/Navbar";
import { ReactTyped } from "react-typed";
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="flex flex-col items-center justify-center md:h-[90vh] h-[70vh]">
        <div className="flex flex-col items-center text-center mb-28">
          <h1 className="md:text-[24px] font-geistb text-gray-400">PLANEJANDO SEU FUTURO COM DESAFIOS</h1>
          <h1 className="md:text-[80px] text-[40px] font-geistb">PROJECT FUTURE</h1>
          <ReactTyped className="md:text-[30px] text-[20px]" strings={["Simples, rápido e desafiador."]} typeSpeed={40} />
          <Link to="/profile"><button className="bg-gray-400 w-[200px] h-[40px] rounded-[4px] border-[2px] border-gray-600 md:mt-6 mt-4">Acesse seu perfil</button></Link>
        </div>
      </div>
    </div>
  );
}

export default App;
