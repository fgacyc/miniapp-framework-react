import { create } from 'zustand'
import {jwtDecode} from "jwt-decode";
import i18n from '@/locales/i18n';

function extractTokenAndLanguage(url) {
    let regex = /token=([^&]+).*?&language=([^&]+)/;
    let match = url.match(regex);
    if (match) {
        let token = match[1];
        let language = match[2];
        return { token: token, language: language };
    } else {
        return { token: null, language: null };
    }
}


export const useUserStore = create((set) => ({
    token: null,
    user : null,
    UID: null,
    language: 'en',
    initUser: async () => {
        const currentUrl = window.location.href;
        let { token,language } = extractTokenAndLanguage(currentUrl);
        if (!token) return;
        set({ token: token });
        if (language) set({ language: language });
        void i18n.changeLanguage(language);
        const decodedData = jwtDecode(token);
        if (!decodedData) return;
        set({ UID: decodedData.sub });
        const domain = decodedData.aud[1];
        const response = await fetch(domain, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const data = await response.json();
        // console.log("data", data)
        set({ user: data });
    }
}))