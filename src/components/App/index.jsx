import React, { useState } from "react";
import data from "../../data";
import List from "../List";
import "./App.css";

// function App() {
//   const [people, setPeople] = useState(data);
//   return (
//     <main>
//       <section className="container">
//         <h3>{people.length} birthdays today</h3>
//         <List people={people} />
//         <button onClick={() => setPeople([])}>clear all</button>
//       </section>
//     </main>
//   );
// }

// export default App;

class App extends React.Component {
  state = { people: data };

  render() {
    const { people } = this.state;
    return (
      <div>
        <div className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => this.setState({ people: [] })}>
            clear all
          </button>
        </div>
      </div>
    );
  }
}

export default App;
