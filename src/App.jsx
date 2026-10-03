import ScrollProgress from "./components/animation/ScrollProgress";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import Stats from "./components/sections/Stats";
import About from "./components/sections/About";
import Academics from "./components/sections/Academics";
import WhyTis from "./components/sections/WhyTis";
import Sports from "./components/sections/Sports";
import CampusExperience from "./components/sections/CampusExperience";
import Rankings from "./components/sections/Rankings";
import Testimonials from "./components/sections/Testimonials";
import AdmissionsCTA from "./components/sections/AdmissionsCTA";
import CustomCursor from "./components/animation/CustomCursor";

function App() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      
      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <WhyTis />
        <Sports />
        <CampusExperience />
        <Rankings />
        <Testimonials />
        <AdmissionsCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;