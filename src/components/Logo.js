import React from 'react';
import LogoImg from '../images/Logo.png'; // ou Logo.svg

export const Logo = ({ className = '' }) => (
    <div className={`logo ${className}`}>
        <img src={LogoImg} alt="Logo Aquafast" className="logo-img" />
    </div>
);
