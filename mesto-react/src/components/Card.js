function Card({ card, onCardClick }) {
  // const { card, onCardClick } = props;

  function handleClick() {
    onCardClick(card);
  }

  return (
    <li className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button type="button" className="element__basket"></button>

      <div className="element__description">
        <p className="element__title">{card.name}</p>
        <div className="element__likeContainer">
          <button type="button" className="element__heart"></button>
          <span className="element__likeCount">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
export default Card;
