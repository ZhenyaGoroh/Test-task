import { CoinIcon, CompetitionIcon, FileIcon, PhoneIcon, PlusIcon, ProfileIcon, WalletIcon } from "@/shared";

interface ProfileDropdownItemData {
    icon: React.ReactNode;
    label: string | React.ReactNode;
}

export const profileDropdownData: ProfileDropdownItemData[] = [
    {
        icon: <ProfileIcon className="stroke-grayscale/40"/>,
        label: 'Профиль',
    },
    {
        icon: <PlusIcon className="stroke-grayscale/40" />,
        label: 'Добавить организацию',
    },
    {
        icon: <CompetitionIcon className="stroke-grayscale/40" />,
        label: 'Мои соревнования',
    },
    {
        icon: <CoinIcon className="stroke-grayscale/40" />,
        label: <p>Моя подписка до <span className="text-grayscale/70">12.07.24</span></p>,
    },
    {
        icon: <WalletIcon className="stroke-grayscale/40" />,
        label: 'История платежей',
    },
    {
        icon: <WalletIcon className="stroke-grayscale/40" />,
        label: 'Мои билеты',
    },
    {
        icon: <FileIcon className="stroke-grayscale/40" />,
        label: <p>Лицензия до <span className="text-grayscale/70">12.07.24</span></p>,
    },
    {
        icon: <PhoneIcon className="stroke-grayscale/40" />,
        label: 'Смена номера телефона',
    },
]