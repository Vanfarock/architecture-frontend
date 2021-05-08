import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import commonStyles from './util/commonStyles';
import Button from './common/button';

const Navbar = () => {
    const navItems = [
        {
            path: '/projetos',
            label: 'Projetos'
        },
        {
            path: '/contato',
            label: 'Contatos'
        },
        {
            path: '/sobre',
            label: 'Sobre'
        }
    ]

    return (
        <nav className="bg-gray-50 shadow flex justify-center mb-10">
            <div className={`flex flex-col mb-3 sm:mb-0 sm:flex-row w-screen justify-between items-center px-5 ${commonStyles.responsiveWidth}`}>
                <div className="flex-1 mt-5 sm:mt-0">
                    <Link to="/">
                      <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                      <img className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
                    </Link>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-6 text-center">
                    {navItems.map(item => (
                        <NavLink key={item.path} 
                                 to={item.path}
                                 className="text-gray-500 border-b-4 border-transparent hover:text-gray-900 hover:border-indigo-500 px-5 py-5 w-screen sm:w-auto text-sm sm:text-lg font-medium">
                          {item.label}
                        </NavLink>
                    ))}
                </div>
                <Link to="solicitar-orcamento">
                  <Button className="p-5 sm:p-2 md:p-3 lg:p-4 ml-3">Solicitar orçamento</Button>
                </Link>
            </div>
        </nav>
    );
};

Navbar.propTypes = {};

export default Navbar;