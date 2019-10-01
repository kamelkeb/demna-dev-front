import * as ar from "./assets/languages/ar_texts"
import * as en from "./assets/languages/en_texts"
import * as es from "./assets/languages/es_texts"
import * as fr from "./assets/languages/fr_texts"

import language from "src/App"


const language_picker = (lang) => {
    switch (lang) {
        case "fr":
            return fr
            break;

        case "ar":
            return ar
            break;

        case "es":
            return es
            break;

        case "en":
            return en
            break;
        
        default:
            throw "Lanuage not recognized.";
            
            break;
    }
}

export default language_picker(language)