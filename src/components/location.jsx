import React from 'react';
import SectionHeader from './common/sectionHeader';
import commonStyles from './util/commonStyles';

const Location = ({...props}) => {
  return (
    <div className={`relative h-0 pb-96 overflow-hidden ${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin} `}>
      <SectionHeader className="pb-1">Localização</SectionHeader>
      <iframe title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28460.453120623322!2d-49.08376506406692!3d-26.91756247001569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c31efcf44f%3A0x55d2690414ca8558!2sCentro%2C%20Blumenau%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1619841600939!5m2!1spt-BR!2sbr" 
              allowFullScreen={true}
              width="600"
              height="450"
              loading="lazy"
              className="absolute top-0 left-0 h-full w-full"
              {...props} />
    </div>
  );
};


export default Location;