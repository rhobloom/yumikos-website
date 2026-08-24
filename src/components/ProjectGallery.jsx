import { useState } from "react";

export default function ProjectGallery({ images, title }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <>
      <div className="viewer">
        <img
          src={selected}
          alt={title}
        />
      </div>

      <div className="thumbnails">
        {images.map((image) => (
          <img
            key={image}
            src={image}
            alt=""
            className={
              image === selected
                ? "thumbnail active"
                : "thumbnail"
            }
            loading="lazy"
            onClick={() => setSelected(image)}
          />
        ))}
      </div>
    </>
  );
}