import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Logo from './Components/Logo';
import ButtonClick from './Components/ButtonClick';
import './App.css';


const data = [{ link: "https://vitejs.dev", srcName: viteLogo, classes: "", altName: "Vite" }, { link: "https://react.dev", srcName: reactLogo, classes: "react", altName: "React" }];

function App() {
  const [name, setName] = useState("Santosh");
  let title = <h1>Vite + React</h1>;
  function changeHandler(args) {
    setName(name + " Molleti " + args);
    console.log(name);
  }
  if (name === 'Santosh') {
    title = <h1>Vite</h1>;
  } else {
    title = <h1>React</h1>;
  }
  return (
    <>
      {name === 'Santosh' ? <Logo {...data[0]} /> : <Logo {...data[1]} />}
      {title}
      <h1>{name}</h1>
      {data.map(prop => <Logo {...prop} key={prop.altName} />)}
      <ButtonClick onSelect={() => changeHandler(" Bro")}>Change</ButtonClick>
    </>
  );
}

export default App;
