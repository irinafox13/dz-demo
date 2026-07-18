import Like from "./../../assets/images/svg/like.svg?react";
import Star from "./../../assets/images/svg/star.svg?react";
import Bookmark from "./../../assets/images/svg/bookmark.svg?react";
import styles from "./FilmCard.module.css";
import classNames from "classnames";

function FilmCard({ card }) {
  const { name, image, rating, inFavorite } = card;
  return (
    <article className={styles.card}>
      <div className={styles.posterWrapper}>
        <img
          className={styles.poster}
          src={image}
          alt={name}
        />
        {rating && (
          <div className={styles.rating}>
            <Star />
            {rating}
          </div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>

        <div className={classNames(styles.favorite, inFavorite && styles.favoriteActive)}>
          {inFavorite ? (
            <>
              <Bookmark />В избранном
            </>
          ) : (
            <>
              <Like />В избранное
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default FilmCard;
