import React, { useState } from "react";

import { MDBFooter } from "mdbreact";


function Footer() {
  return (
    <MDBFooter className='mt-auto position-fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-200 shadow md:flex md:items-center md:justify-between md:p-4'>
      <div className='text-center flex justify-center p-1'>
        &copy; {new Date().getFullYear()} Bookshelf: {': '}
        <a className='text-dark'>
          Lia ,Joana , Gabriel
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;
