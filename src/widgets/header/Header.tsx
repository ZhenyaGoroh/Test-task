import React from 'react';
import { HeaderProps } from './types';
import {
    DropdownMenu,
    DropdownMenuButton,
    Logo,
    Dropdown,
    DropdownItem,
    useDropdown,
} from '@/shared';
import { NavigationItemLabels, Navigation } from '@/features';

const Header = ({ isAuthorized = false }: HeaderProps) => {
    const { isOpened, toggleOpen } = useDropdown();
    return (
        <header className="w-full h-16 py-[10px] px-[140px] flex justify-between items-center">
            <div className="flex gap-[30px]">
                <img src={Logo} alt="" />
                <Navigation activeItemLabel={NavigationItemLabels.home} />
            </div>

            <Dropdown onOpenChange={toggleOpen}>
                <DropdownMenuButton isOpened={isOpened}>
                    My account
                </DropdownMenuButton>
                <DropdownMenu className="!top-4">
                    <DropdownItem onClick={() => {}}>Profile</DropdownItem>
                    <DropdownItem onClick={() => {}}>
                        Language settings
                    </DropdownItem>
                    <DropdownItem onClick={() => {}}>Log out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </header>
    );
};

export default Header;
