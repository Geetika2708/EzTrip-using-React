import React, { useState, useEffect } from 'react';

function DateAndTime(){
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); 

    return () => clearInterval(interval);
  }, []); 

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const formatTime = (date) => {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };
  return (
    <div className='datentime'>
          <p className='currentdate'>Date</p>
          <p className='cdate'>{formatDate(currentDateTime)}</p>
          <p className='currenttime'>Time</p>
          <p className='ctime'>{formatTime(currentDateTime)}</p>
    </div>
  );

}



export default DateAndTime;