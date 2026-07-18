import FilmCard from "../FilmCard/FilmCard";
import styles from "./FilmGrid.module.css";

function FilmGrid({ films }) {
  return (
    <div className={styles.grid}>
      {[...films]?.map((film) => (
        <FilmCard key={film.id} card={film} />
      ))}
    </div>
  );
}

export default FilmGrid;
