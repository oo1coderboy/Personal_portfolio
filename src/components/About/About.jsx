import chair from '../../assets/images/chair.jpg';
// import aboutus from '../../assets/aboutsec.jpg';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:w-1/2 lg:w-5/12">
        <img
          src={chair}
          alt="image"
          className="rounded-lg shadow-md object-cover w-full h-full"
        />
      </div>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg mb-6 md:w-1/2 lg:w-6/12">
          <h2 className="text-2xl font-bold text-white mb-4"> Hi, I'm Guddu Kumar Yadav!</h2>
          <ul className="text-white">
            <li><p className="mt-6 text-white font-serif">
            I have a strong educational background, having completed my 10th from A.N.S. High School, Ekma, Saran, with an aggregate of 79%, and my 12th from N.L.S. College, Jaitput Daudpur, Saran. I pursued my B.Tech from NIT Silchar and graduated with an overall CGPA of 8.41.
          </p>
          <p className="mt-4 text-white font-serif">
            I am a passionate individual with interests in playing cricket, watching real story movies, and listening to Hindi music. Alongside my academic pursuits, I have gained 1 year of experience in coding and development. I am a beginner in Java and Python, and I have a solid foundation in Data Structures and Algorithms.
          </p>
          <p className="mt-4 text-white font-serif">
            Currently, I am working in a tech company with 5 months of experience. In this role, I am working on React.js (for frontend), Tailwind (for CSS styling), and Node.js/Express.js (for backend). I have successfully solved 800+ DSA problems in C++ on various platforms like GFG, LeetCode, HackerRank, HackerEarth, and Code Studio.
          </p>
          <p className="mt-4 text-white font-serif">
            I completed my B.Tech in 2023 from NIT Silchar, and I am eager to continue learning and exploring new opportunities in the field of software development.
          </p></li>
            
          </ul>
        </div>
          
        </div>
      </div>
    </div>
  );
}
