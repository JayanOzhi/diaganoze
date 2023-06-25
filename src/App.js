import React, { useState } from 'react';
import List from './List';
import Navbar from './components/Navbar'




function App() {
  //const [people] = useState(data);
  //<button onClick={() => setPeople([])}>Air Quality : Home</button>
  


  return (
    <div>
    <Navbar />
    <main>
    
      <section className='container'>
        <h2 className="location"> BrAce </h2>
        <List />
      </section>

      
    </main>
    </div>
  );
}

export default App;
