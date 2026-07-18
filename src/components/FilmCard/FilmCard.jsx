import Like from "./../../assets/images/svg/like.svg?react";
import Star from "./../../assets/images/svg/star.svg?react";
import Bookmark from "./../../assets/images/svg/bookmark.svg?react";

function FilmCard({ card }) {
  const { name, image, rating, inFavorite } = card;
  return (
    <article className="card">
      <div className="posterWrapper">
        <img
          className="poster"
          src={`src/assets/images/posters/${image}.png`}
          alt={name}
        />
        {rating && (
          <div className="rating">
            <Star />
            {rating}
          </div>
        )}
      </div>
      <div className="info">
        <h3 className="name">{name}</h3>

        <div className={`favorite ${inFavorite ? "favoriteActive" : ""}`}>
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
