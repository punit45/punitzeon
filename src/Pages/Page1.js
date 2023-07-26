import React from "react";
import "./Page1.css";

function Page1() {
  return (
    <div className="page1">
      <div className="page1__group111">
        <h1>
          <span class="colorTwo">DeepDelve</span>-Intelligent QA
        </h1>
        <h1>& Search</h1>

        <p>
          State of the art Question & Answering and summarisation solution for
          precise and contextual answers based on your enterprise documents and
          questions in natural language.
        </p>

        <div className="page1__group111__search">
          <div className="page1__group111__input">
            <i></i>
            <input
              type="email"
              id="input__email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>

          <button type="submit">Request Demo</button>
        </div>

        <div className="page1__group111__image">
          <img src="./assets/sc-3.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page1;
