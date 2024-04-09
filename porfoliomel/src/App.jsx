import Hero from "./componentes/Hero/Hero";
import Layout from "./componentes/Layout/Layout";
import Navbar from "./componentes/NavBar/Navbar";

function App() {
  return (
    <>
      <Layout>
        <Navbar/>
        <Hero/>
      </Layout>
    </>
  );
}

export default App;

