import { Languages, languagesData } from '@/features/language-select/data';

export function getLanguageDataByLabel(label: Languages) {
    return languagesData.find((item) => item.label === label) || languagesData[0];
}
