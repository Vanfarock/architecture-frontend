import React from 'react';

const Navbar = () => {
  const navItems = [
    {
      path: '/projetos',
      label: 'Projetos'
    },
    {
      path: '/contato',
      label: 'Contato'
    },
    {
      path: '/sobre',
      label: 'Sobre'
    }
  ]

  return (
    <nav className="bg-coolGray-50 shadow flex justify-center">
      <div className="flex flex-col sm:flex-row w-screen justify-between items-center px-5 max-w-screen-2xl">
        <div className="flex-1 mt-5 sm:mt-0">
          <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-center">
          {navItems.map(item => (
            <a key={item.path} className="text-gray-500 border-b-2 border-transparent hover:text-gray-900 hover:border-indigo-500 px-5 py-5 w-screen sm:w-auto text-sm sm:text-lg font-medium" href={item.path}>{item.label}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;