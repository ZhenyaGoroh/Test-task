import { Logo, ProfileIcon } from '@/shared';
import {
    NavigationItemLabels,
    Navigation,
    LanguageSelect,
    ProfileDropdown,
} from '@/features';
import { useAtomValue } from 'jotai';
import { userAtom } from '@/entities';

const Header = () => {
    const user = useAtomValue(userAtom);

    return (
        <header className="w-full h-16 py-[10px] flex justify-between items-center">
            <div className="flex gap-[30px]">
                <img src={Logo} alt="" />
                <Navigation activeItemLabel={NavigationItemLabels.home} />
            </div>
            <div className='flex gap-8'>
                <LanguageSelect />
                {user.authorized ? (
                    <ProfileDropdown />
                ) : (
                    <div className="w-10 h-10 bg-grayscale/20 rounded-[10px] flex items-center justify-center">
                        <ProfileIcon className="stroke-grayscale/70" />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
