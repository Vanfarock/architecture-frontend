import MockedImage from "../assets/images/mocked-image.jpg";
import Landscape from "../assets/images/landscape.jpg";

const projects = [
  {
    _id: "a1",
    image: Landscape,
    description: "Project made with love",
  },
  {
    _id: "b2",
    image: MockedImage,
    description: "Project made with love",
  },
  {
    _id: "c3",
    image: Landscape,
    description: "Project made with love",
  },
  {
    _id: "d4",
    image: MockedImage,
    description: "Project made with love",
  },
  {
    _id: "e5",
    image: Landscape,
    description: "Project made with love",
  },
  {
    _id: "f6",
    image: MockedImage,
    description: "Project made with love",
  },
  {
    _id: "g7",
    image: Landscape,
    description: "Project made with love",
  },
];

export function getProjects() {
  return projects;
}
