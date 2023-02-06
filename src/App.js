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
    let url;
    url = `${mainUrl}${clientId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoadin(false);
    } catch (error) {
      setLoadin(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi");
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" placeholder="search" className="form-input" />
          <button type="submit" className="submit-btn" onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((image, index) => {
            console.log(image);
            return <Photo key={index} {...image} />;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
