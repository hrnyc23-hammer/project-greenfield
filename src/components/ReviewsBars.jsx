import React from 'react'
import Button from "@material-ui/core/Button"
import { clickTracker } from '../infoFetchers.js'

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
    var fiveWidth = `${(fiveStars / totalStars) * 100}%`
    var fourWidth = `${(fourStars / totalStars) * 100}%`
    var threeWidth = `${(threeStars / totalStars) * 100}%`
    var twoWidth = `${(twoStars / totalStars) * 100}%`
    var oneWidth = `${(oneStars / totalStars) * 100}%`
    if (totalStars === 0) {
        fiveWidth = fourWidth = threeWidth = twoWidth = oneWidth = '0%'
    }
    return (
        <React.Fragment>
            <div>
                <span onClick={() => { props.handleBarFilterChange(5); clickTracker('review bars filter', 'reviews') }} style={{ textDecoration: 'underline', float: 'left' }}>5 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: fiveWidth, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(4); clickTracker('review bars filter', 'reviews') }} style={{ textDecoration: 'underline', float: 'left' }}>4 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: fourWidth, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(3); clickTracker('review bars filter', 'reviews') }} style={{ textDecoration: 'underline', float: 'left' }}>3 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: threeWidth, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(2); clickTracker('review bars filter', 'reviews') }} style={{ textDecoration: 'underline', float: 'left' }}>2 stars</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '10px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: twoWidth, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>
                <span onClick={() => { props.handleBarFilterChange(1); clickTracker('review bars filter', 'reviews') }} style={{ textDecoration: 'underline', float: 'left' }}>1 star</span>
                <div style={{ float: 'left', marginTop: '5px', marginLeft: '16px', position: 'relative', height: '10px', width: '200px', background: 'grey' }}>
                    <div style={{ width: oneWidth, background: 'green', height: '100%' }}></div>
                </div>
            </div>
            <br />
            <div>{(props.barFilter.length > 0) ? (<div>
                <span>Filtered by stars:
                <span>{props.barFilter.map((star, index) => {
                    if (index !== props.barFilter.length - 1) {
                        return <span key={index}> <strong>{star},</strong></span>
                    } else {
                        return <span key={index}> <strong>{star}</strong></span>
                    }
                })}
                    </span><br /><Button variant='contained' size='small' onClick={() => { props.handleBarFilterReset(); clickTracker('review bars filter', 'reviews') }}>Reset Filter</Button></span>
            </div>) : (<div style={{ visibility: 'hidden' }}>
                <span>Filtered by stars:
                <br /><Button variant='contained' size='small'>Reset Filter</Button></span>
            </div>)}
            </div>
            {props.meta.characteristics.Comfort ? <React.Fragment><p>Comfort</p>
                <div style={{ float: 'left', position: 'relative', height: '10px', width: '235px', background: 'lightgrey' }}><div style={{ fontSize: 'x-small', position: 'relative', marginLeft: `${props.meta.characteristics.Comfort.value * 46}px`, marginBottom: '10px' }}>▼</div></div>
                <br />
                <p style={{ float: 'left', fontSize: 'x-small' }}>Poor</p>
                <p style={{ marginLeft: '185px', float: 'left', fontSize: 'x-small' }}>Perfect</p>
                <br /><br />
            </React.Fragment> : null}

            {props.meta.characteristics.Fit ? <React.Fragment><p>Fit</p>

                <div style={{ float: 'left', position: 'relative', height: '10px', width: '235px', background: 'lightgrey' }}><div style={{ fontSize: 'x-small', position: 'relative', marginLeft: `${props.meta.characteristics.Fit.value * 46}px`, marginBottom: '10px' }}>▼</div></div>


                <br />
                <p style={{ float: 'left', fontSize: 'x-small' }}>Too Small</p>
                <p style={{ marginLeft: '63px', float: 'left', fontSize: 'x-small' }}>Perfect</p>
                <p style={{ marginLeft: '68px', float: 'left', fontSize: 'x-small' }}>Too Big</p>
                <br /><br />
            </React.Fragment> : null}

            {props.meta.characteristics.Length ? <React.Fragment><p>Length</p>

                <div style={{ float: 'left', position: 'relative', height: '10px', width: '235px', background: 'lightgrey' }}><div style={{ fontSize: 'x-small', position: 'relative', marginLeft: `${props.meta.characteristics.Length.value * 46}px`, marginBottom: '10px' }}>▼</div></div>


                <br />
                <p style={{ float: 'left', fontSize: 'x-small' }}>Too Short</p>
                <p style={{ marginLeft: '63px', float: 'left', fontSize: 'x-small' }}>Perfect</p>
                <p style={{ marginLeft: '64px', float: 'left', fontSize: 'x-small' }}>Too Long</p>
                <br /><br />
            </React.Fragment> : null}

            {props.meta.characteristics.Quality ? <React.Fragment><p>Quality</p>

                <div style={{ float: 'left', position: 'relative', height: '10px', width: '235px', background: 'lightgrey' }}><div style={{ fontSize: 'x-small', position: 'relative', marginLeft: `${props.meta.characteristics.Quality.value * 46}px`, marginBottom: '10px' }}>▼</div></div>


                <br />
                <p style={{ float: 'left', fontSize: 'x-small' }}>Poor</p>
                <p style={{ marginLeft: '185px', float: 'left', fontSize: 'x-small' }}>Perfect</p>
                <br /><br />
            </React.Fragment> : null}

            {props.meta.characteristics.Size ? <React.Fragment><p>Size</p>

                <div style={{ float: 'left', position: 'relative', height: '10px', width: '235px', background: 'lightgrey' }}><div style={{ fontSize: 'x-small', position: 'relative', marginLeft: `${props.meta.characteristics.Size.value * 46}px`, marginBottom: '10px' }}>▼</div></div>


                <br />
                <p style={{ float: 'left', fontSize: 'x-small' }}>Too Small</p>
                <p style={{ marginLeft: '63px', float: 'left', fontSize: 'x-small' }}>Perfect</p>
                <p style={{ marginLeft: '64px', float: 'left', fontSize: 'x-small' }}>Too Large</p>
                <br /><br />
            </React.Fragment> : null}

            {props.meta.characteristics.Width ? <React.Fragment><p>Width</p>

                <div style={{ float: 'left', position: 'relative', height: '10px', width: '235px', background: 'lightgrey' }}><div style={{ fontSize: 'x-small', position: 'relative', marginLeft: `${props.meta.characteristics.Width.value * 46}px`, marginBottom: '10px' }}>▼</div></div>


                <br />
                <p style={{ float: 'left', fontSize: 'x-small' }}>Too Narrow</p>
                <p style={{ marginLeft: '63px', float: 'left', fontSize: 'x-small' }}>Perfect</p>
                <p style={{ marginLeft: '64px', float: 'left', fontSize: 'x-small' }}>Too Wide</p>
            </React.Fragment> : null}
        </React.Fragment>
    )
}

export default ReviewsBars