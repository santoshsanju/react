export default function ButtonClick(props) {
  return (
    <>
      <button onClick={props.onSelect}>{props.children}</button>
    </>
  );
}