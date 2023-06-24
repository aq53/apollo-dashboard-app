import React from 'react';
import "./styles.css";

const ErrorComponent = ({message}: { message: string }) => {
    return (
        <div className="error-container">
            <h2 className="error-title">Oops! Something went wrong.</h2>
            <p className="error-message">{message}</p>
            <img className="error-image" src={require("../../assets/error.webp")} alt="Error"/>
        </div>
    );
};

export default ErrorComponent;
