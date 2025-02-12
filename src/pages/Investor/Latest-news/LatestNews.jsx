import SideBar from "../../../components/SideBar/SideBar"
import ImageGallery from "../../../components/ImageGallery"
import './Latest-news.css'
import SiteHeader from "../../../components/header/Header"
import SiteFooter from "../../../components/Footer/Footer"

const LatestNews = () => {
   return(
    <>
       <SiteHeader />
       {/* Hero Section */}
       <div className="custom-hero">
          <div className="child-item-wrapper z-1">
              <h1 className="heading">Latest News</h1>
          </div>
       </div>
       <div className="latest-news-wrapper">
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <div className= {`grid article latest-news`}>
                        
                        
                            <div className="grid-item">
                                <img src='https://trinity-metals.com/wp-content/uploads/2025/02/innovative-approach.jpeg' alt="" className="featured-image"/>

                                
                                <p className="article_date">26 January, 2024</p>

                                <div className="rt-holder">
                                <h2 className="article-title">
                                Trinity Metals Innovative Approach to the Illegal Mining Issue.
                                </h2>
                                <div className="card-bottom-elements">
                                    <div className="category-holder">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Category-Icon.svg" customClass="category-icon"/>
                                        <span className="category">Innovation</span>
                                    </div>
                                    <div className="read-more-btn-wrapper">
                                    <a href="#" className="read-more-btn">
                                        <span>Read more</span>
                                    </a>
                                    </div>
                                </div>
                                </div>
                                
                            
                            </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                        <SideBar />
                    </div>
                </div>
            </div>
       </div>
       <SiteFooter />
       
    </>
   )   
}

export default LatestNews