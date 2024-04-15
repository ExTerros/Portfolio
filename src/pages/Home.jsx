import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const texts = [
    {
      icon: <SocialIcon network="github" style={{ height: 25, width: 25 }} />,
      link: 'github.com/ExTerros',
      isLink: true
    },
    {
      icon: <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} />,
      link: 'linkedin.com/in/nicolas-duval-z01/',
      isLink: true
    },
    {
      icon: <SocialIcon network="discord" style={{ height: 25, width: 25 }} />,
      text: 'ExTerros', 
      link: 'discordapp.com/users/113380867614773248',
      isLink: true
    }
  ];

  useEffect(() => {
    const animateText = () => {
      if (!texts[index].text && text !== texts[index].link) {
        setTimeout(() => {
          setText(texts[index].link.slice(0, text.length + 1));
        }, 100);
      } else if (texts[index].text && text !== texts[index].text) {
        setTimeout(() => {
          setText(texts[index].text.slice(0, text.length + 1));
        }, 100);
      } else {
        setTimeout(() => {
          setTimeout(() => {
            setText('');
            setIndex((index + 1) % texts.length);
          }, 1500);
        }, 1500);
      }
    };

    animateText();

    return () => clearTimeout();
  }, [index, text, texts]);

  const handleClick = (link) => {
    if (link.isLink) {
      window.open("https://www." + link.link, '_blank');
    }
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center min-h-screen relative">
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Nicolas Duval</h1>
      <p className="mb-6 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Développeur full stack en formation chez Zone 01 Rouen</p>
      <p 
        className={`text-lg font-normal text-gray-70 lg:text-xl dark:text-gray-400 mb-4 ${texts[index].isLink ? 'cursor-pointer hover:text-blue-500' : ''}`} 
        id="typingText" 
        onMouseDown={() => handleClick(texts[index])}
      >
        {texts[index].icon} {text}
        <span className="select-none animate-blink">|</span>
      </p>
      <NavLink to="/about-me" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative">
        Me Découvrir
      </NavLink>
    </div>
    </>
  );
};

export default Home;
