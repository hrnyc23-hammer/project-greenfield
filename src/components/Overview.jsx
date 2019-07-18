import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
const Overview = (props) => {
    return (
      <React.Fragment>
        <Grid container>
        <Box display="flex" flexDirection="row" p={1} m={1}>
        <Box border={1}>
        <Grid item xs={8}>
        <img src={props.selectedStyle.photos[0].url} height="100%" width="100%"></img>
        </Grid>
        </Box>
        <Grid item xs={4}>
        <Box border={1}>
        <div>Selected: {props.selectedStyle.name}</div>
        <div>Product Name : {props.info.name}</div>
        <div>Category : {props.info.category}</div>
        </Box>
        {props.selectedStyle.sale_price > 0 ?
        <div>Sale Price : {props.selectedStyle.sale_price}</div> : <div>Price : {props.selectedStyle.original_price}</div>}
        <Box border={1} borderColor='green'>
        <div>
          {props.styles.results.map(style => {
            return <div key={style.style_id} 
            onClick={()=>props.handleSelectedStyle(style)}>
                        {style.name}
                  </div>
          })}
        </div>
        </Box>
        </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
        <Box display="flex" flexDirection="row" p={1} m={1} border={1}>
          {props.info.slogan}
        </Box>
        </Grid>
      </React.Fragment>
    )
}

export default Overview