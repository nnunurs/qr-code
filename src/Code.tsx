import React from 'react';
import "./Code.css";
import code from "./img/image-qr-code.png";

export default function Code() {
    return (
        <div className='main'>
            <div className="card">
                <img id="pic" src={code} alt="" />
                <div className="text">
                    <h1 className='title'>Improve your front-end skills by building projects</h1>
                    <p>Scan the QR code to visit Frontend Mentor and take yout coding skills to the next level</p>
                </div>
            </div>
        </div>
    )
}
