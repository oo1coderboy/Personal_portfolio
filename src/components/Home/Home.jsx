// import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import home from '../../assets/images/cup.jpg';
import specs from '../../assets/images/specs.jpg';
// import pic1 from '../../assets/homepage1.png';
// import pic2 from '../../assets/homepage2.png';

const HomePage = () => {
  const [name, setName] = useState('');
  const [tech, setTech] = useState('');
  const targetTech = 'development';
  const targetName = 'GUDDU RAJ';
  useEffect(() => {
    let index = 0;
    let isPaused = false;

    const intervalId = setInterval(() => {
      if (!isPaused) {
        setName(targetName.substring(0, index));
        setTech(targetTech.substring(0, index));

        index = (index + 1) % (Math.max(targetName.length, targetTech.length) + 1);

        if (index === 0) {
          isPaused = true;
          setTimeout(() => {
            isPaused = false;
          }, 8000);
        }
      }
    }, 800);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl font-serif">
              Hello, I'm <span className="text-red-500">{name}</span>
              <span className="hidden sm:block text-4xl">Passionate about coding and <p className="text-red-500">{tech}</p></span>
            </h2>

          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img className="w-96 rounded-lg" src={home} alt="image1" />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-96 w-48 rounded-lg" src={specs} alt="image2" />
      </div>

      <div className="max-w-2xl mx-auto text-center mt-16 font-serif">
        <h1 className="text-2xl sm:text-5xl font-medium mb-6 ">Educational Background</h1>
        <p>
          Completed 10th from A.N.S. High School, Ekma Saran with 79% aggregate. <br />
          Completed 12th from N.L.S. College, Jaitput Daudpur Saran. <br />
          Completed B.Tech from NIT Silchar with an overall CGPA of 8.41.
        </p>

        <h2 className="text-2xl sm:text-5xl font-medium mt-8 mb-6 font-serif">Interests</h2>
        <p>
          Keen interest in playing cricket, watching real story movies, and listening to Hindi music.
        </p>

        <h2 className="text-2xl sm:text-5xl font-medium mt-8 mb-6 font-serif">Experience</h2>
        <p>
          Having 1year (6 Months intern + 6 Months current experience) of experience. <br />
          Currently working in a 'ZL Technology Private Limited' company for 5 months. <br />
          Working on React.js (frontend), Tailwind CSS (for styling), and Node.js/Express.js (backend).
        </p>

        <h2 className="text-2xl sm:text-5xl font-medium mt-8 mb-6 font-serif">Coding Skills</h2>
        <p>
          Completed the course of Data Structures and Algorithms in C++ from Coding Ninja. <br />
          Beginner in Java , Python and Powershell Scripting. <br />
          Worked on Node.js/Express for backend and MSSQL for the database. <br />
          Solved 800+ DSA problems in C++ on platforms like GFG, LeetCode, HackerRank, HackerEarth, and Code Studio.
        </p>

        <p className="text-lg mt-8 mb-4 font-serif">Graduated in 2023 from NIT Silchar</p>
        <Link
          to="/contact"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 mb-4 font-serif"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
