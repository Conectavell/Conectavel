import i18n from 'i18next';
import { initReactI18next } from "react-i18next";
import PTBR from './Locales/pt-BR/pt-BR.json'
import JA from './Locales/ja/ja.json'
import EN from './Locales/en-US/en-US.json'

i18n.use(initReactI18next).init({
    debug: true,
    lng: 'pt-BR',
    interpolation: {
        escapeValue: false,
    }, resources: {
        pt: {
            ...PTBR
        },
        ja:{
            ...JA
        },
        en:{
            ...EN
        }
    },  
    react: {
        wait: true,
    }
})

export default i18n;