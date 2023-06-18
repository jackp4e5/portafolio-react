import {
  Lateral,
  Inicio,
  Header,
  Projects,
  About,
  Skills,
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
      </div>
      <Lateral />
    </>
  );
};
