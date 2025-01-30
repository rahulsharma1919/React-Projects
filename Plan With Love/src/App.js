import data from "./data";
import Tours from "./Components/Tours";

// const App = () => {
//   const [tours, setTours] = useState(data);

//   // when not intereseted is clicked this removeTour function is called and based on id passed in the function
//   // the filter method is used to remove that data belonging to passed id
//   function removeTour(id){
//     const newTours = tours.filter( tour => tour.id !== id);
//     setTours(newTours);
//   }

//   // when all tours are clicked not interested then reinitializing all data to tours array
//   if(tours.length === 0){
//     return(
//       <div className="refresh">
//         <h2>Sorry 😔...... <br/>No More Tours Left</h2>
//         <button onClick={() => setTours(data)} className="btn-white">Refresh</button>
//       </div>
//     )
//   }
//   return (
//     <div className="App">
//      {/* removeTour and tours data are passed as props in tours component */}
//       <Tours tours={tours} removeTour={removeTour}> </Tours>
//     </div>
//   );
// };

// export default App;

import React, { useState } from "react";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>
          Oops!...
          <br />
          No Tours Left
        </h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
