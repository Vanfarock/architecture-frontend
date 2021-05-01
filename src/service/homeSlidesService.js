import MockedImage from "../assets/images/mocked-image.jpg";

const slides = [
  {
    image: MockedImage,
    imageLabel: "Label 1",
  },
  {
    image: MockedImage,
    imageLabel: "Label 2",
  },
  {
    image: MockedImage,
    imageLabel: "Label 3",
  },
];

export function getSlides() {
  return slides;
}
