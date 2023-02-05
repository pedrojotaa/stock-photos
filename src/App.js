import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const clientId = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/;`;

function App() {
  const [loading, setLoadin] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState([]);
  const [query, setQuery] = useState([]);
  

  const fetchImages = async () => {
    setLoadin(true);
    let url
    url = `${mainUrl}${clientId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      setLoadin(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return <div>Stock</div>;
}

export default App;
