import React from "react";

import Main from "./components/Main";
import Sidebar1, { SidebarItem } from "./components/Sidebar1";
import {
  CircleHelp,
  History,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar1>
        <div className="mt-4">
          <SidebarItem icon={<Plus size={20} />} text="New Chat" active />
        </div>
        <div className="mt-12">
          <SidebarItem icon={<MessageSquare size={30} />} text="Chats" />
        </div>
        <div>
          <SidebarItem icon={<History size={30} />} text="Activity" />
          <SidebarItem icon={<CircleHelp size={30} />} text="Help" />
          <SidebarItem icon={<Settings size={30} />} text="Settings" />
        </div>
      </Sidebar1>
      <Main />
    </>
  );
};

export default App;
