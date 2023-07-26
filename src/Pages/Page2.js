import React from 'react';
import "./Page2.css";

function Page2() {
  return (
    <div className='page2'>
        <div className='page2__content'>
            <h3>Feature Name</h3>
            <h1>Feature headline goes</h1>
            <h1> here.</h1>

            <p>State of the art Question & Answering and summarisation solution for precise and contextual answers based on your enterprise documents and questions in natural language.</p>
        </div>
        <div className='page2__image'>
        <img 
            src='./assets/sc-2.png'
            alt=''
        />
        </div>
    </div>
  )
}

export default Page2