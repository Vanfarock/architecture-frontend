import MockedImage from "../assets/images/mocked-image.jpg";
import Landscape from "../assets/images/landscape.jpg";

const projects = [
  {
    _id: "a1",
    images: [Landscape, Landscape, Landscape],
    mainImage: Landscape,
    description: "Project one",
  },
  {
    _id: "b2",
    images: [MockedImage, Landscape],
    mainImage: MockedImage,
    description: "Project made with love",
  },
  {
    _id: "c3",
    images: [Landscape],
    mainImage: Landscape,
    description: "Project made with love",
  },
  {
    _id: "d4",
    images: [MockedImage],
    mainImage: MockedImage,
    description: "Project made with love",
  },
  {
    _id: "e5",
    images: [Landscape],
    mainImage: Landscape,
    description: "Project made with love",
  },
  {
    _id: "f6",
    images: [MockedImage],
    mainImage: MockedImage,
    description: "Project made with love",
  },
  {
    _id: "g7",
    images: [Landscape],
    mainImage: Landscape,
    description: "Project made with love",
  },
];

export function getMainProjects() {
  return projects;
}

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find((p) => p._id === id);
}
