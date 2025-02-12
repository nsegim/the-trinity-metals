import { Children } from "react";

const routes = [
    { name: "Home", path:"/" },
    { 
        name: "About Us", path:"/about",
        children: [
            { name: "Our History", path:"/about/our-history" },
            { name: "Our Values", path:"/about/our-values" },
            { name: "Our Strategies", path:"/about/our-strategies" },
            { name: "Our Products", path:"/about/our-products" },
            { name: "Our Leadership", path:"/about/our-leadership" }
            
        ]
    },
    { 
        name: "Our Projects", path:"/our-projects",
        children: [
            { name: "Rutongo", path:"/our-projects/rutongo" },
            { name: "Nyakabingo", path:"/our-projects/nyakabingo" },
            { name: "Musha", path:"/our-projects/musha" },
            { name: "Lithium Exploration", path:"/our-projects/lithium-exploration" },
            
            
        ]
    },

    { name: "Sustainability", path:"/sustainability" },
    
    { 
        name: "Investor Relations", path:"/investor-relations",
        children: [
            { name: "Reports", path:"/investor-relations/reports" },
            { name: "Latest News", path:"/investor-relations/latest-news" },
            { name: "Gallery", path:"/investor-relations/gallery",
               children: [
                { name: "Photos", path:"/investor-relations/gallery/photos" },
                { name: "Videos", path:"/investor-relations/gallery/videos" },
               ]
           }    
       ]
    },
]

export default routes