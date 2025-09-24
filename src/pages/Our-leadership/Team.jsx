import { Link } from "react-router-dom"
import SiteFooter from "../../components/Footer/Footer"
import SiteHeader from "../../components/header/Header"
import ImageGallery from "../../components/ImageGallery"
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from "react";
import './Team.css'
import { fetchData } from "../../config/apiConfig";
import Spinner from "../../components/Spinner/Spinner";
import { useTranslation } from "react-i18next";


const Team = () => {
    
       const { t,i18n } = useTranslation()



        const [modalShow1, setModalShow1] = useState(false);
        
        const [modalShow001, setModalShow001] = useState(false);


       //Render Team member for the dashboard
        const [data, setData] = useState([]);
         const [tags, setTags] = useState({});
        // const [memberImage, setMemberImage] = useState({});
         const [error, setError] = useState(null);
         const [boardMember, setBoardMember] = useState([]);
         const [managementMember, setManagementMember] = useState([]);
         const [boardMemberKiny, setBoardMemberKiny] = useState([]);
         const [managementMemberKiny, setManagementMemberKiny] = useState([]);
         const [rutongoBoardMember, setRutongoBoardMember] = useState([]);
         const [activeModal, setActiveModal] = useState(null); // ✅ Single state for modals
         const [bordMembers,setBoardMembers] = useState({
            kiny:[],
            en:[]
         })

         const [managementMembers,setmanagementMembers] = useState({
            kiny:[],
            en:[]
         })

       const currentLang = i18n.language;

         // Fetch posts
         const getMembers = async () => {
           try {
             const response = await fetchData('member-showcase?per_page=100&_embed');
             setData(response);
             

           } catch (error) {
             setError(error);
             console.log(error);
           }
         };
       
         useEffect(() => {
            getMembers();
         }, []);
       
        

         useEffect(() => {
            const processMembers = async () => {
              if (data.length === 0) return;
          
              let boardTemp = [];
              let rutongoBoardTemp = [];
              let managementTemp = [];
              let boardTempKiny = [];
              let managementTempKiny = [];
              let tagsMap = {};
             // let imagesMap = {};
              let tagIds = new Set(); // Collect unique tag IDs for batch fetching
          
              // Collect all tag IDs (handling multiple tags per member)
              data.forEach((item) => {
                if (item?.tags?.length > 0) {
                  item.tags.forEach((tagId) => tagIds.add(tagId)); // ✅ Collect all tags
                }
              });
          
              // Fetch all tags in one API request (instead of one per item)
              const tagResponses = await fetchData(`tags?include=${[...tagIds].join(",")}`);
              const tagLookup = {}; // Map tag ID to tag name
              tagResponses.forEach(tag => {
                tagLookup[tag.id] = tag.name;
              });
              

              

              // Process members with tags and images
              data.forEach((item) => {
                const tagNames = item?.tags?.map(tagId => tagLookup[tagId]) || []; 
                
                tagsMap[item.id] = tagNames; // Store all assigned tags
                
                
                // Categorize team members if at least one tag matches
                if (tagNames.includes("Board member")) boardTemp.push(item);
                if (tagNames.includes("Management Team")) managementTemp.push(item);
                if(tagNames.includes("Rutongo Mines Board Members")) rutongoBoardTemp.push(item);
                if(tagNames.includes("Inama y'Ubutegetsi")) boardTempKiny.push(item);
                if(tagNames.includes("Abagize inama y'ubucukuzi bwa Rutongo")) managementTempKiny.push(item);
                 
            
          
                // Fetch and store featured image
                // if (item?.featured_media) {
                //   imagesMap[item.id] = item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "default-image.jpg";
                // }
              });
          
              // 4️⃣ Update state once (avoids multiple re-renders)
              setTags(tagsMap);


             // setMemberImage(imagesMap);
              setBoardMember(boardTemp);
              setBoardMembers(prev => ({
                                    ...prev,
                                    en: boardTemp,
                                    kiny:boardTempKiny
                                    }));

              setManagementMember(managementTemp);

              setmanagementMembers(prev => ({
                                    ...prev,
                                    en: managementTemp,
                                    kiny: managementTempKiny
                                    }));

              setRutongoBoardMember(rutongoBoardTemp);
            //   setBoardMemberKiny(boardTempKiny)

        

            };
          
            processMembers();

            // console.log("the members: ",managementMemberKiny)
               

           
          }, [data]); // Runs when `data` changes
          
          
      
   
     
   return(
    <>
      <SiteHeader />
      {/* Hero section */}
      <div className="about-hero-section">
         <div className="inner-wrapper">
            <h1 className="heading text-uppercase">{t("our-leadership.our-leadership-title")}</h1>
         </div>
      </div>
      
      {/* Team members section */}
      <div className="Team-container-wrapper ">
         <div className="container d-flex flex-column">

         <div className="header-element pt-5">
               <h2 className="text-center">{t("our-leadership.board-members")}</h2>
            </div>

            <div className="team-members first-grid pb-2">
               
                {
                    
                    bordMembers?.[currentLang === "kiny" ? currentLang : 'en']?.length > 0 ? (
                        
                      <div className="team-member-wrapper">

                        {(currentLang === "kiny" ? bordMembers?.[currentLang === "kiny" ? currentLang : 'en']?.slice()
                         : bordMembers?.[currentLang === "kiny" ? currentLang : 'en']?.slice().reverse()).map((item, index) => (

                            <div key={index} className="single-team-member">
                                 <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
                                        <div className="team-member-details">
                                            <div className="team-member-info">
                                                <h2 className="member-name">
                                                   {item?.title?.rendered}
                                                </h2>
                                                <p className="member-post">
                                                    {item?.acf?.member_personal_information?.designation}
                                                </p>
                                            </div>
    
                                                <Modal
                                                
                                                size="lg"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                show={activeModal === item.id}
                                                onHide={() => setActiveModal(null)}
                                                >
                                                    <Modal.Header closeButton>
                                                        
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <div className="a-member-desc">
                                                            <div className="a-member-image">
                                                            <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
    
                                                            </div>
                                                            <div className="text-content">
                                                                    
                                                            <p dangerouslySetInnerHTML={{ __html: item?.content?.rendered || "Content is loading..." }} />
    
                                                            </div>
                                                        </div>
                                                    
                                                    </Modal.Body>
                                                    
                                                </Modal>
                                                {/* Open modal popup */}
                                            <div className="view-member-desc" onClick={() => setActiveModal(item.id)}>
                                                <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Vector-1.svg"/>
                                            </div>
                                        </div>
                                
                                 </div>
                          )) }

                        </div> 
                      
                    ):(
                        <Spinner />
                    )
                  
                }
 
              
                               
                             
                              
            </div>


            <div className="header-element">
               <h2 className="text-center">{t("our-leadership.executive-management")}</h2>
            </div>


            <div className="team-members second-grid">
              
                         


                          {
                             managementMembers?.[currentLang === "kiny" ? currentLang : 'en']?.length > 0 ? (
                                <div className="team-member-wrapper">
                                  
                                        {(currentLang === "kiny" 
                                            ? managementMembers?.[currentLang === "kiny" ? currentLang : 'en']?.slice() 
                                            : managementMembers?.[currentLang === "kiny" ? currentLang : 'en']?.slice().reverse()
                                            )?.map((item, index) => (
                                    //  managementMembers?.[currentLang === "kiny" ? currentLang : 'en']?.map((item, index) => (
                                        <div key={index} className="single-team-member">
                                        <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
                                               <div className="team-member-details">
                                                   <div className="team-member-info">
                                                       <h2 className="member-name">
                                                          {item?.title?.rendered}
                                                       </h2>
                                                       <p className="member-post">
                                                           {item?.acf?.member_personal_information?.designation}
                                                       </p>
                                                   </div>
           
                                                       <Modal
                                                       
                                                       size="lg"
                                                       aria-labelledby="contained-modal-title-vcenter"
                                                       centered
                                                       show={activeModal === item.id}
                                                       onHide={() => setActiveModal(false)}
                                                       >
                                                           <Modal.Header closeButton>
                                                               
                                                           </Modal.Header>
                                                           <Modal.Body>
                                                               <div className="a-member-desc">
                                                                   <div className="a-member-image">
                                                                   <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
           
                                                                   </div>
                                                                   <div className="text-content">
                                                                           
                                                                   <p dangerouslySetInnerHTML={{ __html: item?.content?.rendered || "Content is loading..." }} />
           
                                                                   </div>
                                                               </div>
                                                           
                                                           </Modal.Body>
                                                           
                                                       </Modal>
                                                   <div className="view-member-desc" onClick={() => setActiveModal(item.id)}>
                                                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Vector-1.svg"/>
                                                   </div>
                                               </div>
                                       
                                        </div>
                                    )
                                 ) 
                                }
                             </div>   
                               
                            ) 
                             : (
                                <Spinner />
                             )
                          }
          
                             
                        
                         
       
                               
                             
                              
            </div>



            {/* <div className="header-element pt-5">
               <h1 className="text-center">Rutongo Mines Board Members</h1>
            </div>

            <div className="team-members">
               

               {    rutongoBoardMember?.length > 0 ? (

                              <div className="team-member-wrapper">

                                {
                                    rutongoBoardMember.slice().reverse().map((item, index) => (
                                        <div key={index} className="single-team-member">
                                        <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
                                               <div className="team-member-details">
                                                   <div className="team-member-info">
                                                       <h2 className="member-name">
                                                          {item?.title?.rendered}
                                                       </h2>
                                                       <p className="member-post">
                                                           {item?.acf?.member_personal_information?.designation}
                                                       </p>
                                                   </div>
           
                                                       <Modal
                                                       
                                                       size="lg"
                                                       aria-labelledby="contained-modal-title-vcenter"
                                                       centered
                                                       show={activeModal === item.id}
                                                       onHide={() => setActiveModal(false)}
                                                       >
                                                           <Modal.Header closeButton>
                                                               
                                                           </Modal.Header>
                                                           <Modal.Body>
                                                               <div className="a-member-desc">
                                                                   <div className="a-member-image">
                                                                   <ImageGallery imageUrl={item._embedded?.['wp:featuredmedia']?.[0]?.source_url || "https://contents.trinity-metals.com/wp-content/uploads/2025/02/animated_loader_gif_n6b5x0.gif"} customClass={'team-member-photo'}/>
           
                                                                   </div>
                                                                   <div className="text-content">
                                                                           
                                                                   <p dangerouslySetInnerHTML={{ __html: item?.content?.rendered || "Content is loading..." }} />
           
                                                                   </div>
                                                               </div>
                                                           
                                                           </Modal.Body>
                                                           
                                                       </Modal>
                                                   <div className="view-member-desc" onClick={() => setActiveModal(item.id)}>
                                                       <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Vector-1.svg"/>
                                                   </div>
                                               </div>
                                       
                                        </div>
                                    )
                                 ) 
                                }
                             </div>   
                            ) 
                             : (
                                <Spinner />
                             )
                          }
              
                               
                             
                              
            </div> */}
            
         </div>
      </div>


      
      
        
      <SiteFooter />
    </>
   )
}

export default Team


