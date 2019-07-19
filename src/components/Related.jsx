import React, { useEffect } from 'react';
import RelatedItem from './RelatedItem';

const Related = (props) => {
  useEffect(() => {
    if (typeof props.related[0] === 'number') {
      props.load(props.related);
    }
  });

  return (
    <div>
      {props.related.map((item, idx) => {
        return <RelatedItem key={idx} item={item} currentItemInfo={props.info} handleRelatedClick={props.handleRelatedClick}/>
      })}
    </div>
  )
};

export default Related;