import LanguageSelectItem from '@/features/language-select/components/LanguageSelectItem';
import { Languages, languagesData } from '@/features/language-select/data';
import { useLanguageSelect } from '@/features/language-select/hooks/useLanguageSelect';
import { getLanguageDataByLabel } from '@/features/language-select/tools';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownMenuButton,
    getPersistedState,
    useDropdown,
} from '@/shared';
import classNames from 'classnames';

const LanguageSelect = () => {
    const persistedLanguage = getPersistedState<Languages>('language');

    const { selectedLanguage, handleLanguageChange } =
        useLanguageSelect(persistedLanguage);

    const { isOpened, toggleOpen } = useDropdown();

    return (
        <Dropdown onOpenChange={toggleOpen}>
            <DropdownMenuButton className="w-[80px]" isOpened={isOpened}>
                <LanguageSelectItem
                    label={selectedLanguage}
                    icon={getLanguageDataByLabel(selectedLanguage).icon}
                />
            </DropdownMenuButton>
            <DropdownMenu className="w-[100px] overflow-hidden !top-4">
                <div className="flex flex-col gap-[1px] bg-grayscale/20">
                    {languagesData.map((item) => (
                        <DropdownItem
                            key={item.label}
                            onClick={() => handleLanguageChange(item.label)}
                            className={classNames(
                                item.label === selectedLanguage
                                    ? 'bg-grayscale/20'
                                    : 'bg-white',
                                'py-[10px] px-3 cursor-pointer hover:bg-grayscale/20 transition',
                            )}
                        >
                            <LanguageSelectItem
                                icon={item.icon}
                                label={item.label}
                            />
                        </DropdownItem>
                    ))}
                </div>
            </DropdownMenu>
        </Dropdown>
    );
};

export default LanguageSelect;
