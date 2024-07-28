export default function DynamicComponent({ data, children, tags, ListContainer }) {
  return (<>
    {tags}
    <ListContainer>{data.map(val => <li key={val}>{val}</li>)}</ListContainer>
    {children}
  </>);
}