import { useState } from 'react';
import pt from '../assets/br.png'
import en from '../assets/en.png'
import ja from '../assets/ja.png'
import i18n from 'i18next';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Lang from './Lang';
import { FormControl, InputLabel } from '@mui/material';
import { useTranslation } from 'react-i18next';


export default function SelectLang() {
    const { t } = useTranslation()
    const [lang, setLang] = useState({
        lang: 'pt'
    })

    const handleChange = (event, newValue) => {
        i18n.changeLanguage(newValue)
        lang.lang = newValue
        console.log(lang)
    };


    return (
        <>

            <Select
                indicator={<KeyboardArrowDown />}
                sx={{
                    width: 100, color: "white", fontSize: '1.1em',
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    }, background: 'transparent', "&:hover": {
                        backgroundColor: "transparent",color: '#fff'
                    }
                }}

                // startDecorator={<Lang />}
                size="sm"
                variant="plain"
                placeholder={t("navbar.lang")}
                onChange={handleChange}>
                <Option value="pt"><img style={{ marginRight: '.3rem' }} width={25} src={pt} alt="Bandeira do Brasil" /> PT-BR</Option>
                <Option value="en"><img style={{ marginRight: '.3rem' }} width={25} src={en} alt="Bandeira do USA" /> EN</Option>
                <Option value="ja"><img style={{ marginRight: '.3rem' }} width={25} src={ja} alt="Bandeira do Japão" /> JA</Option>
            </Select>
        </>

    );
}
