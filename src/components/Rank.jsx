import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const Rank = () => {

  var patente = ""
  const [rank, setRank] = useState(0);

  const getPontos = async () => {
    try {
      const res = await axios.get("https://api-project-future.vercel.app/");
      setRank(res.data[0].pontos);
    } catch (error) {
      toast.error(error);
    }
  };  

  useEffect(() => {
    getPontos();
  }, [setRank]);

  function getRank() {
    if (rank <= 999) {
        patente = '1.webp'
    } else if (rank <= 1999) {
        patente = '2.webp'
    } else if (rank <= 2999) {
        patente = '3.webp'
    } else if (rank <= 3999) {
        patente = '4.webp'
    } else if (rank <= 5999) {
        patente = '5.webp'
    } else if (rank <= 8999) {
        patente = '6.webp'
    } else if (rank >= 9000) {
        patente = '7.webp'
    }
  }
  
  getRank();
  
  return (
    <div className='w-[150px] h-[40px] flex items-center justify-center rounded-md border-[1px] border-[#2c2c2c] bg-[#202020]'>
        <img className='ml-[-10px]' width={35} src={require('../ranks/' + patente)} alt="rank" />
        <p className='ml-1 text-[17px]'>{rank}</p>
    </div>
  )
}

export default Rank
