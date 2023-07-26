import React from 'react'
import Header from './Header';
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from './Page3';
import Page4 from "./Page4";

function Container() {
  return (
    <div className='container'>
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
    </div>
  )
}

export default Container