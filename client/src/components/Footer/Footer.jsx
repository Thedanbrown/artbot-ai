import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4 flex-col">
      <div className="flex items-center mb-4">
        <p className="text-lg mr-4">
          Powered by <a href="https://openai.com/dall-e-2/" target="_blank">Open AI</a>
        </p>
        <a href="https://github.com/Thedanbrown/artbot-ai" target="_blank">
          <i className="fab fa-github h-full w-full"></i>
        </a>
      </div>
      <div>
        <p className="text-sm">&copy; 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
