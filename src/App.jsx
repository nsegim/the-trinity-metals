
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from "./pages/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import routes from "./routes/routes";
import AboutPage from "./pages/About/About";
import InvestorPage from "./pages/Investor/Investor";
import ProjectPage from "./pages/Project/Projects";
import SustainabilityPage from "./pages/Sustainability/Sustainability";
import Team from "./pages/Our-leadership/Team";
import ContactUs from "./pages/Contact-Us/Contact";
import I18n from "./i18n";


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
        {renderRoutes(route.children)}
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
        <Route path="/our-leadership" element={<Team />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
