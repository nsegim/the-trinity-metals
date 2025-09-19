import { useTranslation } from "react-i18next"
import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import "./Disclaimer.css"

const Disclaimer = () =>{
    const { t } = useTranslation()
    return(
        <>  
           <SiteHeader />
            <div class="custom-hero20"><div class="child-item-wrapper z-1"><h1 class="heading text-uppercase">{t("desclaimer.desclaimer-title")}</h1></div></div>
            <div class="project-content-wrapper">
                <div class="container d-flex justify-content-center pb-5">
                    <div class="information-project custom-margin ">
                        <div className="disclaimer project-brief">
                            <p>
                                <b>
                                    {t("desclaimer.desclaimer-desc")}
                                </b>
                            </p>
                            <p>
                               {t("desclaimer.desclaimer-desc1")}
                            </p>
                        </div>
                        
                    
                    </div>
                
            
                </div>

            </div>
            <SiteFooter />
        </>
    )
}

export default Disclaimer