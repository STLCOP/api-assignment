import React, { useState } from "react";
import { fetchData } from "../api/apiclient";
import "../style/DataDisplay.scss";

interface ImageInfo {
  author: string;
  download_url: string;
  width: number;
  height: number;
}

const DataDisplay: React.FC = () => {
  const [imageInfo, setImageInfo] = useState<ImageInfo | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch a random image and its info
  const handleFetchImage = async () => {
    setLoading(true);
    const data = await fetchData();
    setImageInfo(data);
    setLoading(false);
  };

  return (
    <div className="data-display">
      
      <button onClick={handleFetchImage} className="fetch-button">
        Fetch Random Image
      </button>
      {loading && <p>Loading...</p>}
      {imageInfo && (
        <div className="image-info">
          <img src={imageInfo.download_url} alt="Random from Picsum" className="random-image" />
          <h3>Author: {imageInfo.author}</h3>
          <p>Dimensions: {imageInfo.width}x{imageInfo.height}</p>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
