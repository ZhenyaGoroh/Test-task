import { navigationData } from '@/features/navigation/data';
import {
    NavigationItemData,
    NavigationItemLabels,
} from '@/features/navigation/types';
import classNames from 'classnames';
import { useState } from 'react';

const NavigationItem = ({
    icon,
    activeIcon,
    text,
    isActive = false,
}: Omit<NavigationItemData, 'label'>) => {
    const itemClass = classNames({
        'text-grayscale/40': !isActive,
        'text-grayscale/70': isActive,
    });

    const [isHovered, setIsHovered] = useState(false);
    return (
        // заменить на Link
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-[10px] items-center justify-center h-full cursor-pointer"
        >
            {isActive || isHovered ? activeIcon : icon}
            <p
                className={classNames(
                    itemClass,
                    isHovered && 'text-grayscale/70',
                    'text-[14px] font-semibold transition',
                )}
            >
                {text}
            </p>
        </div>
    );
};

const Navigation = ({
    activeItemLabel,
}: {
    activeItemLabel: NavigationItemLabels;
}) => {
    return (
        <nav className="flex gap-[30px] items-center">
            {navigationData.map((item) => (
                <NavigationItem
                    key={item.label}
                    {...item}
                    isActive={activeItemLabel === item.label}
                />
            ))}
        </nav>
    );
};

export default Navigation;
