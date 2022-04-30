import { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const { onEditProfile, onAddPlace, onEditAvatar, onCardClick } = props;
  let [userName, setUserName] = useState("John MalKovitch");
  let [userDescription, setUserDescription] = useState("Mechanics");
  let [userAvatar, setUserAvatar] = useState(
    "https://avatars.mds.yandex.net/get-marketpic/195998/market_ey7VxMkpi0FDlugH3HtbqA/orig"
  );
  let [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])

      .then((values) => {
        const res = values[0];
        const cardList = values[1];

        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);

        const formatedData = cardList.map((cardData) => {
          return {
            likes: cardData.likes,
            link: cardData.link,
            name: cardData.name,
            id: cardData._id,
          };
        });

        setCards(formatedData);
      })

      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="фотография пользователя"
        />

        <button
          type="button"
          className="openPopupBtn  profile__avatar-button"
          onClick={onEditAvatar}
        ></button>

        <div className="profile-info">
          <h1 className="profile-info__userName">{userName}</h1>
          <button
            type="button"
            className="openPopupBtn profile-info__edit-button"
            onClick={onEditProfile}
          ></button>
          <p className="profile-info__about-self">{userDescription}</p>
        </div>
        <button
          type="button"
          className="openPopupBtn profile__add-button"
          onClick={onAddPlace}
        ></button>
      </section>

      <section className="places">
        <ul className="elements" id="elements">
          {cards.map((card) => (
            <Card key={card.id} card={card} onCardClick={onCardClick} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
