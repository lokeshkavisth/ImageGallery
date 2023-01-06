import React, { useState } from "react";

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    fetch(
      `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=tmBdYIQeX4lJJLXGZWKmr6p3nIJlHxbH54oW-2Kg6VU`
    )
      .then((response) => response.json())
      .then((data) => setImages(data.results));
  };

  return (
    <div className="main__container">
      <h1>Image Gallery</h1>

      <div className="input__container">
        <input
          type="text"
          placeholder="Search for images..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      <div className="image__container">
        {images.map((image) => (
          <img
            src={image.urls.small}
            alt={image.alt_description}
            key={image.id}
          />
        ))}
      </div>

      <div>
        <footer>
          <p>
            Created by
            <a href="https://github.com/lokeshkavisth"> Lokesh Kavisth</a> x
            Unsplash API
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ImageGallery;
