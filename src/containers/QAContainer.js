import { connect } from "react-redux";
import QA from "./../components/QA.jsx";
import sample from "../data/sampleItemData.js";

var mapStateToProps = state => ({
  info: sample.info,
  styles: sample.styles,
  related: sample.related,
  qa: sample.qa,
  reviews: sample.reviews,
  meta: sample.meta,
  QASearchEntry: state.QASearchEntry
});

var mapDispatchToProps = dispatch => ({});

var QAContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QA);

export default QAContainer;
