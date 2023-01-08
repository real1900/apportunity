import React from "react";
import './HoverElement.css';

const HoverElement = ({ text, href, style, target }) => (
    <div className="hover-element">
        <a rel="noreferrer" target={target} href={href} data-replace={text}><span>{text}</span></a>
    </div>
);

export default HoverElement;