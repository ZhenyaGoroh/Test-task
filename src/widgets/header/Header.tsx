import React from 'react';
import { Logo, ProfileIcon } from '@/shared';
import {
    NavigationItemLabels,
    Navigation,
    LanguageSelect,
    ProfileDropdown,
} from '@/features';

const Header = () => {
    return (
        <header className="w-full h-16 py-[10px] flex justify-between items-center">
            <div className="flex gap-[30px]">
                <img src={Logo} alt="" />
                <Navigation activeItemLabel={NavigationItemLabels.home} />
            </div>
            <LanguageSelect />
            <ProfileDropdown />
            <div className="w-10 h-10 bg-grayscale/20 rounded-[10px] flex items-center justify-center">
                <ProfileIcon />
            </div>
        </header>
    );
};

export default Header;
