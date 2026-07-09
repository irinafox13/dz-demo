import { useState } from "react";
import Button from "./components/Button/Button";
import Headline from "./components/Headline/Headline";
import Header from "./layouts/Header/Header";
import MainBody from "./layouts/MainBody/MainBody";
import Paragraph from "./components/Paragraph/Paragraph";
import Input from "./components/Input/Input";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const clickHandler = (e) => console.log(e);
  const onChangeSearchInput = (e) => setSearchQuery(e.target.value);

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
        <div style={{ display: "flex", gap: "8px", marginTop: "24px", width: "100%" }}>
          <Input
            icon="/public/loupe.svg"
            placeholder={"Введите название"}
            value={searchQuery}
            onChange={onChangeSearchInput}
          />
          <Button onClick={clickHandler}>Искать</Button>
        </div>
      </MainBody>
    </>
  );
}

export default App;
