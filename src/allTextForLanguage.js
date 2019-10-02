import * as ar from "./assets/languages/ar_texts"
import * as en from "./assets/languages/en_texts"
import * as es from "./assets/languages/es_texts"
import * as fr from "./assets/languages/fr_texts"

const allTextForLanguage = (lang) => {
    switch (lang) {
        case "fr":
            return fr
            

        case "ar":
            return ar
            

        case "es":
            return es
            

        case "en":
            return en
            
        
        default:
            throw new Error("Lanuage not recognized.");
            
            
    }
}



export default allTextForLanguage