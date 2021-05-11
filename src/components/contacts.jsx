import React from 'react';
import commonStyles from './util/commonStyles';
import Facebook from '../assets/icons/facebook.svg';
import Instagram from '../assets/icons/instagram.svg';
import Linkedin from '../assets/icons/linkedin.svg';
import SectionHeader from './common/sectionHeader';
import Button from './common/button';

const Contacts = () => {
  return (
    <div className={` max-w-screen-xl ${commonStyles.responsiveMargin}`}>
      <SectionHeader className="text-center md:text-left mb-10">Contato</SectionHeader>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 mr-10 w-full">
          <h1 className="text-lg mb-10 text-center">Nos envie uma mensagem através dos nossos contatos! <br /> Adoraríamos saber o que você tem para nos dizer!</h1>
          <form className="flex flex-col items-center">
            <label className="self-start" htmlFor="email">Email</label>
            <input email="email" type="email" name="email"  className="bg-gray-50 border p-3 my-2 w-full" />

            <label className="self-start" htmlFor="subject">Assunto</label>
            <input email="subject" type="text" name="subject" className="bg-gray-50 border p-3 my-2 w-full" />

            <label className="self-start" htmlFor="message">Mensagem</label>
            <textarea email="message" rows="10" name="message" className="bg-gray-50 border p-3 my-2 w-full" />

            <Button className="self-start w-2/4 p-5" type="submit">Enviar mensagem</Button>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 text-center mt-5 md:flex md: flex-col">
          <div className="mb-5">
            <h1 className="font-bold">Telefone</h1>
            <h3>(47) 3999-9999</h3>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">Whatsapp</h1>
            <h3>(47) 99999-9999</h3>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">Endereço</h1>
            <h3>Rua aleatória 111</h3>
          </div>
          <div className="mb-5">
            <h1 className="font-bold">Email</h1>
            <h3>email@example.com</h3>
          </div>
          <div>
            <h1 className="font-bold">Redes sociais</h1>
            <div className="flex row justify-center mt-2">
              <img className="w-7 mx-2 opacity-70" src={Facebook} alt="Facebook"/>
              <img className="w-7 mx-2 opacity-70" src={Instagram} alt="Instagram"/>
              <img className="w-7 mx-2 opacity-70" src={Linkedin} alt="Linkedin"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;