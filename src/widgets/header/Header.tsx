import React from 'react';
import { Logo } from '@/shared';
import { NavigationItemLabels, Navigation, LanguageSelect } from '@/features';

const Header = () => {
    return (
        <header className="w-full h-16 py-[10px] flex justify-between items-center">
            <div className="flex gap-[30px]">
                <img src={Logo} alt="" />
                <Navigation activeItemLabel={NavigationItemLabels.home} />
            </div>

            <LanguageSelect />
        </header>
    );
};

export default Header;
