import React from "react";
import "./Blog2.css";
function Blog2() {
  return (
    <div>
      {/* heading 2*/}
      <h1 id="heading2">Another Blog Post</h1>
      <p className="text-muted">
        Feburary 1,2022 by{" "}
        <a href="https://umair_azmat_portfolio.surge.sh/">Umair Azmat</a>
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <hr />
      {/* 3 paragraphs */}
      <p>
        Lorem Ipsum is simply dummy text of the
        <a href="https://umair_azmat_portfolio.surge.sh/">
          printing and typesetting industry
        </a>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s , when an unknown printer took a galley of type and scrambled it
        to make a type specimen book. It has survived not only five centuries,
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the
        <b>printing and typesetting industry.</b>
        Lorem Ipsum has been the industry's
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
    </div>
  );
}

export default Blog2;
