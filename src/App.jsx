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
      image: "1",
      rating: "343",
      inFavorite: false,
    },
    { id: 2, name: "Shang Chi", image: "2", rating: "1", inFavorite: false },
    { id: 3, name: "Loki", image: "3", rating: "8974", inFavorite: false },
    {
      id: 4,
      name: "How I Met Your Mother",
      image: "4",
      rating: "45",
      inFavorite: false,
    },
    { id: 5, name: "Money Heist", image: "5", rating: "98", inFavorite: false },
    { id: 6, name: "Friends", image: "6", rating: "541", inFavorite: false },
    {
      id: 7,
      name: "The Big Bang Theory",
      image: "7",
      rating: "12",
      inFavorite: false,
    },
    {
      id: 8,
      name: "Two And a Half Men",
      image: "8",
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
