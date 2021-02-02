import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Pets from './Pets';
import Filter from './Filter';

function App() {
const [items, setItems] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [query, setQuery] = useState('available');


  useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(`https://petstore.swagger.io/v2/pet/findByStatus?status=${query}`);

        console.log(result.data);
        setItems([]);
        setItems(result.data);
        setIsLoading(false);
      }  
      fetchItems()
  }, [query])



  return (
    <div className="App">
      <Filter getQuery={(q) => setQuery(q)} />
      <Pets isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
