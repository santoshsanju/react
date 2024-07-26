import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const name = "Santosh";
function Logo(props) {
  return (<><div>
    <a href={props.link} target="_blank">
      <img src={props.srcName} className={props.class + " logo"} alt={props.altName + " logo"} />
    </a>
  </div>
  </>);
}

function App() {
  return (
    <>
      <Logo link="https://vitejs.dev" srcName={viteLogo} class="" altName="Vite" />
      <Logo link="https://react.dev" srcName={reactLogo} class="react" altName="React" />
      <h1>Vite + React</h1>
      <h1>{name}</h1>
    </>
  );
}

export default App;
