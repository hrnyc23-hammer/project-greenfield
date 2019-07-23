import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: "740px",
    height: "600px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
}));

const ReviewsModal = props => {
  const [modalStyle] = useState({
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  });
  const [minimumStyle] = useState({
    fontSize: "small",
    float: "right"
  });
  const [rightStyle] = useState({
    float: "right"
  });
  const [small] = useState({
    fontSize: "small"
  });
  const [leftStyle] = useState({
    float: "left"
  });
  const [leftMarginStyle] = useState({
    float: "left",
    marginLeft: "350px"
  });
  const [submitStyle] = useState({
    float: "right",
    fontSize: "large",
    marginTop: "125px"
  });
  const [body, setBody] = useState("Why did you like the product or not?");
  const [email, setEmail] = useState("Your email here");
  const [name, setName] = useState("Example: jackson11");
  const [photos, setPhotos] = useState([]);
  const [rating, setRating] = useState(3);
  const [recommend, setRecommend] = useState(true);
  const [summary, setSummary] = useState("Example: Best purchase ever!");
  const [singlePhoto, setSinglePhoto] = useState("Enter photo URL here");

  const reset = () => {
    setBody("Why did you like the product or not?");
    setEmail("Your email here");
    setName("Example: jackson11");
    setPhotos([]);
    setRating(3);
    setRecommend(true);
    setSummary("Example: Best purchase ever!");
    setSinglePhoto("Enter photo URL here");
  };

  const submitPhoto = () => {
    if (photos.length < 5) {
      photos.push(singlePhoto);
      setPhotos(photos);
    } else {
      alert("You may only post five pictures.");
    }
    setSinglePhoto("Enter photo URL here");
  };

  const classes = useStyles();
  return (
    <Modal open={props.open} onClose={props.handleClose}>
      <div style={modalStyle} className={classes.paper}>
        <div style={minimumStyle}>* indicates required fields</div>
        <p>
          <strong>*Rating:</strong>
        </p>
        <select
          style={leftStyle}
          defaultValue="3"
          onChange={e => setRating(e.target.value)}
        >
          <option value="1">1 star: "Poor</option>
          <option value="2">2 stars: "Fair"</option>
          <option value="3">3 stars: "Average"</option>
          <option value="4">4 stars: "Good"</option>
          <option value="5">5 stars: "Great"</option>
        </select>
        <input
          defaultChecked="true"
          onClick={() => {
            setRecommend(true);
          }}
          style={leftMarginStyle}
          type="radio"
          name="recommended"
          value="true"
        />
        <label style={leftStyle}>Recommended</label>
        <input
          onClick={() => {
            setRecommend(false);
          }}
          style={leftStyle}
          type="radio"
          name="recommended"
          value="true"
        />
        <label style={leftStyle}>Not Recommended</label>
        <br />
        <p>
          <strong>*Summary:</strong>
        </p>
        <textarea
          value={summary}
          maxLength="60"
          onChange={e => setSummary(e.target.value)}
          rows="2"
          cols="100"
        />
        <br />
        <p>
          <strong>*Body:</strong>
        </p>
        <textarea
          value={body}
          maxLength="1000"
          onChange={e => setBody(e.target.value)}
          rows="6"
          cols="100"
        />
        {body.length < 50 ? (
          <div style={minimumStyle}>
            Minimum required characters left: {50 - body.length}
          </div>
        ) : (
          <div style={minimumStyle}>Minimum reached</div>
        )}
        <br />
        <br />
        <span>
          <strong>*Nickname:</strong>
        </span>
        <span style={rightStyle}>
          <strong>*Email:</strong>
        </span>
        <br />
        <textarea
          value={name}
          maxLength="60"
          onChange={e => setName(e.target.value)}
          rows="1"
          cols="40"
        />
        <textarea
          style={rightStyle}
          value={email}
          maxLength="60"
          onChange={e => setEmail(e.target.value)}
          rows="1"
          cols="40"
        />
        <p style={minimumStyle}>
          For authentication reasons, you will not be emailed
        </p>
        <p>
          <strong>Photos:</strong>
        </p>
        <textarea
          style={leftStyle}
          value={singlePhoto}
          maxLength="1000"
          onSubmit={submitPhoto}
          onChange={e => setSinglePhoto(e.target.value)}
          rows="1"
          cols="80"
        />
        <button onClick={submitPhoto}>Submit URL</button>
        <button onClick={() => props.handleSubmitReview(rating, summary, body, recommend, name, email, photos)} style={submitStyle}>Submit Review</button>
        <button style={submitStyle} onClick={reset}>
          Reset Fields
        </button>
        {photos.map((pic, index) => {
          return (
            <div key={index} style={small}>
              {pic}
            </div>
          );
        })}
      </div>
    </Modal>
  );
};

export default ReviewsModal;
