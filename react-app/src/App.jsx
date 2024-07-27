import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Logo from './Components/Logo';
import ButtonClick from './Components/ButtonClick';
import './App.css';

const name = "Santosh";

const data = [{ link: "https://vitejs.dev", srcName: viteLogo, classes: "", altName: "Vite" }, { link: "https://react.dev", srcName: reactLogo, classes: "react", altName: "React" }];

function App() {
  function changeHandler(args) {
    console.log("Hello" + args);
  }
  return (
    <>
      <Logo {...data[0]} />
      <Logo {...data[1]} />
      <h1>Vite + React</h1>
      <h1>{name}</h1>
      <ButtonClick onSelect={() => changeHandler(" Bro")}>Change</ButtonClick>
    </>
  );
}

export default App;
