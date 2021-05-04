import React from 'react';
import commonStyles from './util/commonStyles';
import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import Button from './common/button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 shadow-top">
      <div className={`divide-y-2 divide-gray-300 ${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
        <div>
          <ul className="flex flex-row justify-between items-center py-14">
            <li className="font-bold text-gray-500">PROJETOS</li>
            <li className="font-bold text-gray-500">SOBRE</li>
            <li className="font-bold text-gray-500">CONTATOS</li>
            <li>
              <Button className="p-5 sm:p-2 md:p-3 lg:p-4">Solicitar orçamento</Button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col py-9">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col flex-shrink text-gray-500">
              Icons made by Freepik from www.flaticon.com
            </div>
            <div className="flex-shrink grid grid-cols-3">
              <img className="w-7 mx-2 opacity-70" src={Facebook} alt="Facebook"/>
              <img className="w-7 mx-2 opacity-70" src={Instagram} alt="Instagram"/>
              <img className="w-7 mx-2 opacity-70" src={Linkedin} alt="Linkedin"/>
            </div>
          </div>
          <div className="text-gray-500 mx-auto my-0">
            &copy; 2021 Company name. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;