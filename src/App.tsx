import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./styles/Global.css";

const numberOfCards = 64;

function genHex(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function genPicsum(): string {
  const width = 100 + Math.floor(Math.random() * 100);
  const height = 100 + Math.floor(Math.random() * 100);
  return `https://picsum.photos/${width}/${height}`;
}

async function Title(): Promise<string> {
  const response = await fetch(
    `https://random-word-api.vercel.app/api?words=${numberOfCards}`
  );

  const data = await response.json();

  return data;
}

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    Title().then((data) => setTitle(data));
  }, []);
  return (
    <>
      {[...Array(numberOfCards)].map((_, index) => (
        <Card
          key={index}
          title={title[index]}
          image={genPicsum()}
          color={genHex()}
        />
      ))}
    </>
  );
}

export default App;
