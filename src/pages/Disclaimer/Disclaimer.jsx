import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import "./Disclaimer.css"

const Disclaimer = () =>{
   
    return(
        <>  
           <SiteHeader />
            <div class="custom-hero20"><div class="child-item-wrapper z-1"><h1 class="heading text-uppercase">Disclaimer</h1></div></div>
            <div class="project-content-wrapper">
                <div class="container d-flex justify-content-center pb-5">
                    <div class="information-project custom-margin ">
                        <div className="disclaimer project-brief">
                            <p>
                                <b>Trinity Metals Limited is committed to keeping its website information up-to-date and accurate
                                    and will take the necessary steps to keep the website operating smoothly. Trinity Metals Limited
                                    makes no representations or warranties of any kind, express or implied, about the website&#39;s
                                    completeness, accuracy, reliability, suitability or availability for any purpose.
                                </b>
                            </p>
                            <p>
                                Trinity Metals accepts no liability for any loss or damage, including, without limitation, indirect or
                                consequential loss or damage, or any loss or damage arising from loss of data or profits arising
                                out of, or in connection with, the use of this website. Use of any personal data you provide to
                                Trinity Metals Limited via your response or request for information will be limited to the
                                guidelines outlined in our privacy statement.

                                All intellectual property rights to content on this website are vested in Trinity Metals Limited.
                                Copying, disseminating, and any other use of these materials is not permitted without the written
                                permission of Trinity Metals Limited, except and only insofar as otherwise stipulated in
                                regulations of mandatory law (such as the right to quote), unless specific content dictates
                                otherwise.

                                If you have any questions or problems with the accessibility of the website, please get in touch
                                with us at the group email address or phone number detailed on the website.
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