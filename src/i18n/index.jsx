import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import PTBR from './Locales/pt-BR/pt-BR.json'
import JA from './Locales/ja/ja.json'
import EN from './Locales/en-US/en-US.json'
//
/*
COMO FAZER A TRADUÇÃO :
1. Criar pasta com nome abreviando localização (pt-BR, ja, ko) na pasta Locales (ela tem um icone diferente);
2. Criar json dentro dessa pasta e criar json com mesmo nome;
3. Repetir essa estrutura no json:
{
    "translation": {
        "btncadastro": "textoTraduzido",
        "btnlogin": "textoTraduzido",
        "Home": "textoTraduzido",
        "Serviços": "textoTraduzido",
        "Colaboradores": "textoTraduzido",
        "Descarte": "textoTraduzido",
        "Quem somos": "textoTraduzido"
    }
}
Obs. o primeiro item : ex. "btncadastro" é o lugar que você quer traduzir.
após os dois pontos, vem o valor que você atribui para lá, ou seja, a tradução.

4. importar json aqui. Ex : import JA from './Locales/ja/ja.json'
5. colocar referencia do json abaixo no objeto "resources" :
resources: {
    ja: {
    ...JA <- modo que foi importado
    }
}

6. se houver duvidas : tentar fazer igual ao componente barraNavegacao.jsx;
*/




i18n.use(initReactI18next).init({
    debug: true,
    lng: 'pt-BR',
    interpolation: {
        escapeValue: false,
    }, resources: {
        pt: {
            ...PTBR
        },

        // ja:{
        //     ...JA
        // },
        en:{

        ja: {
            ...JA
        },
        en: {

            ...EN
        }
    },
    react: {
        wait: true,
    }}
})




export default i18n;

