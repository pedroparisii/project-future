import React, { useState } from 'react'
import axios from 'axios';
import Logged from '../components/Logged'
import { IoCloseOutline } from "react-icons/io5";
import Rank from '../components/Rank';
import Tooltip from '../components/Tooltip';
import Changelog from '../components/Changelog';
import { Link } from 'react-router-dom'

const Profile = () => {

  // REASON

  const [reason, setReason] = useState("");

  const motivo = event => {
    setReason(event.target.value)
  }

  //MODAL
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const [val, setVal] = useState(0);

  const change = event => {
    setVal(event.target.value)
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const addPoints = async () => {
    if (val === 0) {
      document.getElementById("firstVerify").style.border = "2px solid #bc2e2e";
      return
    }
    if (reason === "") {
      document.getElementById("secondVerify").style.border = "1px solid #bc2e2e";
      return
    }
    try {
      await axios.post("http://localhost:8800/addPontos", { pontos: parseInt(val) });
      updateChangelog(`${parseInt(val)} Pontos | ${reason}`);
      setModal(!modal);
      refreshPage()
    } catch (error) {
      console.error("Error adding pontos:", error);
    }
  };

  const remPoints = async () => {
    if (val === 0) {
      document.getElementById("firstVerify").style.border = "2px solid #bc2e2e";
      return
    }
    if (reason === "") {
      document.getElementById("secondVerify").style.border = "1px solid #bc2e2e";
      return
    }
    try {
      await axios.post("http://localhost:8800/removePontos", { pontos: parseInt(val) });
      updateChangelog(`${parseInt(val)} Pontos  | ${reason}`);
      setModal(!modal);
      refreshPage()
    } catch (error) {
      console.error("Error removing pontos:", error);
    }
  };

  const updateChangelog = (entry) => {
    // Fetch existing changelog from local storage
    let storedChangelog = JSON.parse(localStorage.getItem('changelog')) || [];
  
    // Add the new entry to the changelog
    storedChangelog.push(entry);
  
    // Keep only the latest 5 entries
    storedChangelog = storedChangelog.slice(-5);
  
    // Save the updated changelog to local storage
    localStorage.setItem('changelog', JSON.stringify(storedChangelog));
  };
  


  return (
    <div>
      <Logged/>
      <div className="flex flex-col items-center md:h-[90vh] h-[70vh]">
        <div className="flex flex-col items-center md:mt-20 mt-12">
          <div className='w-[150px] h-[150px] rounded-[50%] border-[2px] border-[#2c2c2c] bg-profile-picture bg-cover'></div>
          <h1 className='text-[22px] mt-4 font-geistr'>Pedro Parisi</h1>
          <h1 className=''>Pontuação atual:</h1>
          <div className="flex items-center mt-3">
           <Rank/>
           <Link to="/table"><Tooltip text={'Clique para vizualizar a tabela de pontos.'}/></Link>
          </div>
          <div className="w-[320px] h-[1px] bg-[#2c2c2c] mt-4"></div>
          <Changelog/>

          <button onClick={toggleModal} className="w-[200px] h-[40px] bg-[#a07506d9] border-[#ffbf00] rounded-md border-[1px] mt-2 flex justify-center items-center mb-8"><p>Alterar pontuação</p></button>
        </div>

        {modal && (
          <div className="w-[100vw] h-[100vh] inset-y-0 inset-x-0 fixed bg-[#0000006e] flex justify-center items-center">
            <div className="md:w-[500px] w-[350px] md:h-[300px] h-[310px] rounded-[10px] bg-[#080808] border-[1px] border-[#2c2c2c] flex flex-col items-center">
              <div className="w-full h-[45px] flex items-center px-3 justify-between mt-2"><h1 className='text-[18px]'>Alterar pontuação:</h1><IoCloseOutline onClick={toggleModal} color='white' fontSize={22}/></div>
              <h2 className='text-[14px] text-[#ffffffc9] pl-3 pr-16'>Aqui você pode adicionar ou remover pontos de acordo com os feitos realizados recentemente, apenas adicione a quantidade de pontos desejada.</h2>
              <input id='firstVerify' type="number" placeholder='Valor de pontos' className='md:w-[410px] w-[310px] h-[30px] mt-6 rounded-[5px] text-black text-[14px] pl-2' onChange={change}/>
              <input id='secondVerify' type="text" placeholder='Motivo da alteração' className='md:w-[410px] w-[310px] h-[30px] mt-3 rounded-[5px] text-black text-[14px] pl-2' onChange={motivo}/>
              <div className="flex items-center justify-center mt-4">
              <button className="md:w-[200px] w-[150px] h-[40px] bg-[#36ff3d4d] rounded-md border-[1px] border-[#2c2c2c] flex justify-center items-center" onClick={addPoints}>Adicionar</button>
              <button className="md:w-[200px] w-[150px] h-[40px] bg-[#ff36364d] rounded-md border-[1px] border-[#2c2c2c] ml-3 flex justify-center items-center" onClick={remPoints}>Remover</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Profile