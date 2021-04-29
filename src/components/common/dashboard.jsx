import React from 'react';
import PropTypes from 'prop-types';
import MockedImage from '../../assets/images/mocked-image.jpg';
import Landscape from '../../assets/images/landscape.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Dashboard = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };
  
  return (
    <Carousel responsive={responsive}
              draggable={false}>
      <div className="mr-1">
        <img className="rounded-sm" src={Landscape} alt="teste"/>
      </div>
      <div className="mx-1">
        <img className="rounded-sm" src={Landscape} alt="teste"/>
      </div>
      <div className="mx-1">
        <img className="rounded-sm" src={Landscape} alt="teste"/>
      </div>
      <div className="mx-1">
        <img className="rounded-sm" src={MockedImage} alt="teste"/>
      </div>
      <div className="mx-1">
        <img className="rounded-sm" src={MockedImage} alt="teste"/>
      </div>
      <div className="mx-1">
        <img className="rounded-sm" src={MockedImage} alt="teste"/>
      </div>
      <div className="ml-1">
        <img className="rounded-sm" src={MockedImage} alt="teste"/>
      </div>
    </Carousel>
  );
};

Dashboard.propTypes = {};

export default Dashboard;