import React from 'react';
import { Center } from "@/components/ui/center";

const PortalCard = ({ title, url, icon }) => {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <div 
      className="cursor-pointer transition-all duration-200 hover:shadow-md group p-6"
      onClick={handleClick}
    >
      <div className="text-center">
        <Center className="mb-4">
          <div className="text-5xl text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-200">
            {icon}
          </div>
        </Center>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PortalCard;
