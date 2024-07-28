export default function DynamicComponent({ data, children, tags }) {
  return (<>
    {tags}
    <menu>{data.map(val => <li key={val}>{val}</li>)}</menu>
    {children}
  </>);
}