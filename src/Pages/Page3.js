import React from "react";
import "./Page3.css";

function Page3() {
  return (
    <div className="page3">
      <div className="page3__image">
        <img className="under" src="./assets/rectangle-19.png" alt="under" />
        <img className="over" src="./assets/sc-1.png" alt="over" />
      </div>
      <div className='page3__content'>
            <h3>Feature Name</h3>
            <h1>Feature headline goes</h1>
            <h1> here.</h1>

            <p>State of the art Question & Answering and summarisation solution for precise and contextual answers based on your enterprise documents and questions in natural language.</p>
        </div>
    </div>
  );
}

export default Page3;
