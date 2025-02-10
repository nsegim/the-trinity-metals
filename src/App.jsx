
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import routes from "./routes/routes";
import AboutPage from "./pages/About/About";
import InvestorPage from "./pages/Investor/Investor";
import ProjectPage from "./pages/TheProjects/Projects";
import SustainabilityPage from "./pages/Sustainability/Sustainability";
import Team from "./pages/Our-leadership/Team";
import ContactUs from "./pages/Contact-Us/Contact";
import Nyakabingo from "./pages/Projects/Nyakabingo-mine";
import Rutongo from "./pages/Projects/Rutongo-mine";
import Musha from "./pages/Projects/Musha-mine";
import Lithium from "./pages/Projects/Lithium";
import Reports from "./pages/Investor/Report/Reports";
import LatestNews from "./pages/Investor/Latest-news/LatestNews";
import ThePhotoGallery from "./pages/Investor/Gallery/Gallery-photo";
import TheGalleryGallery from "./pages/Investor/Gallery/Gallery-video";
import { useRef } from "react";

// Dummy components for demonstration
const Home = () => <HomePage />;
const About = () => <AboutPage />;

const OurProjects = () => <ProjectPage /> ;
const Sustainability = () => <SustainabilityPage />;
const Investors = () => <InvestorPage />;
const OurLeadership = () => <Team />;



// Component map to match paths to components
const ComponentMap = {
  "/": Home,
  "/about": About,
  "/our-projects": OurProjects,
  "/sustainability": Sustainability,
  "/investor-relations": Investors,
  
};

// Recursive function to render nested routes
const renderRoutes = (routesArray) =>
  routesArray.map((route) => {
    const Component = ComponentMap[route.path] || (() => <h1>Page Not Found</h1>);

    // Check if the route has children and render them recursively
    return route.children ? (
      <Route key={route.path} path={route.path} element={<Component />}>
        {/* {renderRoutes(route.children)} */}
      </Route>
    ) : (
      <Route key={route.path} path={route.path} element={<Component />} />
    );
  });

function App() {
  return (
    <Router basename="/the-trinity-metals">
      <Routes>
        {renderRoutes(routes)}
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/about/our-leadership" element={<Team />}></Route>
        <Route path="/our-projects/nyakabingo" element={<Nyakabingo />}></Route>
        <Route path="/our-projects/rutongo" element={<Rutongo />}></Route>
        <Route path="/our-projects/musha" element={<Musha />}></Route>
        <Route path="/our-projects/lithium-exploration" element={<Lithium />}></Route>
        <Route path="/investor-relations/latest-news" element={<LatestNews />}></Route>
        <Route path="/investor-relations/reports" element={<Reports />}></Route>
        <Route path="/investor-relations/gallery/photos" element={<ThePhotoGallery />}></Route>
        <Route path="/investor-relations/gallery/videos" element={<TheGalleryGallery />}></Route>
        <Route path="/about/our-history" element={<AboutPage />}></Route>
        <Route path="/about/our-values" element={<AboutPage />}></Route>
        <Route path="/about/our-strategies" element={<AboutPage />}></Route>
        <Route path="/about/our-products" element={<AboutPage />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
