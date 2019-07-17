import React, { useEffect } from 'react';

const Related = (props) => {
  console.log(props);

  useEffect(() => {
    if (typeof props.related[0] === 'number') {
      props.load(props.related);
    }
  });

  return <div>{props.related.map((ele, idx) => {
    return <div key={idx}>{`${ele.name} ${ele.description}`}</div>
  })}</div>
};

export default Related;