import Spinner from "react-bootstrap/Spinner";
const styles = {
  spinner: {
    position: "fixed",
    top: "50%",
    left: "50%",
  },
};
function Loading(props) {
  const { loading, children } = props;
  if (loading) {
    return <Spinner style={styles.spinner} animation="border" />;
  } else {
    return <>{children}</>;
  }
}
export default Loading;
