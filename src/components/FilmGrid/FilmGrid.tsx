import FilmCard from "../FilmCard/FilmCard";
import styles from "./FilmGrid.module.css";
import type {FilmGridProps} from "./FilmGrid.props";

function FilmGrid({ films }: FilmGridProps) {
  return (
    <div className={styles.grid}>
      {[...films]?.map((film) => (
        <FilmCard key={film.id} card={film} />
      ))}
    </div>
  );
}

export default FilmGrid;
