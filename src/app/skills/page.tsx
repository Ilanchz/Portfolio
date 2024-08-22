import { FaReact, FaAngular, FaPython, FaNodeJs, FaDatabase, FaRobot } from 'react-icons/fa';
import { SiFlask, SiTailwindcss, SiBootstrap, SiMongodb, SiMysql } from 'react-icons/si';

const skillsData = [
  { name: 'React & Next.js', icon: <FaReact className="text-4xl text-blue-600" /> },
  { name: 'Angular', icon: <FaAngular className="text-4xl text-red-600" /> },
  { name: 'Python & Flask', icon: <FaPython className="text-4xl text-yellow-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: 'Tailwind CSS & Bootstrap', icon: <SiTailwindcss className="text-4xl text-sky-400" />, icon2: <SiBootstrap className="text-4xl text-purple-600" /> },
  { name: 'MongoDB & MySQL', icon: <SiMongodb className="text-4xl text-green-600" />, icon2: <SiMysql className="text-4xl text-blue-600" /> },
  { name: 'Machine Learning & NLP', icon: <FaRobot className="text-4xl text-gray-600" /> },
];

export default function Skills() {
  return (
    <section className="py-12 bg-gray-100 min-h-screen">
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skillsData.map((skill, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-72 text-center">
            <div className="flex justify-center mb-4">
              {skill.icon}
              {skill.icon2 && <div className="ml-2">{skill.icon2}</div>}
            </div>
            <h3 className="text-xl font-semibold">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
