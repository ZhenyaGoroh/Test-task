import { LanguageSelectItemData } from '@/features/language-select/types';
import React from 'react';

const LanguageSelectItem = ({ icon, label }: LanguageSelectItemData) => {
    return (
        <div className="flex items-center gap-2">
            {icon}
            <p className="text-[14px] font-semibold text-grayscale/70 uppercase">
                {label}
            </p>
        </div>
    );
};

export default LanguageSelectItem;
