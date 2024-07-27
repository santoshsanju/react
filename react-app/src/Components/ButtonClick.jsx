export default function ButtonClick(props) {
  function changeHandler() {
    console.log("Hello");
  }
  return (
    <>
      <button onClick={changeHandler}>{props.children}</button>
    </>
  );
}