import { assets } from "@/assets/assets";
import { Context } from "@/context/Context";
import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export default function Sidebar1({ children }) {
  const [expanded, setExpanded] = useState(false);
  const {
    onSent,
    recentPrompt,
    setRecentPrompt,
  } = useContext(Context);

  return (
    <aside
      className={`${
        expanded ? "w-64" : "w-[70px]"
      } transition-all duration-300`}
    >
      <nav className="h-full flex flex-col  bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center ">
          {expanded ? <p className="mr-3">Menu</p> : <p></p>}

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-200 border"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src={assets.user_icon}
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2.5 px-3 my-3 
        font-medium rounded-full cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-gray-800"
            : "hover:bg-gray-200 text-gray-600"
        }
      `}
    >
      {icon}
      <span
        className={`
          overflow-hidden transition-all whitespace-nowrap 
          ${expanded ? "w-64 ml-3" : "w-0"}
        `}
      >
        <p>{text}</p>
      </span>

      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-gray-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          whitespace-nowrap overflow-hidden text-ellipsis
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
