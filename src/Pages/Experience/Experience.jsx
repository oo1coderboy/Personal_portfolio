import exp from '../../assets/experience.png';

export default function Experience() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      

      <div className="grid place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src={exp} alt="image2" />
      </div>

      <div className="max-w-2xl mx-auto text-center mt-16 mb-3 text-lg font-serif">
        <h1 className="text-2xl sm:text-5xl font-medium mb-6 ">Experience</h1>
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-lg shadow-lg mb-6">
          <ul className="text-white">
            <li>I have 1 year of experience in React.js, HTML, CSS, and JavaScript. I have successfully completed various
            projects that demonstrate my technical skills. I am eager to learn more and explore new opportunities in this
            field.</li>
            <li>Currently i was working on Nodejs/Express for backend and also have completed a project using my technical skills.The project i was working on is Time Tracking application which is use to track time spent by employees on different project.</li>
            <li>The database i used for this project was MSSQL.</li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}