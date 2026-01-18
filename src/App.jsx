import Header from "./components/Header";
import Contact from "./components/Contact";
import useReveal from "./hooks/useReveal";

function App() {
  useReveal();

  return (
    <>
      <Header />
      <Contact />
    </>
  );
}

export default App;
