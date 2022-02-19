import React from "react";
import Blog1 from "../blog/Blog1";
import Blog2 from "../blog/Blog2";
import Blog3 from "../blog/Blog3";
import "./Content.css";
function Content() {
  return (
    <div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Col - 1 */}
            <div className="col-lg-8">
              {/* heading 1 */}
              <h2 id="heading1">From the Firehouse</h2>
              <hr />
              <Blog1 />
              <Blog2 />
              <Blog3 />
            </div>
            {/* Col - 2 */}
            <div className="col-lg-4">
              {/* About */}
              <div id="about">
                {/* heading 1 */}
                <h2 id="heading1">About</h2>
                <hr />
                <p>
                  {" "}
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.{" "}
                </p>
              </div>
              {/* Archives */}
              <div id="archives">
                {/* heading 1 */}
                <h2 id="heading1" className="p-2">
                  Archvies
                </h2>
                <hr />
                <ul className="lists">
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      February 2022
                    </a>
                  </li>
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      March 2022
                    </a>
                  </li>
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      April 2022
                    </a>
                  </li>
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      May 2022
                    </a>
                  </li>
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      June 2022
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      July 2022
                    </a>
                  </li>
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      August 2022
                    </a>
                  </li>
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      September 2022
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      November 2022
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      December 2022
                    </a>
                  </li>
                  <li>
                    <a href="https://umair_azmat_portfolio.surge.sh/">
                      January 2022
                    </a>
                  </li>
                </ul>
              </div>
              {/* Elsewhrer */}
              <div id="elsewhere">
                <h2 id="heading1">ElseWhere</h2>
                <hr />
                <ul className="lists">
                  <li>
                    <a href="https://github.com/UMAIR-AZMAT">GitHub</a>
                  </li>
                  <li>
                    <a href="https://twitter.com/umairazmatlhr">Twitter</a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/umair-azmat-364a5a1a5/">
                      {" "}
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
