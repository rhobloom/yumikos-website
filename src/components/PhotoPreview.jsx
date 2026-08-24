import { useState } from "react";
import "./PhotoPreview.css";

export default function PhotoPreview({ photos, projects }) {
  const [selected, setSelected] = useState(null);
function getProject(photo) {
  return projects.find(
    (project) => project.slug === photo.projectSlug
  );
}
  return (
    <>

  <main className="gallery">
        {photos.map((photo) => (
          <img
            loading="lazy"
            key={photo.image}
            src={photo.image}
            alt=""
            className="photo"
            onClick={() => setSelected(photo)}
          />
        ))}
      </main>

      {selected && (
        <div className="overlay" onClick={() => setSelected(null)}>
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <>
  <img
    src={selected.image}
    alt=""
  />

  <h2>{getProject(selected).title}</h2>

  <p>{getProject(selected).description}</p>

 <p className="series">
  Part of a series of{" "}
  {getProject(selected).images.length} photographs
</p>
<div className="actions">

  <a
    href={`/photography/${selected.projectSlug}`}
    className="primary"
  >
    Enter Project <span className="link-arrow" aria-hidden="true"></span>
  </a>

  <button
    onClick={() => setSelected(null)}
    className="secondary"
  >
    Keep Exploring
  </button>

</div>
</>
          </div>
        </div>
      )}
    </>
  );
}
