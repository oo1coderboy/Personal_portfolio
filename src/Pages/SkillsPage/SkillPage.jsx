import React from 'react';
import cont from '../../assets/skills.png';

const SkillPage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src={cont} alt="image2" />
      </div>

      <div className="max-w-2xl mx-auto text-center mt-16 mb-3 text-lg font-serif">
        <h1 className="text-2xl sm:text-5xl font-medium mb-6">Skills</h1>

        {/* Card 1 - Skills */}
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Skills</h2>
          <ul className="text-white">
            <li>C++</li>
            <li>DSA</li>
            <li>Python (Beginner)</li>
            <li>C</li>
            <li>Javascript</li>
            <li>DBMS</li>
          </ul>
        </div>

        {/* Card 2 - Extra Skills */}
        <div className="bg-gradient-to-r from-green-400 via-teal-500 to-blue-500 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-white mb-4">Extra Skills</h2>
          <ul className="text-white">
            <li>Data Structure</li>
            <li>Algorithms</li>
            <li>OOPs</li>
            <li>DBMS</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillPage;
