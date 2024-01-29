import { useEffect, useState } from "react";
import "../../styles/BrowsePanel.css";
import SearchBar from "./SearchBar";
import Card from "./Card";

const numberOfCards = 64;

interface card {
  title: string;
  image: string;
  color: string;
}

function genHex(): string {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function genPicsum(): string {
  const width = 100 + Math.floor(Math.random() * 100);
  const height = 100 + Math.floor(Math.random() * 100);
  return `https://picsum.photos/${width}/${height}`;
}

async function genGenre(): Promise<string> {
  const response = await fetch(
    `https://random-word-api.vercel.app/api?words=${numberOfCards}`
  );

  const data = await response.json();

  return data;
}

const BrowsePanel = () => {
  const [search, setSearch] = useState<string>("a");
  const [cards, setCards] = useState<card[]>([]);

  useEffect(() => {
    genGenre().then((data) => {
      setCards(
        Array.from(data).map((word: string) => ({
          title: word,
          image: genPicsum(),
          color: genHex(),
        }))
      );
    });
  }, []);

  const matches = cards.filter((card) => {
    return card.title.toLowerCase().includes(search.toLowerCase());
  });

  const cardList = matches.map((card) => (
    <Card
      key={card.title}
      title={card.title}
      image={card.image}
      color={card.color}
    />
  ));

  return (
    <>
      <SearchBar ontype={setSearch} value={search} />
      <div className="Card-Container">{cardList}</div>
    </>
  );
};

export default BrowsePanel;
