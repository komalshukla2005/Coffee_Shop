import React, { useEffect } from 'react'
import Cards from './cards';
function Coffees() {
  useEffect(() => {
    document.body.className = 'coffee'; 
    return () => {
      document.body.className = ''; 
    };
  }, []);
  return (
    <div>
    <Cards/>
    </div>
  )
}

export default Coffees;