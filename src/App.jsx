import {
  Navbar,
  Benifits,
  Collaboration,
  Footer,
  Hero,
  Pricing,
  Roadmap,
  Services,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benifits />
      <Collaboration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
    </>
  );
};

export default App;
