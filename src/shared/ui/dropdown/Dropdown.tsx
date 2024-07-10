import React from 'react';
import {
    Dropdown as MUIDropdown,
    DropdownProps as MUIDropdownProps,
} from '@mui/base/Dropdown';
import { MenuButton, MenuButtonProps } from '@mui/base/MenuButton';
import classNames from 'classnames';
import { ChevronUpIcon } from '@/shared';
import { MenuItem, MenuItemProps } from '@mui/base/MenuItem';
import { Menu, MenuProps } from '@mui/base/Menu';

const Dropdown = ({ children, ...rest }: MUIDropdownProps) => {
    return <MUIDropdown {...rest}>{children}</MUIDropdown>;
};

const DropdownMenuButton = ({
    children,
    className,
    isOpened = false,
    ...rest
}: MenuButtonProps & { isOpened?: boolean }) => {
    return (
        <MenuButton
            {...rest}
            className={classNames(
                className,
                'flex justify-center items-center gap-1',
            )}
        >
            {children}
            <ChevronUpIcon className={isOpened ? '' : 'rotate-180'} />
        </MenuButton>
    );
};

const DropdownMenu = ({ children, className, ...rest }: MenuProps) => {
    return (
        <Menu
            {...rest}
            className={classNames(
                className,
                'drop-shadow-baseShadow bg-white rounded-[10px]',
            )}
        >
            {children}
        </Menu>
    );
};

const DropdownItem = ({ children, ...rest }: MenuItemProps) => {
    return <MenuItem {...rest}>{children}</MenuItem>;
};

export { Dropdown, DropdownMenuButton, DropdownMenu, DropdownItem };
