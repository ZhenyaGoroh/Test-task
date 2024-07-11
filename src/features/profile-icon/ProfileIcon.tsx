import { userAtom } from '@/entities';
import { ProfileFilledIcon } from '@/shared';
import { useAtomValue } from 'jotai';

const ProfileIcon = () => {
    const { image: userIcon } = useAtomValue(userAtom);
    return userIcon ? (
        <img
            src={userIcon}
            className="rounded-full w-9 h-9 overflow-hidden"
            alt="Profile icon"
        />
    ) : (
        <div className="w-9 h-9 bg-grayscale/30 rounded-full flex items-center justify-center">
            <ProfileFilledIcon />
        </div>
    );
};

export default ProfileIcon;
