import React from "react";
import Bollywood from "./Bollywood";
import Gujarati from "./Gujarati";

//all card property arrangement same in all
//You have to not use className like keyword in component props because it change it properties(we can not use for css add)

// key help React identify which have changed (added/removed/re-ordered). To give identity to every inside the array, a key is requires. We Can not use any other name other then 'key'. If not use then it show error


const favSeries = "Bollywood";

// const Series = () => {
//   if (favSeries === "Bollywood") {
//     return <Bollywood />;
//   }
//   else if (favSeries === "Gujarati") {
//     return <Gujarati />;
//   }
// }

const App = () => {
  return (
    <>

      {/*       
      {Movies.map((val) => {
        return (
          <Cards
            key={val.id}
            imgsrc={val.imgsrc}
            category={val.category}
            title={val.title}
            source={val.source}
          />
        );
      })
      } 
      */}

      {/*       <Series /> */}

      {(favSeries === "Bollywood") ? <Bollywood /> : <Gujarati />}
    </>
  );


}

export default App;
