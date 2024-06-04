import Cards from "./Cards";
import Movies from "./Movies";

const Gujarati = () => {
  return (
    <Cards
      key={Movies[2].id}
      imgsrc={Movies[2].imgsrc}
      category={Movies[2].category}
      title={Movies[2].title}
      source={Movies[2].source}
    />
  );
}

export default Gujarati;