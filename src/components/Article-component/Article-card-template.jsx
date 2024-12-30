import articlesData from '../articles.json'
import './article-template.css'
const ArticleCard = function(){
    
    return(
        <>
        
          {
            articlesData.map((article, index) => (

            <div className="the-card" key={index}>
                 

                <div className="featured-image" style={{backgroundImage: `url(${article.featuredImage})`}}>
                    <div className="dateDisplay">
                    {article.dateDisplay}
                    </div>
                </div>

                <div className="article-title-holder">
                    <p className="article-title">
                        {article.title}
                    </p>
                </div>

                <div className="botton-element">
                    <p className="display-category">
                      {article.category}
                    </p>
                    <div className="read-more-btn">
                        <a href="#">
                            Read more
                        </a>
                    </div>
                </div>
               
            </div>    
            
            
            ))
          }
        </>
    )
}

export default ArticleCard