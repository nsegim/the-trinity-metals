import SiteFooter from "../Footer/Footer";
import SiteHeader from "../header/Header";
import ImageGallery from "../ImageGallery";
import SideBar from "../SideBar/SideBar";
import { fetchData } from "../../config/apiConfig";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Single-post.css";
import SocialShare from "../Social share/SocialShare";
import moment from "moment";
import Spinner from "../Spinner/Spinner";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [featuredImage, setFeaturedImage] = useState(null);
  const [error, setError] = useState(null);
  const [thePostUrl, setThePostUrl] = useState(null); // Post URL for sharing
  
  
  // Fetch post data
  const fetchPostData = async () => {
    try {
      const response = await fetchData(`posts/${id}`);
       setPost(response);
      

      // Fetch featured image if available
      if (response?.featured_media) {
        fetchFeaturedImage(response.featured_media);
         
      }
    } catch (error) {
      setError(error);
      console.error("Error fetching post:", error);
    }
  };

  // Fetch featured image data
  const fetchFeaturedImage = async (mediaId) => {
    try {
      const mediaResponse = await fetchData(`media/${mediaId}`);
      setFeaturedImage(mediaResponse?.source_url || null);
    } catch (error) {
      console.error("Error fetching featured image:", error);
    }
  };

  useEffect(() => {
    fetchPostData();
     //console.log("The featured image render: ",featuredImage)

     
  }, [id]);

  useEffect(() => {
    if (post?.link) {
      setThePostUrl(post.link);
    }
  }, [post]); 

  // useEffect(() => {
  //   fetchPostData();
  //    //console.log("The featured image render: ",featuredImage)

  //    console.log("The Id",id)
  // }, [id]);


  
  const heroSectionStyle = {
    
      backgroundImage: featuredImage ? `url(${featuredImage})` : "none"
    
  }


  return (
    <>
      <SiteHeader />

      {/* Hero Section */}
      <div className="custom-hero single-post" style={heroSectionStyle}>
        <div className="child-item-wrapper z-1">
          <h1 className="heading">{post?.title?.rendered || "Loading..."}</h1>
          <div className="published-date">
            <h4>{moment(post?.date).format('DD MMMM, YYYY')}</h4>
          </div>
        </div>
      </div>

      <div className="single-post-wrapper">
        <div className="container">
          <div className="row">
            {/* Main Post Content */}
            <div className="col-md-8">
              <div className="post-details">
                <div className="post-featured-img-wrapper">
                  {/* {featuredImage ? (
                    <ImageGallery imageUrl={featuredImage} customClass="post-featured-img" />
                  ) : (
                    <Spinner />
                  )} */}
                </div>
                <div className="post-content">
                  <div className="post-meta-wrapper">
                    <ul className="post-meta">
                      <li>
                        <a href="#">
                          <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Icon.svg" />
                          <p>Admin</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <ImageGallery imageUrl="https://contents.trinity-metals.com/wp-content/uploads/2025/02/Document-icon.svg" />
                          <p>Industrial</p>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Post Content */}
                  <div className="the_content">
                    <p dangerouslySetInnerHTML={{ __html: post?.content?.rendered || "Content is loading..." }} />
                  </div>

                  {/* Share Section */}
                  <div className="share-the-post">
                    {/* <ul className="social-icons">
                      {["Background", "Background-1", "Background-2", "Background-3", "Background-4"].map((img, index) => (
                        <li key={index}>
                          <a href="">
                            <ImageGallery imageUrl={`https://contents.trinity-metals.com/wp-content/uploads/2025/02/${img}.svg`} />
                          </a>
                        </li>
                      ))}
                    </ul> */}
                    <SocialShare postUrl={thePostUrl} postTitle={post?.title?.rendered} />
                    
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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

export default SinglePost;
