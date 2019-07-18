import React from 'react'

const Overview = (props) => {
    return (
      <React.Fragment>
        <div>Product Name : {props.info.name}</div>
        <div>Category : {props.info.category}</div>
        
        {props.selectedStyle.sale_price > 0 ?
        <div>Sale Price : {props.selectedStyle.sale_price}</div> : <div>Price : {props.selectedStyle.original_price}</div>}

        <div>Selected: {props.selectedStyle.name}</div>
        <div><img src={props.selectedStyle.photos[0].thumbnail_url}/></div>
        <div>
          {props.styles.results.map(style => {
            return <div key={style.style_id} 
                        onClick={()=>props.handleSelectedStyle(style)}>
                        {style.name}
                  </div>
          })}
        </div>
      </React.Fragment>
    )
}

export default Overview