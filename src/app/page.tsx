'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import './globals.css';

const Home = () => {
  const [typingText, setTypingText] = useState('');
  const [joke, setJoke] = useState('Loading a joke...');
  const textRef = useRef(null);

  useEffect(() => {
    const fullText = "Hi, I'm Ilanchezhiyan...";
    let index = 0;

    const typeEffect = () => {
      if (index < fullText.length) {
        setTypingText(fullText.slice(0, index + 1));
        index += 1;
        setTimeout(typeEffect, 100); 
      }
    };

    typeEffect();
  }, []);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then(response => response.json())
      .then(data => {
        if (data.joke) {
          setJoke(data.joke);
        } else {
          setJoke('No programming joke available right now.');
        }
      })
      .catch(error => setJoke('Oops! Something went wrong.'));
  };

  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true });
  const { ref: projectsRef, inView: projectsInView } = useInView({ triggerOnce: true });

  const skillsData = [
    { name: 'Java', icon: '/java.jpg' },
    { name: 'Python', icon: '/python.jpg' },
    { name: 'C', icon: '/C.png' },
    { name: 'Javascript', icon: '/javascript.jpg' },
    { name: 'React', icon: '/react_logo.png' },
    { name: 'Angular', icon: '/angular.png' },
    { name: 'React-Native', icon: '/react_logo.png' },
    { name: 'Next JS', icon: '/next.svg' },
    { name: 'Tailwind CSS', icon: '/tailwind.jpg' },
    { name: 'Bootstrap', icon: '/bootstrap.png' },
    { name: 'Flask', icon: '/flask.png' },
    { name: 'Spring Boot', icon: '/springboot.png' },
    { name: 'Node', icon: '/node.png' },
    { name: 'Express JS', icon: '/express.png' },
    { name: 'MySQL', icon: '/mysql.png' },
    { name: 'MongoDB', icon: '/mongo.jpg' },
    { name: 'Firebase', icon: '/firebase.png' },
    { name: 'Docker', icon: '/docker.png' },
  ];

  const projectsData = [
    {
      name: 'Emp-Dashboard',
      description: 'An application deployed to aid human resources and financial managers to monitor and maintain financial and employee data, obtain insights and perform analysis on them. The application is build using Java, Spring Boot and MySQL for the backend services. React, Tailwind CSS are the majorly used frontend frameworks. Smooth lazy loading animations along with reactive UI is employed for the best user experience. The dashboard provides an integrated platform for monitoring and managing both financial and employee data.',
      techStack: ['React', 'Tailwind CSS', 'MySQL', 'H2', 'Spring Boot'],
      link: 'https://github.com/Ilanchz/Employee-Management-Frontend',
    },
    {
      name: 'Query Base',
      description: 'Mobile application designed to streamline complaint and query management for both clients and administrators. Built using React Native with Expo and integrated with Firebase, the app provides a seamless experience on both Android and iOS platforms. It facilitates efficient communication, tracking, and resolution of user issues',
      techStack: ['React Native', 'Firebase', 'Oauth', 'Firestore', 'Android Studio'],
      link: 'https://github.com/Ilanchz/QueryBase---React-Native-Application',
    },
    {
      name: 'Task Manager',
      description: 'Task Manager is a web application that helps you manage your tasks. It is built with React for the frontend, Tailwind CSS for styling, and MongoDB for backend calls and deployed on AWS Singapore server using Render',
      techStack: ['React', 'Tailwind', 'MongoDB', 'Express', 'Node'],
      link: 'https://github.com/Ilanchz/Task-Manager'
    },
    {
      name: 'Graph Visualizer',
      description: 'A Python application with Tkinter GUI and MySQL connector to maintain, generate and plot explicit mathematical functions on a canvas. Along with built in feedback section using SMTP lib to deliver bugs encountered on various devices. Responsive and interactive graphical user interface',
      techStack: ['Python', 'Tkinter', 'MySQL', 'SMTP'],
      link: 'https://github.com/Ilanchz/Plot-Wave-A-programming-approach-to-graphing',
    },
    {
      name: 'Spoofy',
      description: 'Spoofy is a dynamic web application designed for music enthusiasts who want to discover and download their favorite songs with ease. Leveraging the power of the Spotify API and YouTube API, Spoofy provides a seamless experience for finding and acquiring music based on real-time popularity and relevance.',
      techStack: ['Node', 'Express JS', 'HTML/CSS'],
      link: 'https://github.com/Ilanchz/Spoofy',
    },
    {
      name: 'Hate Speech Detection Model',
      description: 'Tool to spot offensive or inappropriate language in text. This tool will be available through a web server, so users can easily send lines or sentences for quick checks. We’re using logistic regression—a straightforward yet powerful method for classifying text—to ensure our system is both effective and easy to understand. Whether it’s for online communities, social media, or customer feedback, our aim is to offer a dependable solution for keeping text content clean and respectful.',
      techStack: ['Python', 'Flask', 'Sklearn'],
      link: 'https://github.com/Ilanchz/Model_Hate_Deploy',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row">

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 md:space-y-6 z-10">
        <a href="#hero" className="w-4 h-4 rounded-full bg-blue-300 transition-colors duration-300"></a>
        <a href="#skills" className="w-4 h-4 rounded-full bg-blue-300 transition-colors duration-300"></a>
        <a href="#projects" className="w-4 h-4 rounded-full bg-blue-300 transition-colors duration-300"></a>
      </div>

      <div className="flex-1">

        <section id="hero" className={`z-100 relative h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-teal-500 transition-opacity duration-1000 ${heroInView ? 'opacity-100' : 'opacity-0'}`} ref={heroRef}>
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g>
                <path
                  fill="#ffffff22"
                  d="M44.7,-65.7C58.2,-56.4,68.4,-42.3,72.6,-28.6C76.8,-14.8,74,-0.6,68.2,13.7C62.5,28,52.9,39.5,40.3,53.6C27.8,67.6,11.6,84.2,-1.7,86.8C-14.9,89.3,-29.7,67.9,-41.1,55.1C-52.5,42.2,-60.4,36.9,-66.6,22.3C-72.9,7.8,-77.5,-11.8,-66.3,-26.2C-55.2,-40.6,-28.6,-49.8,-10.5,-52.6C7.6,-55.4,17.9,-51.7,27.4,-44.3C37,-37,45.9,-25.8,44.7,-14.5C43.6,-3.2,22.3,6.3,11.4,19.4C0.5,32.5,-0.6,48.3,-7.6,55.5C-14.6,62.8,-28.5,62.4,-37.9,53.2C-47.3,44,-51.2,26.1,-52.4,10.4C-53.6,-5.3,-51.9,-20.4,-42.4,-32.1C-32.9,-43.9,-16.8,-51.3,0.6,-58.1C18,-64.8,36,-70.8,44.7,-65.7Z"
                  transform="translate(100 100)"
                  stroke="none"
                />
              </g>
            </svg>
          </div>
          <div className="relative z-10 text-center px-6 md:px-12">
            <h1 className={`text-3xl md:text-5xl mb-4 font-shadows font-extralight ${typingText ? 'typing' : ''}`} ref={textRef}>
              {typingText}
            </h1>
            <p className="text-base md:text-lg mb-6 font-raleway">I'm a passionate developer specializing in creating user intuitive web applications.</p>
            <a href="#skills" className="font-raleway inline-block px-4 py-2 md:px-6 md:py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300">
              Explore My Skills
            </a>
          </div>
        </section>

        <section id="skills" className={`py-16 md:py-20 bg-gray-800 relative ${skillsInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} ref={skillsRef}>
          <div className="relative z-10 container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 font-dosis">&lsquo;The&rsquo; Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {skillsData.map((skill, index) => (
                <div key={index} className="bg-gray-700 p-4 md:p-6 rounded-lg shadow-lg text-center flex flex-col items-center w-72 transform transition-transform hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center justify-center mb-4 space-x-1 md:space-x-2">
                    <Image src={skill.icon} alt={skill.name} width={64} height={64} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white font-dosis">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={`py-16 md:py-20 bg-gray-900 relative ${projectsInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} ref={projectsRef}>
          <div className="relative z-10 container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-raleway text-white mb-8 md:mb-12">My Projects</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg flex flex-col items-start w-full md:w-2/3 h-auto transform transition-transform hover:scale-105 hover:shadow-xl`}
                >
                  <h3 className="text-2xl font-raleway self-center md:text-2xl font-semibold text-white mb-4">{project.name}</h3>
                  <p className="text-gray-400 mb-4 text-left">{project.description}</p>
                  <div className="p-5 flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, idx) => (
                      <span key={idx} className="p-3 bg-blue-700 text-gray-200 rounded-xl text-xs md:text-sm font-raleway font-extrabold">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="pt-5 self-center text-blue-400 hover:text-blue-300 transition duration-300 text-sm md:text-base">Explore CodeBase</a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-4">
              <a href="https://github.com/Ilanchz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
                <Image src="/github.png" alt="GitHub" width={24} height={24} />
                <span>GitHub</span>
              </a>
              <a href="https://in.linkedin.com/in/ilanchezhiyan-v-78876326a" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-gray-400 transition duration-300">
                <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
                <span>LinkedIn</span>
              </a>
            </div>
            <button
              onClick={fetchJoke}
              className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Generate a Joke
            </button>
            <p className="text-gray-400 mt-2 text-center">{joke}</p>
            <h4 className='font-raleway'>
              <a href="https://youtu.be/xvFZjo5PgG0">Click here for free Chatgpt plus API</a>
            </h4>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
