import { useEffect, useState } from 'react';

import SideBar from "../../../components/SideBar/SideBar"
import './Latest-news.css'
import SiteHeader from "../../../components/header/Header"
import SiteFooter from "../../../components/Footer/Footer"
import { fetchData } from '../../../config/apiConfig';
import ReUsablePost from '../../../components/ReUsablePost';

const LatestNews = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState({});
  const [postImages, setPostImages] = useState({});
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch posts
  const getPosts = async () => {
    try {
      const response = await fetchData('posts');
      setData(response);
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

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <>
      <SiteHeader />
      <div className="custom-hero">
        <div className="child-item-wrapper z-1">
          <h1 className="heading">Latest News</h1>
        </div>
      </div>
      <div className="latest-news-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="grid article latest-news">

                {currentItems.map((item, index) => (
                  <ReUsablePost
                    key={index}
                    item={item}
                    categories={categories}
                    postImages={postImages}
                  />
                ))}
              </div>
              {/* Pagination Controls */}
              <div className="pagination">
                <button 
                  className="pagination-btn" 
                  disabled={currentPage === 1} 
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Prev
                </button>
                <span className="page-number">Page {currentPage} of {totalPages}</span>
                <button 
                  className="pagination-btn" 
                  disabled={currentPage === totalPages} 
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
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
  );
};

export default LatestNews;
