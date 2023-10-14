import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copywrite © {year}</p>
            <p>Created by Sujoy De</p>
        </footer>
    );
}

export default Footer;