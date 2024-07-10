import { EnIcon, FrIcon, RuIcon } from '@/features/language-select/assets';
import { LanguageSelectItemData } from '@/features/language-select/types';

export enum Languages {
    'ru' = 'RU',
    'en' = 'EN',
    'fr' = 'FR',
}

export const languagesData: LanguageSelectItemData[] = [
    {
        icon: <RuIcon />,
        label: Languages.ru,
    },
    {
        icon: <EnIcon />,
        label: Languages.en,
    },
    {
        icon: <FrIcon />,
        label: Languages.fr,
    },
];
