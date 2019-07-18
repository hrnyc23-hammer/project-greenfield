import React from 'react'


const Overview = (props) => {
    return (

      <React.Fragment>
        <div>Product Name : {props.info.name}</div>
        <div>Category : {props.info.category}</div>
        <div>Price : {props.info.price}</div>
        <div>
          {props.styles.results.map(style => {
            return <div key={style.style_id}>{style.name}</div>
          })}
        </div>
      </React.Fragment>
    )
}

export default Overview