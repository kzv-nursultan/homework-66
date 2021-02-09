import React from 'react';
import Backdrop from '../BackDrop/Backdrop';
import './Spinner.css';

const Spinner = props => {
  return (
    <>
     <Backdrop show={props.show} onClick={props.closed} />
    <div 
    className="Spinner"
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0',
      margin: props.show ? '55px auto' : '0',
      height: props.show ? '10em' : '0'
    }}>
      Loading...
    </div>
    </>
  );
};

export default Spinner;