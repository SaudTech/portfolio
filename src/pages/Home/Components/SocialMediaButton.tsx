import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import "../index.css";

interface SocialMediaButtonProps {
  type: 'linkedin' | 'github';
  label: string;
}


const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ type, label }) => {
  const links: Record<string, string> = {
    linkedin: 'https://www.linkedin.com/in/saudzubedi/',
    github: 'https://github.com/SaudTech'
  };
  const getIcon = () => {
    switch (type) {
      case 'linkedin':
        return <BsLinkedin />;
      case 'github':
        return <BsGithub />;
      default:
        return null;
    }
  };
  return (
    <a href={links[type]} target='_blank' rel='noreferrer' className='flex items-center gap-1 glow-on-hover'>
      <div className='flex items-center gap-1 glow-on-hover'>
        <div className='h-7 w-7 grid place-items-center rounded-md bg-gradient-to-br from-[#C56286] to-[#A15AC3]  hover:scale-105 transition-all glow-element'>
          {getIcon()}
        </div>
        <h1 className='font-semibold'>{label}</h1>
      </div>
    </a>
  )
}

export default SocialMediaButton