import FilmCard from "../FilmCard/FilmCard";
import styles from "./FilmGrid.module.css";
import type {FilmCardProps} from "./FilmGrid.props";

function FilmGrid({ films }: FilmCardProps) {
  return (
    <div className={styles.grid}>
      {[...films]?.map((film) => (
        <FilmCard key={film.id} card={film} />
      ))}
    </div>
  );
}

export default FilmGrid;
