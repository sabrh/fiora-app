"use client";
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal footer-center bg-[#191970] text-white p-4">
        <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by fiora Beauty Ltd.</p>
        </aside>
        </footer>
    );
};

export default Footer;