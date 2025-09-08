import { Children } from "react";
import { useTranslation } from "react-i18next";

const RoutesConfig = () => {
    const { t } = useTranslation();
    return(
       [
            { name: t("header.home"), path:"/" },
            { 
                name: t("header.about-us"), path:"/about",
                children: [
                    { name: t("header.about.our-history"), path:"/about/our-history" },
                    { name: t("header.about.our-values"), path:"/about/our-values" },
                    { name: t("header.about.our-strategies"), path:"/about/our-strategies" },
                    { name: t("header.about.our-products"), path:"/about/our-products" },
                    { name: t("header.about.our-leadership"), path:"/about/our-leadership" }
                    
                ]
            },
            { 
                name: t("header.OurProjects"), path:"/our-projects",
                children: [
                    { name: t("header.project.rutongo"), path:"/our-projects/rutongo" },
                    { name: t("header.project.nyakabingo"), path:"/our-projects/nyakabingo" },
                    { name: t("header.project.musha"), path:"/our-projects/musha" },
                    { name: t("header.project.lithium-exploration"), path:"/our-projects/lithium-exploration" },
                    
                    
                ]
            },
        
            { name: t("header.sustainability"), path:"/sustainability" },
            
            { 
                name: t("header.investor-relations"), path:"/investor-relations",
                children: [
                    { name: t("header.investor.reports"), path:"/investor-relations/reports" },
                    { name: t("header.investor.latest-news"), path:"/investor-relations/latest-news" },
                    { name: t("header.investor.gallery"), path:"/investor-relations/gallery/photos",
                       children: [
                        { name: t("header.investor.gallery-sub.photos"), path:"/investor-relations/gallery/photos" },
                        { name: t("header.investor.gallery-sub.videos"), path:"/investor-relations/gallery/videos" },
                       ]
                   }    
               ]
            },
            
        ]
        
      
    )
}

export default RoutesConfig