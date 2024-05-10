// components/ResumeSelect.jsx
"use client" 
import { useState } from 'react';

const ResumeSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelection = (e) => {
    const value = e.target.value;
    setSelectedOption(value);

    if (value === 'ipfs') {
      window.open('https://scarlet-tricky-otter-220.mypinata.cloud/ipfs/QmQc5DA6NVp5jkovURvVTugSzKCSWvM16MptWziGUNcSnw/?pinataGatewayToken=DHaBY_FGWo0w5EQyPo9ps3a34mVrcK_ACxzKzvdUSk8WOUYm4sNOgrk8TmD-l4x0', '_blank');
    } else if (value === 'local') {
      window.location.href = '/Daniel-Magro-Resume.pdf';
    }
  };

  return (
    <>
      <div className="bg-black text-xl text-green-300">
        <select
          value={selectedOption}
          onChange={handleSelection}
          className="bg-black text-xl text-green-300 p-2 rounded"
        >
          <option value="" disabled>Select Resume Location</option>
          <option value="ipfs">Download from IPFS</option>
          <option value="local">Download Locally</option>
        </select>
      </div>
    </>
  );
};

export default ResumeSelect;
