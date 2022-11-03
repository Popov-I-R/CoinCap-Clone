import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>404 Error Page</h1>
      <p className="zoom-area">
        <b>Oops,</b> looks like someting went wrong.
      </p>
      <section className="error-container">
        <span>
          <span>4</span>
        </span>
        <span>0</span>
        <span>  
          <span>4</span>
        </span>
      </section>
      <div className="link-container">
        <a
          href="/"
          className="more-link"
        >
          Go To HomePage
        </a>
      </div>
      <div className="link-container">
      <span>or</span>
      <button className="more-link" onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}
