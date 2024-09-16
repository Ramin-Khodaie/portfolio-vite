import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <section
        id="intro"
        className="pt-16 pr-4 pb-40 pl-4 max-w-[1200px] my-0 mx-auto"
      >
        <p className="text-2xl font-Oxygen py-2">
          Hi, my name is{" "}
          <span className="font-sans text-4xl text-[--aqua] font-light block">
            Ramin Khodaie.
          </span>
        </p>
        <h2 className="text-6xl">I am a Programmer</h2>
        <p className="text-xl leading-6 my-4">
          I do front-end development using Javascript.
        </p>
      </section>
      <div className="h-[2px] bg-gradient-to-r from-[--magenta] to-[--aqua]" />
      <div className="bg-[--dkblue]">
        <Projects />
      </div>
    </div>
  );
}

export default App;
