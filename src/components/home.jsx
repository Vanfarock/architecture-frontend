import React from 'react';
import MockedImage from '../assets/images/mocked-image.jpg';
import Carousel from './common/carousel';

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

  const introductionMessage = small => {
    const classVisibility = small ? "block sm:hidden flex flex-col items-center mt-5" 
                                  : "hidden sm:block absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center";
    return (
      <div className={`${classVisibility}`}>
        <h1 className="text-black sm:text-white text-2xl md:text-4xl lg:text-6xl mb-2">Bem vindo!</h1>
        <p className="text-gray-900 sm:text-gray-100 text-xs md:text-sm lg:text-lg mb-4 text-center">Mensagem aleatória de introdução <br/>Segunda linha</p>
        <button className="bg-indigo-500 rounded-md text-white py-2 px-1 md:p-4 lg:p-5">Solicitar orçamento</button>
      </div>
    );
  }

  return (
    <>
      {introductionMessage(true)}
      <Carousel slides={slides}>
        {introductionMessage(false)}
      </Carousel>
    </>
  );
};

Home.propTypes = {};

export default Home;