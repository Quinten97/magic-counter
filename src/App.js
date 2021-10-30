import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img
        className="background"
        src="https://cdn.pixabay.com/photo/2019/03/21/12/53/fantasy-4070966_1280.jpg"
      />
      <Counter rotate light />
      <Counter />
    </div>
  );
}
