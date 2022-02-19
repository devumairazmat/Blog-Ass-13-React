import React from "react";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="contianer m-4">
        <div className="card">
          <div className="row ">
            <div className="col-8 p-4">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link">
                Card link
              </a>
            </div>
            <div className="col-4">
              <img
                class="img-fluid rounded imgwidth"
                src="...."
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
