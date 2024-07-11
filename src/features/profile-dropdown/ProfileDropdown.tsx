import { userAtom } from '@/entities';
import { ProfileIcon as ProfileIconComponent } from '@/features/profile-icon';
import {
    CoinIcon,
    CompetitionIcon,
    FileIcon,
    PhoneIcon,
    PlusIcon,
    ProfileIcon,
    WalletIcon,
} from '@/shared';
import {
    BellIcon,
    Dropdown,
    DropdownMenuButton,
    useDropdown,
    DropdownMenu,
    DropdownItem,
} from '@/shared';
import classNames from 'classnames';
import { useAtomValue } from 'jotai';

const ProfileDropdown = () => {
    const isNotification = true;
    const user = useAtomValue(userAtom);

    const { isOpened, toggleOpen } = useDropdown();

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
            <Dropdown onOpenChange={toggleOpen}>
                <DropdownMenuButton isOpened={isOpened}>
                    <ProfileIconComponent />
                </DropdownMenuButton>
                <DropdownMenu className="px-3 py-2 w-72 !top-4">
                    <div className="flex gap-[10px] items-center h-14 pb-[5px] relative after:w-full after:absolute after:h-[1px] after:bg-grayscale/20 after:bottom-0 after:rounded-md">
                        <ProfileIconComponent />
                        <p className="text-[14px] font-semibold">
                            {user.firstName} {user.lastName}
                        </p>
                    </div>
                    <div>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <ProfileIcon className="stroke-grayscale/40" />
                            <p>Профиль</p>
                        </DropdownItem>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <PlusIcon className="stroke-grayscale/40" />
                            <p>Добавить организацию</p>
                        </DropdownItem>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <CompetitionIcon className="stroke-grayscale/40" />
                            <p>Мои соревнования</p>
                        </DropdownItem>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <CoinIcon className="stroke-grayscale/40" />
                            <p>
                                Моя подписка до{' '}
                                <span className="text-grayscale/70">
                                    {/* Add data from server */}
                                    12.07.24
                                </span>
                            </p>
                        </DropdownItem>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <WalletIcon className="stroke-grayscale/40" />
                            <p>История платежей</p>
                        </DropdownItem>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <WalletIcon className="stroke-grayscale/40" />
                            <p>Мои билеты</p>
                        </DropdownItem>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <FileIcon className="stroke-grayscale/40" />
                            <p>
                                Лицензия до{' '}
                                <span className="text-grayscale/70">
                                    {/* Add data from server */}
                                    12.07.24
                                </span>
                            </p>
                        </DropdownItem>
                        <DropdownItem
                            className="text-[14px] font-semibold text-grayscale/40 flex h-12 gap-[10px] items-center hover:bg-grayscale/20 transition cursor-pointer rounded-lg"
                            key={self.crypto.randomUUID()}
                        >
                            <PhoneIcon className="stroke-grayscale/40" />
                            <p>Смена номера телефона</p>
                        </DropdownItem>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

export default ProfileDropdown;
