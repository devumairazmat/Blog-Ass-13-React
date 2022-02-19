import React from "react";
import "./Blog3.css";
function Blog3() {
  return (
    <div>
      {" "}
      {/* heading 2*/}
      <h1 id="heading2">Another Feature</h1>
      <p className="text-muted">
        Feburary 3,2022 by{" "}
        <a href="https://umair_azmat_portfolio.surge.sh/">Umair Azmat</a>
      </p>
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
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  );
}

export default Blog3;
