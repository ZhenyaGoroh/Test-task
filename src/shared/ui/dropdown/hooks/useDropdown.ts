import { useState } from 'react';

export function useDropdown() {
    const [isOpened, setIsOpened] = useState(false);

    function toggleOpen() {
        setIsOpened((prev) => !prev);
    }

    return { isOpened, toggleOpen };
}
