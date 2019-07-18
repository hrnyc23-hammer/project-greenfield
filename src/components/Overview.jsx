import React from 'react'
import Grid from '@material-ui/core/Grid';

const Overview = (props) => {
    return (
      <React.Fragment>
        <Grid container>
        <Grid item xs={4}>
        <div>Selected: {props.selectedStyle.name}</div>
        <div><img src={props.selectedStyle.photos[0].thumbnail_url}/></div>
        </Grid>
        <Grid item xs={4}>
        <div>Product Name : {props.info.name}</div>
        <div>Category : {props.info.category}</div>

        {props.selectedStyle.sale_price > 0 ?
        <div>Sale Price : {props.selectedStyle.sale_price}</div> : <div>Price : {props.selectedStyle.original_price}</div>}
        <div>
          {props.styles.results.map(style => {
            return <div key={style.style_id} 
                        onClick={()=>props.handleSelectedStyle(style)}>
                        {style.name}
                  </div>
          })}
        </div>
        </Grid>
        </Grid>
      </React.Fragment>
    )
}

export default Overview