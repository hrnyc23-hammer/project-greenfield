import { connect } from "react-redux";
import QAForum from "./../components/QAForum.jsx";
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

var QAForumContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(QAForum);

export default QAForumContainer;
