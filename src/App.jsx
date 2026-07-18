import { useState } from "react";
import Button from "./components/Button/Button";
import Headline from "./components/Headline/Headline";
import Header from "./layouts/Header/Header";
import MainBody from "./layouts/MainBody/MainBody";
import Paragraph from "./components/Paragraph/Paragraph";
import Input from "./components/Input/Input";
import FilmGrid from "./components/FilmGrid/FilmGrid";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const clickHandler = (e) => console.log(e);
  const onChangeSearchInput = (e) => setSearchQuery(e.target.value);
  const films = [
    {
      id: 1,
      name: "Black Widow",
      image: "../src/assets/images/posters/1.png",
      rating: "343",
      inFavorite: false,
    },
    { id: 2, name: "Shang Chi", image: "../src/assets/images/posters/2.png", rating: "1", inFavorite: false },
    { id: 3, name: "Loki", image: "../src/assets/images/posters/3.png", rating: "8974", inFavorite: false },
    {
      id: 4,
      name: "How I Met Your Mother",
      image: "../src/assets/images/posters/4.png",
      rating: "45",
      inFavorite: false,
    },
    { id: 5, name: "Money Heist", image: "../src/assets/images/posters/5.png", rating: "98", inFavorite: false },
    { id: 6, name: "Friends", image: "../src/assets/images/posters/6.png", rating: "541", inFavorite: false },
    {
      id: 7,
      name: "The Big Bang Theory",
      image: "../src/assets/images/posters/7.png",
      rating: "12",
      inFavorite: false,
    },
    {
      id: 8,
      name: "Two And a Half Men",
      image: "../src/assets/images/posters/8.png",
      rating: "54",
      inFavorite: false,
    },
  ];

  return (
    <>
      <Header />
      <MainBody>
        <Headline title={"Поиск"} />
        <Paragraph
          text={
            "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
          }
        />
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "24px",
            width: "100%",
          }}
        >
          <Input
            icon="/loupe.svg"
            placeholder={"Введите название"}
            value={searchQuery}
            onChange={onChangeSearchInput}
          />
          <Button onClick={clickHandler}>Искать</Button>
        </div>
        <FilmGrid films={films} />
      </MainBody>
    </>
  );
}

export default App;
