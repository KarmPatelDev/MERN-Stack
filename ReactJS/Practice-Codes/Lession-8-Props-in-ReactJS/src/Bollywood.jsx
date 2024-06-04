import Cards from "./Cards";
import Movies from "./Movies";

const Bollywood = () => {
  return (
    <Cards
      key={Movies[0].id}
      imgsrc={Movies[0].imgsrc}
      category={Movies[0].category}
      title={Movies[0].title}
      source={Movies[0].source}
    />
  );
}

export default Bollywood;