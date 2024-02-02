import { useEffect, useState } from "react";
import Card from "./browse/card/Card";
import { card } from "./BrowseTypes";
import Header from "./header/Header";
import "./Browse.css";

const numberOfCards = 64;

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

const Browse = () => {
  const [search, setSearch] = useState<string>("");
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

  const cardList = matches.map((card, index) => (
    <Card
      key={index}
      title={card.title}
      image={card.image}
      color={card.color}
    />
  ));

  return (
    <>
      <Header ontype={setSearch} value={search} />
      <h2>Browse all</h2>
      <div className="Card-Container">{cardList}</div>
    </>
  );
};

export default Browse;
