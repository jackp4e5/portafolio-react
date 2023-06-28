import {
  Lateral,
  Inicio,
  Header,
  Projects,
  About,
  Skills,
  Footer
} from "../components";
export const Principal = () => {
  return (
    <>
      <div className="body__wraper">
        <Header />
        <Inicio />
        <About />
        <Skills />
        <Projects />
        <Footer/>
      </div>
      <Lateral />
    </>
  );
};
