import React, { useState } from "react";
import Button from "./components/Button/Button";
import Headline from "./components/Headline/Headline";
import Header from "./layouts/Header/Header";
import MainBody from "./layouts/MainBody/MainBody";
import Paragraph from "./components/Paragraph/Paragraph";
import Input from "./components/Input/Input";
import FilmGrid from "./components/FilmGrid/FilmGrid";
import LoginForm from "./components/LoginForm/LoginForm";
import { UserContextProvider } from './context/user.context';

import {
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  poster7,
  poster8,
} from "./assets/images/posters/index";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
 
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => console.log(e);
  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value);
  const films = [
    {
      id: 1,
      name: "Black Widow",
      image: poster1,
      rating: "343",
      inFavorite: false,
    },
    {
      id: 2,
      name: "Shang Chi",
      image: poster2,
      rating: "1",
      inFavorite: false,
    },
    { id: 3, name: "Loki", image: poster3, rating: "8974", inFavorite: false },
    {
      id: 4,
      name: "How I Met Your Mother",
      image: poster4,
      rating: "45",
      inFavorite: false,
    },
    {
      id: 5,
      name: "Money Heist",
      image: poster5,
      rating: "98",
      inFavorite: false,
    },
    {
      id: 6,
      name: "Friends",
      image: poster6,
      rating: "541",
      inFavorite: false,
    },
    {
      id: 7,
      name: "The Big Bang Theory",
      image: poster7,
      rating: "12",
      inFavorite: true,
    },
    {
      id: 8,
      name: "Two And a Half Men",
      image: poster8,
      rating: "54",
      inFavorite: false,
    },
  ];

  return (
    <UserContextProvider>
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
        <br></br>
        <LoginForm />
      </MainBody>
    </UserContextProvider>
  );
}

export default App;
