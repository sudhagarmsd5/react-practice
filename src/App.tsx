import FetchApi from "./components/FetchApi"
import Counter from "./components/counter"
import Props from "./components/props"


function App() {

  return (
    <>
      <div style={{ textAlign: "center", fontWeight: "bold" }}>REACT JS</div>
      <section>
        <b>Counter:</b>
        <div>
          <Counter />
        </div>
      </section>

      <section>
        <b>Props:</b>
        <div>
          <Props />
        </div>
      </section>

      <section>
        <b>Fetch Api:</b>
        <div>
          <FetchApi />
        </div>
      </section>
    </>
  )
}



export default App
