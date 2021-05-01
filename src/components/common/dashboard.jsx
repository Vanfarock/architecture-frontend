import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Dashboard = ({items}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    }
  };
  
  if (!items.length) return null;

  return (
    <Carousel responsive={responsive}
              draggable={false}
              removeArrowOnDeviceType={'mobile'}
              partialVisible={true}>
      {items.map((item, index) => (
        item.content(index)
      ))}
    </Carousel>
  );
};

Dashboard.propTypes = {};

export default Dashboard;