import MockedImage from "../assets/images/mocked-image.jpg";
import Landscape from "../assets/images/landscape.jpg";

const projects = [
  {
    image: Landscape,
    description: "Project made with love",
  },
  {
    image: MockedImage,
    description: "Project made with love",
  },
  {
    image: Landscape,
    description: "Project made with love",
  },
  {
    image: MockedImage,
    description: "Project made with love",
  },
  {
    image: Landscape,
    description: "Project made with love",
  },
  {
    image: MockedImage,
    description: "Project made with love",
  },
  {
    image: Landscape,
    description: "Project made with love",
  },
];

export function getProjects() {
  return projects;
}
