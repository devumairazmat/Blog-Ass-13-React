import React from "react";
import "./Blog1.css";
function Blog1() {
  return (
    <div>
      {" "}
      {/* heading 2*/}
      <h1 id="heading2">Sample Blog Post</h1>
      <p className="text-muted">
        Feburary 2,2022 by{" "}
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
      {/* Heading Section */}
      <h2 id="heading3">Heading</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      {/* SubHeading Section */}
      <h3 id="heading4">Sub Heading</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      {/* detailed sub heading */}
      <h3 id="heading4">Sub Heading</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      {/* Un ordered list */}
      <ul>
        <li>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </li>
        <li>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </li>
        <li>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </li>
      </ul>
      {/*  Ordered list */}
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry:
      </p>
      <ol>
        <li>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </li>
        <li>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </li>
        <li>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s.
        </li>
      </ol>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text.
      </p>
    </div>
  );
}

export default Blog1;
