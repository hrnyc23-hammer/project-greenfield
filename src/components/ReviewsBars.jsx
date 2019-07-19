import React from 'react'
import Button from "@material-ui/core/Button"

const ReviewsBars = (props) => {
    var totalStars = 0
    for (let key in props.meta.ratings) {
        totalStars = totalStars + props.meta.ratings[key]
    }
    var fiveStars = props.meta.ratings[5] || 0
    var fourStars = props.meta.ratings[4] || 0
    var threeStars = props.meta.ratings[3] || 0
    var twoStars = props.meta.ratings[2] || 0
    var oneStars = props.meta.ratings[1] || 0
    return (
        <React.Fragment>
            <div>
                <span onClick={() => { props.handleBarFilterChange(5) }} style={{ textDecoration: 'underline', float: 'left' }}>5 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: `${(fiveStars / totalStars) * 100}%`, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(4) }} style={{ textDecoration: 'underline', float: 'left' }}>4 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: `${(fourStars / totalStars) * 100}%`, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(3) }} style={{ textDecoration: 'underline', float: 'left' }}>3 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: `${(threeStars / totalStars) * 100}%`, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(2) }} style={{ textDecoration: 'underline', float: 'left' }}>2 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: `${(twoStars / totalStars) * 100}%`, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(1) }} style={{ textDecoration: 'underline', float: 'left' }}>1 star</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: `${(oneStars / totalStars) * 100}%`, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>{(props.barFilter.length > 0) ? (
                <span>Filtered by stars:
                <span>{props.barFilter.map((star, index) => {
                    return <span key={index}> {star}</span>
                })}
                    </span><br /><Button variant='contained' size='small' onClick={props.handleBarFilterReset}>Reset Filter</Button></span>
            ) : null}
            </div>
        </React.Fragment>
    )
}

export default ReviewsBars