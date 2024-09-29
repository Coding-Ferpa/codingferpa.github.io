import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export default function SocialLinks() {
  const socialMedia = [
    {
      name: 'Instagram',
      url: 'https://instagram.com/codingferpa',
      icon: faInstagram,
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/uqyVCgYUTu',
      icon: faDiscord,
    },
    {
      name: 'Github',
      url: 'https://github.com/Coding-Ferpa',
      icon: faGithub,
    },
  ];

  return (
    <div className="flex justify-center p-4 space-x-6">
      {socialMedia.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FontAwesomeIcon icon={platform.icon} className="w-12 h-12" />
        </a>
      ))}
    </div>
  );
}
