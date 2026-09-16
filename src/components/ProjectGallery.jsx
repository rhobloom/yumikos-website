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
          <button
            key={image}
            type="button"
            className={image === selected ? "thumbnail active" : "thumbnail"}
            aria-label={`View photograph ${images.indexOf(image) + 1} of ${images.length} in ${title}`}
            aria-pressed={image === selected}
            onClick={() => setSelected(image)}
          >
            <img src={image} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </>
  );
}