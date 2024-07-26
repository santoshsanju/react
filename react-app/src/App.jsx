import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const name = "Santosh";

const data = [{ link: "https://vitejs.dev", srcName: viteLogo, classes: "", altName: "Vite" }, { link: "https://react.dev", srcName: reactLogo, classes: "react", altName: "React" }];
function Logo({ link, srcName, classes, altName }) {
  return (<><div>
    <a href={link} target="_blank">
      <img src={srcName} className={classes + " logo"} alt={altName + " logo"} />
    </a>
  </div>
  </>);
}

function App() {
  return (
    <>
      <Logo {...data[0]} />
      <Logo {...data[1]} />
      <h1>Vite + React</h1>
      <h1>{name}</h1>
    </>
  );
}

export default App;
