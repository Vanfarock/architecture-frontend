import React from 'react';
import Location from './location';
import Carousel from './common/carousel';
import Section from './common/section';
import HoverableImage from './common/hoverableImage';
import Card from './common/card';

import { getSlides } from './../service/homeSlidesService';
import { getProjects } from './../service/projectsService';
import { getPosts } from './../service/postsService';
import Button from './common/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const slides = getSlides();
  const projects = getProjects();
  const posts = getPosts();

  const introductionMessage = small => {
    const classVisibility = small ? "block sm:hidden flex flex-col items-center mt-5" 
                                  : "hidden sm:block absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 text-center";
    return (
      <div className={`${classVisibility}`}>
        <h1 className="text-black sm:text-white text-2xl md:text-4xl lg:text-6xl mb-2">
          Bem vindo!
        </h1>
        <p className="text-gray-900 sm:text-gray-100 text-xs md:text-sm lg:text-lg mb-4 text-center">
          Mensagem aleatória de introdução <br/>Segunda linha
        </p>
        <Link to="solicitar-orcamento">
          <Button className="p-2 md:p-4 lg:p-5">Solicitar orçamento</Button>
        </Link>
      </div>
    );
  }

  const renderProjects = projects => {
    return projects.map(project => (
      {
        content: index => <HoverableImage 
                              key={index} 
                              image={project.image} 
                              description={project.description}
                              containerClass={index === 0 ? '' : 'ml-1'} />
      }
    ));
  }

  const renderPosts = posts => {
    return posts.map(post => (
      {
        content: index => <Card key={index} 
                                title={post.title}
                                text={post.text}
                                containerClassName={`border rounded-md shadow p-5 ${index === 0 ? '' : 'ml-1'}`}
                                titleClassName="text-xl font-bold mb-2" />
      }
    ));
  }

  return (
    <>
      {introductionMessage(true)}
      <Carousel slides={slides}>
        {introductionMessage(false)}
      </Carousel>

      <Section label="Projetos" 
               path="projetos"
               items={renderProjects(projects)} />
      <Section label="Últimas postagens" items={renderPosts(posts)} />
      
      <Location className="w-full" />
    </>
  );
};

Home.propTypes = {};

export default Home;