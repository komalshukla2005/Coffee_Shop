import React, { useEffect } from 'react'
import Table1 from './Table1';
function Tables() {
  useEffect(() => {
    document.body.className = 'tables';
    return () => {
      document.body.className = '';
    };
  }, []);
  return (
    <div>
    <Table1/>
    </div>
  )
}

export default Tables
