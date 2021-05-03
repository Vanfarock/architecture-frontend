import React from 'react';
import commonStyles from './util/commonStyles';

const Footer = () => {
  return (
    <footer className="shadow">
      <div className={`${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin}`}>
        <div>
          <ul>
            <li>PROJETOS</li>
            <li>SOBRE</li>
            <li>CONTATOS</li>
            <li>
              <button>Solicitar orçamento</button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;