import React from "react";
import { HeaderProps } from "./types";
import { Logo } from "@/shared";
import { NavigationItemLabels, Navigation } from "@/features";

const Header = ({ isAuthorized = false }: HeaderProps) => {
  return (
    <header className="w-full h-16 py-[10px] px-[140px] flex justify-between items-center">
      <div className="flex gap-[30px]">
        <img src={Logo} alt="" />
        <Navigation activeItemLabel={NavigationItemLabels.home}/>
      </div>
    </header>
  );
};

export default Header;
