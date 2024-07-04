import React from 'react';
import './Footer.css'; // Opcional, para estilos

const Footer = () => {
  return (
    <ul class="footer">
      <li className='footer__item'>
        <a href="#">
          <i class="fa-solid fa-database"></i>
          <span className='footer__item--text'>Datacenter</span>
        </a>
      </li>
      <li className='footer__item'>
        <a href="#">
          <i class="fa-solid fa-calendar"></i>
          <span className='footer__item--text'>Deadlines</span>
        </a>
      </li>
      <li className='footer__item'>
        <a href="#">
          <i class="fa-solid fa-calendar"></i>
          <span className='footer__item--text'>Reports</span>
        </a>
      </li>
      <li className='footer__item'>
        <a href="#">
          <i class="fa-solid fa-gear"></i>
          <span className='footer__item--text'>Settings</span>
        </a>
      </li>
  
  </ul>
  );
};

export default Footer;