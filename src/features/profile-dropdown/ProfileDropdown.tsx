import { BellIcon } from '@/shared';
import classNames from 'classnames';
import React from 'react';

const ProfileDropdown = () => {
    const isNotification = true;

    return (
        <div className="flex gap-6 items-center">
            <div
                className={classNames(
                    isNotification &&
                        'after:absolute after:w-[5px] after:h-[5px] after:bg-red-500 after:rounded-full after:top-0 after:-right-1',
                    'w-5 h-5 flex items-center justify-center relative',
                )}
            >
                <BellIcon />
            </div>
        </div>
    );
};

export default ProfileDropdown;
