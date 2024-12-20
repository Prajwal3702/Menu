import "./Gallery.css";
import gal1 from "../../assets/2.png";
import gal2 from "../../assets/3.png";
import gal3 from "../../assets/6.png";
import gal4 from "../../assets/7.png";

const Gallery = () => {
  const images = [
    { id: 1, src: gal1, alt: "Gallery Image 1" },
    { id: 2, src: gal2, alt: "Gallery Image 2" },
    { id: 3, src: gal3, alt: "Gallery Image 3" },
    { id: 4, src: gal4, alt: "Gallery Image 4" },
  ];

  return (
    <div className="gallery">
      <div className="gallery-title">
        <h1>Gallery</h1>
      </div>
      <div className="mywork-container">
        {images.map((image) => (
          <div key={image.id} className={`gal-${image.id}`}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
