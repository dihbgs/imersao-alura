import Card from "./components/Card";
import "./styles/Global.css";

function genHex(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function genPicsum(): string {
  const width = 250 + Math.floor(Math.random() * 750);
  const height = 250 + Math.floor(Math.random() * 750);
  return `https://picsum.photos/${width}/${height}`;
}

function App() {
  return (
    <>
      {[...Array(64)].map((_, index) => (
        <Card
          key={index}
          title={"Card " + (index + 1)}
          image={genPicsum()}
          color={genHex()}
        />
      ))}
    </>
  );
}

export default App;
