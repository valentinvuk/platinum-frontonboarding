import { LoginUserDto } from "../types/types";

export const setLocallyUserAuthData: (login: LoginUserDto) => void = (
    login,
) => {
    localStorage.setItem("token", login.accessToken as string);
    const currentTime = new Date();
    const dataForLocalStorage = JSON.stringify({
        ttl: login.expiresIn,
        expiry: currentTime.getTime() + +login.expiresIn * 1000,
    });
    localStorage.setItem("ttlExpiry", dataForLocalStorage);
};
