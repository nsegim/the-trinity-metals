import React, { useEffect } from 'react';
import SiteHeader from '../../components/header/Header'; 
import SiteFooter from '../../components/Footer/Footer';
import "./Careers.css"
import ImageGallery from '../../components/ImageGallery';
import { useState } from 'react';
import ResumeUpload from './DrapDropTest';
import { data, Link } from 'react-router-dom';
import { fetchData } from '../../config/apiConfig';
import moment from 'moment/min/moment-with-locales';
import { useTranslation } from 'react-i18next';



const Careers = () => {
        const { t } = useTranslation()
        const [selectedOption, setSelectedOption] = useState(""); // Empty state for resetting
        const [selectedLocation, setSelectedLocation] = useState("")
        const [data, setData] = useState([])
        
      
        const handleChange = (event) => {
          //alert(`You selected: ${event.target.value}`); // Perform action with the selected value
          setSelectedOption(""); // Reset to default after selection
          setSelectedLocation(event.target.value)
        };
        
        const renderJobPost = async () => {
            try {
                const response = await fetchData('job')
                if(response?.length > 0){
                    setData(response)
                    // setTest("Test!!!")
                }
            } catch (error) {
                console.log(error)
            }
            
           console.log("The data",data)       
        }

        useEffect(() => {
            renderJobPost()
            
        },[])

      

       
       

    return (

        
        <div>
            <SiteHeader />

            {/* Hero section */}
            <div className="custom-hero video-gallery">
                    <div className="child-item-wrapper z-1">
                        <h1 className="heading text-uppercase">{t("careers.careers-title")}</h1>
                    </div>
            </div>
            <div className="get-in-career-Section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 left">
                            <div className="get-in-career">
                                
                            </div>
                            
                        </div>
                        <div className="col-md-6 right">
                            <div className="right-header">
                            <h1>{t("careers.top-title")}</h1>
                            </div>
                            <div className="right-description">
                            <p>{t("careers.top-desc1")}
                            </p>
                            <p>
                                {t("careers.top-desc2")}</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Job list section */}
            <div className="jobs-section-wrapper">
                <div className="container">
                    <div className="find-job-wrapper">
                        <div className="job-search-section">

                            <div className="top-job-search">
                                    <div className="job-filter">
                                    <form action="" className="job-filter">
                                        <div className="search-fields d-flex">
                                            <div className="job-name-field">
                                                <label htmlFor="">{t("careers.search-form.input-title")}</label>
                                                <input type='text' name='job-name' placeholder={t("careers.search-form.input-placeholder")}/>
                                            </div>
                                            <div className="select-location-field">
                                                <div className="select-field">
                                                <select value={selectedOption} onChange={handleChange}>
                                                        <option value="" disabled>
                                                           {t("careers.search-form.select-field-title")}
                                                        </option>
                                                        <option value="Nyakabingo">Nyakabingo</option>
                                                        <option value="Musha">Musha</option>
                                                        <option value="Rutongo">Rutongo</option>
                                                    </select>
                                                </div>
                                            
                                                <input type='text' value={selectedLocation || "Nyakabingo"} readOnly name='job-name' className='near-location'/>
                                            </div>
                                        </div>
                                        
                                        <button>
                                            <ImageGallery imageUrl={'https://trinity-metals.com/wp-content/uploads/2025/03/Container.svg'} alt="search icon" className="seach--icon"/>
                                        </button>
                                    </form>
                                    </div>
                                    {/* <div className="upload-resume">
                                            <ResumeUpload />
                                    </div> */}
                                    </div>
                                

                                    <div className="job-cards-wrapper">
                                        
                                        {
                                            data ? (
                                                  data.map((item, index) => (
                                                    <div key={index} className="card">
                                                        <div className="upper-card">
                                                            <div className="job-name">
                                                            <span>{item?.acf?.job_type}</span>
                                                            <h4 className="job-title">
                                                                {item?.title?.rendered}
                                                            </h4>
                                                            </div>
                                                            <Link to={`/apply/${item?.id}`} className='apply-button'>
                                                            <span>Apply Now</span>
                                                            <ImageGallery imageUrl={"https://trinity-metals.com/wp-content/uploads/2025/03/Container-1.svg"} />
                                                            </Link>
                                                            
                                                        </div>
                                                        <div className="bellow-card">
                                                            <ul className='job-details'>
                                                                <li><ImageGallery imageUrl={"https://trinity-metals.com/wp-content/uploads/2025/03/Symbol.svg"} /><span>{item?.acf?.location}</span></li>
                                                                <li><span className='job-date'>Posting Date</span><span>{moment(item?.date).format("DD/MM/YYYY")}</span></li>
                                                                <li><span className='job-date'>Closing date</span><span>{moment(item?.acf?.closing_date).format("DD/MM/YYYY")}</span></li>
                                                            </ul>
                                                        </div>

                                                    </div>
                                                  ))
                                            ) : (
                                                 <div className='no-position'>
                                                    <p>{t("careers.No-position")}</p>
                                                 </div>
                                            )
                                        }
                                        <div className='no-position'>
                                                <p className='text-center'>{t("careers.No-position")}</p>
                                        </div>
                                    </div>
                        </div>

                    </div>
                </div>
            </div>


         
          

            <SiteFooter />
        </div>
    );
};

export default Careers;


