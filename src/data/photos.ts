import { projects } from "./projects";

export const photos = projects.flatMap((project) =>
  project.images.map((image, index) => ({
    image,
    projectSlug: project.slug,
    projectTitle: project.title,
    index,
  }))
);