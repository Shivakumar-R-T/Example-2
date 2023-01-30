import React from 'react'
import Topic1 from './Topic1';
import Topic2 from './Topic2';

const Topic3 = (props) => {
    const isLoggedIn=(props);
  return (
    <div>
        {isLoggedIn && <Topic2 /> }

   

    </div>
  )
}

export default Topic3