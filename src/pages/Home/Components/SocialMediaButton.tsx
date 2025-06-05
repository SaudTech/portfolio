import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { BiLogoUpwork } from "react-icons/bi";
import "../index.css";

interface SocialMediaButtonProps {
  type: 'linkedin' | 'github' | 'upwork';
  label: string;
  small?: boolean;
}


const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ type, label, small }) => {
  const links: Record<string, string> = {
    linkedin: 'https://www.linkedin.com/in/saudzubedi/',
    github: 'https://github.com/SaudTech',
    upwork: 'https://www.upwork.com/freelancers/~01687c5690d704c01c',
  };
  const getIcon = () => {
    switch (type) {
      case 'linkedin':
        return BsLinkedin;
      case 'github':
        return BsGithub;
      case 'upwork':
        return BiLogoUpwork;
      default:
        return null;
    }
  };
  return (
    <a
      href={links[type]}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-1 glow-on-hover"
    >
      <div className="flex items-center gap-1 glow-on-hover">
        <div
          className={`grid place-items-center bg-gradient-to-br from-[#C56286] to-[#A15AC3] hover:scale-105 transition-all glow-element ${small ? 'h-5 w-5 rounded' : 'h-7 w-7 rounded-md'}`}
        >
          {React.createElement(getIcon(), {
            className: 'text-white',
            size: small ? 13 : 20,
          })}
        </div>
        <h1 className="font-semibold">{label}</h1>
      </div>
    </a>
  );
};

export default SocialMediaButton;
