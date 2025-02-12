import { Link } from 'react-router-dom'
import ImageGallery from '../ImageGallery'
import './SideBar.css'
import { fetchData } from '../../config/apiConfig'
import { useEffect, useState } from 'react'


const SideBar = ()=>{

   const [categories,setCategories] = useState([])

   const readCategories = async()=>{
      try {
         const responce = await fetchData('categories')
         setCategories(responce)
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(()=>{
      readCategories()
   },[])
    return(
        <>
          <div className="sidebar-wrapper">
             <div className="container">
                <div className="side-bar-wrapper">
                  <div className="about-posts-search">
                     <div className="sidebar-headers">
                        <h5>Search</h5>
                     </div>
                     <div className="search-form">
                        <form action="">
                           <input type="text" placeholder='Enter your keywords...' />
                           <button type='submit' className=''>
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Symbol-9.svg"/>
                           </button>
                        </form>
                     </div>
                  </div>
                  
                  <div className="about-featured-posts">
                     <div className="featured-posts">
                        <div className="sidebar-headers">
                           <h5>Featured Posts</h5>
                        </div>
                        <div className="a-related-post">
                           <div className="featured-image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Team-mechanic.webp" customClass={'related-featured-img'}/>
                           </div>
                           <div className="post-details">
                              <div className="post-title">
                                 <Link>
                                    <p>
                                       Get Tips for How to Manage
                                       an Inventory System
                                    </p>
                                 </Link>
                              </div>
                              <div className="post-date">
                                 <span>June 18, 2020</span>
                              </div>
                           </div>
                        </div>

                     </div>

                  </div>
                  <div className="about-newsletters">
                     <div className="sidebar-headers">
                           <h5>Newsletter</h5>
                     </div>
                     <div className="newsletter-container">
                        <h5 className='news-letter-header'>
                          Enter your e-mail and subscribe to our newsletter.
                        </h5>
                        <div className="newsletter-form">
                            <form action="" className="subscribe-form">
                              <input type="email" name='email' placeholder='Your Email' />
                              <button type='submit'>Subscribe Now</button>
                            </form>
                        </div>
                     </div>
                  </div>

                  <div className="about-categories">
                     <div className="sidebar-headers">
                           <h5>Categories List</h5>
                     </div>
                     <div className="categories-container">
                        {
                           categories.map((item,index)=>{
                              if(item?.count)
                              return(
                              <div className="a-category" key={index}>
                                 <div className="category-name-wrapper">
                                    <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Document-icon.svg"/>
                                    <Link>
                                    <span className='category-name'>{item?.name}</span>
                                    </Link>
                                 </div>
                                 <div className="with-category-counter ">
                                    <span>{item?.count}</span>
                                 </div>
                              </div>
                           )})
                        }
                     </div>
                  </div>
                 
                  <div className="about-gallery">
                     <div className="sidebar-headers">
                           <h5>Our Gallery</h5>
                     </div>
                     <div className="categories-container">
                        <div className="a-gallery">
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Research.webp" customClass={'sidebar-gallery-img'}/>
                           </div>
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Wielding.webp" customClass={'sidebar-gallery-img'}/>
                           </div>
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Work-it.webp" customClass={'sidebar-gallery-img'}/>
                           </div>
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Explaination.webp" customClass={'sidebar-gallery-img'}/>
                           </div>
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/14559cfd42c489c88f1b13d757a990d5-scaled.jpeg" customClass={'sidebar-gallery-img'}/>
                           </div>
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Team-work.webp" customClass={'sidebar-gallery-img'}/>
                           </div>
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Our-Work.webp" customClass={'sidebar-gallery-img'}/>
                           </div>
                           <div className="image">
                              <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Trinity-garage.webp" customClass={'sidebar-gallery-img'}/>
                           </div>
                           
                          
                           

                        </div>
                     </div>
                  </div>
                 
                </div>

             </div>
          </div>
         
          
        </>
    )
}

export default SideBar