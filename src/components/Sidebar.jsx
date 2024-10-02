import React, { useState } from "react";

import {
  CircleHelp,
  History,
  Menu,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  return (
    <div
      className={`${
        extended ? "w-64" : "w-16"
      } h-screen bg-gray-200 text-black flex flex-col justify-between transition-all duration-300`}
    >
      <div>
        <div
          className="p-4 ml-1 rounded-full cursor-pointer transition-colors duration-300"
          onClick={() => setExtended((extended) => !extended)}
        >
          <Menu />
        </div>

        <div className="p-4">
          <div className="relative flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full cursor-pointer">
            <Plus className="w-5 h-4" />
            {extended ? (
              <p>New Chat</p>
            ) : (
              <span className="absolute left-16 bg-gray-200 px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                New Chat
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 p-4">
          <p
            className={`text-sm text-gray-600 uppercase ${
              !extended ? "hidden" : ""
            }`}
          >
            Recent
          </p>
          <div className="mt-2 relative flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full cursor-pointer group">
            <MessageSquare className="w-5 h-4" />
            {extended ? (
              <p>What is React</p>
            ) : (
              <span className="mt-2 absolute left-16 bg-gray-200 px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                What is React
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 space-y-4">
        <div className="relative flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full cursor-pointer group">
          <CircleHelp className="w-5 h-4" />
          {extended ? (
            <p>Help</p>
          ) : (
            <span className="absolute left-16 bg-gray-200 px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Help
            </span>
          )}
        </div>

        <div className="relative flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full cursor-pointer group">
          <History className="w-5 h-4" />
          {extended ? (
            <p>Activity</p>
          ) : (
            <span className="absolute left-16 bg-gray-200 px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Activity
            </span>
          )}
        </div>

        <div className="relative flex items-center space-x-2 hover:bg-gray-300 p-2 rounded-full cursor-pointer group">
          <Settings className="w-5 h-4" />
          {extended ? (
            <p>Settings</p>
          ) : (
            <span className="absolute left-16 bg-gray-200 px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Settings
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
