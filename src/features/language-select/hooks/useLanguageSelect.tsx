import { Languages } from '@/features/language-select/data';
import { setPersistedState } from '@/shared';
import { useState } from 'react';

export function useLanguageSelect(initialLanguage: Languages | undefined) {
    const [selectedLanguage, setSelectedLanguage] = useState<Languages>(
        initialLanguage || Languages.ru,
    );

    function handleLanguageChange(newLanguage: Languages) {
        setSelectedLanguage(newLanguage);
        setPersistedState("language", newLanguage);
    }

    return { selectedLanguage, handleLanguageChange };
}
