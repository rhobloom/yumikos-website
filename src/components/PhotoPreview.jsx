import { useEffect, useRef, useState } from "react";
import "./PhotoPreview.css";

export default function PhotoPreview({ photos, projects }) {
  const [selected, setSelected] = useState(null);
  const dialog = useRef(null);
  const trigger = useRef(null);
  const project = selected && projects.find(item => item.slug === selected.projectSlug);

  useEffect(() => {
    if (!selected) return;
    const previousOverflow = document.body.style.overflow;
    dialog.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [selected]);

  return (
    <>
      <main className="gallery">
        {photos.map((photo, index) => (
          <button type="button" className="photo-button" key={photo.image}
            aria-label={`Open photograph ${index + 1}${projects.find(item => item.slug === photo.projectSlug) ? ` from ${projects.find(item => item.slug === photo.projectSlug).title}` : ""}`}
            onClick={event => { trigger.current = event.currentTarget; setSelected(photo); }}>
            <img loading="lazy" src={photo.image} alt="" className="photo" />
          </button>
        ))}
      </main>
      {selected && (
        <dialog ref={dialog} className="modal" aria-labelledby="photo-title"
          onCancel={() => setSelected(null)} onClose={() => setSelected(null)}
          onClick={event => { if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) setSelected(null);
          } }}>
          <div className="modal-bar"><button type="button" autoFocus className="secondary" onClick={() => setSelected(null)}>Close photo <span aria-hidden="true">×</span></button></div>
          <img src={selected.image} alt={project ? `Photograph from ${project.title}` : "Selected photograph"} />
          <h2 id="photo-title">{project?.title ?? "Photograph"}</h2>
          {project && <><p>{project.description}</p><p className="series">Part of a series of {project.images.length} photographs</p></>}
          <div className="actions">
            {project && <a href={`/photography/${selected.projectSlug}`} className="primary">Enter Project <span className="link-arrow" aria-hidden="true" /></a>}
            <button type="button" onClick={() => setSelected(null)} className="secondary">Keep Exploring</button>
          </div>
        </dialog>
      )}
    </>
  );
}
