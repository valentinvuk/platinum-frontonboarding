export const getLocalByKey: (key: string) => string | null = (key) => {
    return localStorage.getItem(key);
};
