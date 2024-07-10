export const setPersistedState = <T>(key: string, value: T) => {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
};
