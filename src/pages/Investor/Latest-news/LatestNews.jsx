import { useEffect, useState, useRef } from 'react';

import SideBar from "../../../components/SideBar/SideBar"
import './Latest-news.css'
import SiteHeader from "../../../components/header/Header"
import SiteFooter from "../../../components/Footer/Footer"
import { fetchData } from '../../../config/apiConfig';
import ReUsablePost from '../../../components/ReUsablePost';
import ImageGallery from '../../../components/ImageGallery';

const LatestNews = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [postImages, setPostImages] = useState({});
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [singlePostData, setSinglePostData] = useState([])
  const [filteredPosts, setFilteredPosts] = useState([])
  const itemsPerPage = 8;
  const [currentCategory, setCurrentCategory] = useState(null);
  // Fetch posts
  const getPosts = async () => {
    try {
      const response = await fetchData('posts');
      setData(response);
      setFilteredPosts(response)
    } catch (error) {
      setError(error);
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      data.forEach(async (item) => {
        if (item?.categories?.[0]) {
          const categoryName = await getPostCategory(item?.categories[0]);
          
          setCategories((prevCategories) => ({
            ...prevCategories,
            [item.id]: categoryName,
          }));
        }
        if (item?.featured_media) {
          const featuredImage = await getPostImage(item?.featured_media);
          setPostImages((prevImages) => ({
            ...prevImages,
            [item.id]: featuredImage,
          }));
        }
      });
    }

  
  }, [data]);

  const getPostCategory = async (id) => {
    try {
      const response = await fetchData(`categories/${id}`);
      return response?.name;
      
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getPostImage = async (id) => {
    try {
      const response = await fetchData(`media/${id}`);
      return response?.guid?.rendered;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleFilteredPosts = (filteredData) => {
    setFilteredPosts(filteredData)
  }

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
 //Pagination redirect
 const myRef = useRef(null)

 const executeScroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' })

 useEffect(() => {
  executeScroll();
}, [currentPage]); // Runs every time `currentPage` updates



  return (
    <>
      <SiteHeader />
      <div className="custom-hero">
        <div className="child-item-wrapper z-1">
          <h1 className="heading text-uppercase">Latest News</h1>
        </div>
      </div>
      <div className="latest-news-wrapper" ref={myRef}>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="grid article latest-news" >
                    
                    {
                        currentItems?.length > 0 && (
                          currentItems.map((item, index) => (
                              <ReUsablePost
                                  key={index}
                                  item={item}
                                  categories={categories}
                                  postImages={postImages}
                              />
                            ))
                          )
                       
                    }

              </div>
              {/* Pagination Controls */}
                  {/* Pagination Controls */}
              <div className="pagination">
                    <button
                      className="pagination-btn"
                      disabled={currentPage === 1}
                      onClick={() => {
                        setCurrentPage(currentPage - 1);
                        executeScroll();
                      }}
                    >
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Vector.svg" />
                    </button>

                    {/* Page Numbers */}
                    <div className="page-numbers-wrapper">
                      {pageNumbers.map((page) => (
                        <span
                          key={page}
                          className={`page-number ${currentPage === page ? 'active' : ''}`}
                          onClick={() => {
                            setCurrentPage(page);
                            executeScroll();
                          }}
                        >
                          {page}
                        </span>
                      ))}
                    </div>
                    {/* Next Button */}
                    <button
                      className="pagination-btn"
                      disabled={currentPage === totalPages}
                      onClick={() => {
                        setCurrentPage(currentPage + 1);
                        executeScroll();
                      }}
                    >
                      <ImageGallery imageUrl="https://trinity-metals.com/wp-content/uploads/2025/02/Vector-1-1.svg" />
                    </button>
              </div>
            </div>
            <div className="col-md-4">
              <SideBar currentCategories={categories} postTofieldField={data} onFiltedPost={handleFilteredPosts}/>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
};

export default LatestNews;
