import './App.css';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getTodos {
    getTodos {
      title
      completed
      user {
        name
      }
    }
  }
`;


const App = () => {

  const { data, loading } = useQuery(query);

  console.log(data);
  return (<>
  </>);
};

export default App;