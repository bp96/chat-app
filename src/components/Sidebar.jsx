// component for the left panel on the page when logged in
import React, { useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Sidebar = () => {
  const [panelVisible, setPanelVisible] = useState(true);

  const handleToggle = () => {
    setPanelVisible(!panelVisible);
  };

  return (
    <>
    <span className="burger-icon" onClick={handleToggle}>
              {panelVisible ? <AiOutlineClose /> : <HiOutlineMenuAlt4 />}
            </span>
    <div className={panelVisible && "sidebar"}>
      {
        <section>
          <div className="menu-items">
            
            {panelVisible && <Navbar />}
          </div>
          {panelVisible && <Search />}
          {panelVisible && <Chats />}
        </section>
      }
    </div></>
  );
};

export default Sidebar;
