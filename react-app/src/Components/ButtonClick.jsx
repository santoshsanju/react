export default function ButtonClick(props) {
  function handleLifting() {
    props.onSending("Molleti");
  }
  return (
    <>
      <button onClick={props.onSelect}>{props.children}</button>
      <button onClick={handleLifting}>Lifting Stateup</button>
    </>
  );
}