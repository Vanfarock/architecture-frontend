import MockedImage from "../assets/images/mocked-image.jpg";
import Landscape from "../assets/images/landscape.jpg";
import Koala from "../assets/images/koala.jpg";

const projects = [
  {
    _id: "a1",
    images: [
      Landscape,
      Landscape,
      Landscape,
      Koala,
      Landscape,
      Landscape,
      Landscape,
      Landscape,
    ],
    mainImage: Landscape,
    description: "Project one",
  },
  {
    _id: "b2",
    images: [MockedImage, Landscape],
    mainImage: MockedImage,
    description: "Project two",
  },
  {
    _id: "c3",
    images: [Landscape],
    mainImage: Landscape,
    description: "Project three",
  },
  {
    _id: "d4",
    images: [MockedImage],
    mainImage: MockedImage,
    description: "Project four",
  },
  {
    _id: "e5",
    images: [Landscape],
    mainImage: Landscape,
    description: "Project five",
  },
  {
    _id: "f6",
    images: [MockedImage],
    mainImage: MockedImage,
    description: "Project six",
  },
  {
    _id: "g7",
    images: [Landscape],
    mainImage: Landscape,
    description: "Project seven",
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
