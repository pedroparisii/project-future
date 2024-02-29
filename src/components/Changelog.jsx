import React, { useState, useEffect } from 'react';

const Changelog = () => {
  const [changelog, setChangelog] = useState([]);

  useEffect(() => {
    // Fetch changelog from local storage
    const storedChangelog = JSON.parse(localStorage.getItem('changelog')) || [];
    setChangelog(storedChangelog);
  }, []);

  return (
    <div className="w-full p-2">
      <h2>Changelog:</h2>
      <ul>
        {changelog.map((entry, index) => (
          <li className="w-auto h-[40px] bg-[#202020] rounded-md border-[1px] border-[#2c2c2c] mt-2 flex items-center px-3" key={index}><p key={index} style={{ color: entry.includes('Pontos  |') ? 'red' : 'green' }}>{entry.includes('Pontos  |') ? '-' : '+'} <span className='text-white'>{entry}</span></p></li>
        ))}
      </ul>
      
    </div>
  );
};

export default Changelog;
