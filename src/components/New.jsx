import {} from "react";
import "./ImageGrid.css"; // Import a CSS file for grid styling

const ImageGrid = () => {
  const images = [
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 1",
      text: "Caption for Image 1",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    {
      src: "spaceman-riding-horse-outer-space.jpg",
      alt: "Image 2",
      text: "Caption for Image 2",
    },
    
    // Add at least 18 images to fill a 3x6 grid
  ];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-item">
          <img src={image.src} alt={image.alt} />
          <p>{image.text}</p>
        </div>
      ))}
    </div>
  );
};
export default ImageGrid;
