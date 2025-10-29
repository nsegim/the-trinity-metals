import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import './Contact.css'
const ContactUs = ()=>{
    return(
        <>
          <SiteHeader />
          
          {/* Hero section */}
         <div className="map-section-on">
           <iframe src="https://www.google.com/maps/d/u/0/embed?mid=100vTr8CO2dKGx-fwP17brI9aZTt8ah4&ehbc=2E312F" width="100%" height="500"></iframe>
         </div>

         {/* Get in touch section */}
         <div className="get-in-touchSection">
           <div className="container">
              <div className="row">
                <div className="col-md-6 left">
                    <div className="get-in-touch">
                        
                    </div>
                    <div className="contact-details">
                        <p>
                        We will get back to you within 24 hours, or you can call us everyday,
                        09:00 AM - 12:00 PM
                        </p>
                        <p>
                            <ImageGallery />
                            <span>+250 791 959 034</span>
                        </p>
                    </div>
                </div>
                <div className="col-md-6 right">
                    Hello
                </div>
              </div>
           </div>
         </div>
          <SiteFooter />
        </>
    )
}

export default ContactUs
