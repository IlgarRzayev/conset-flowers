import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
      <div className="container">
        
        <a className="navbar-brand fw-bold" href="#">
          Conset Flowers
        </a>

        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={() => setIsOpen(false)}>
                Ana Sayfa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products" onClick={() => setIsOpen(false)}>
                Ürünler
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={() => setIsOpen(false)}>
                Hakkımızda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => setIsOpen(false)}>
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}