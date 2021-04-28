import React from 'react';
import MockedImage from '../assets/images/mocked-image.jpg';
import Carousel from './common/carousel';
import Button from './common/button';
import Header from './common/header';

const Home = () => {
  const slides = [
    {
      image: MockedImage,
      imageLabel: 'Label 1',
    },
    {
      image: MockedImage,
      imageLabel: 'Label 2',
    },
    {
      image: MockedImage,
      imageLabel: 'Label 3',
    },
  ]

  return (
    <>
      <Carousel slides={slides}>
        <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Header>Bem vindo!</Header>
          <p className="text-gray-100 text-xs md:text-sm lg:text-lg mb-4">Mensagem aleatória de introdução <br/>Segunda linha</p>
          <Button className="p-2 md:p-4 lg:p-5">Solicitar orçamento</Button>
        </div>
      </Carousel>
    </>
  );
};

Home.propTypes = {};

export default Home;