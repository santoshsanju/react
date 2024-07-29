export default function DynamicComponent({ data, children, tags, ListContainer, forName }) {
  return (<>
    {tags}
    <ListContainer>{data.map(val => <li key={val}>{val}</li>)}</ListContainer>
    {children + " for " + forName}
  </>);
}