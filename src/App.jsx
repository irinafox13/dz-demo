import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <div className="box">
      <Header title={"Поиск"} />
      <Paragraph
        text={
          "Введите название фильма, сериала или мультфильма для поиска и добавления в избранное."
        }
      />
      <Button>Поиск</Button>
    </div>
  );
}

export default App;
