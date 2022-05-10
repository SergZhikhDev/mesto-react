import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup ";
import EditAvatarPopup from "./EditAvatarPopup";
import EditProfilePopup from "./EditProfilePopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  function handleAvatarUpdateClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleCardPopupClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      ...card,
    });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ isOpen: false });
  }

  function handleUpdateUser({ name, about }) {
    api.editProfile({ name, about }).then((res) => {
      setCurrentUser(res);
    });
    closeAllPopups();
  }

  function handleUpdateAvatar({ avatar }) {
    api.avatarUpdate({ avatar }).then((res) => {
      console.log("res", res);
      setCurrentUser(res);
    });
    closeAllPopups();
  }

  function handleAddPlace({ name, link }) {
    api.addCard({ name, link }).then((newCard) => {
      console.log("res", newCard);
      setCards([newCard, ...cards]);
    });
    closeAllPopups();
  }

  function handleCardLike(card) {
    let isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCardStatus(card.id, !isLiked)

      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card.id ? newCard : c))
        );
      })
      .catch((err) => console.log("Не удалось изменить лайк:", err));
  }

  function handleCardDelete(card) {
    api.deleteCard(card.id).then(() => {
      console.log(card);
      setCards((state) => state.filter((item) => item._id !== card.id));
    });
  }
  useEffect(() => {
    api
      .getInitialCards()

      .then((values) => {
        const cardList = values;

        const formatedData = cardList.map((cardData) => {
          return {
            likes: cardData.likes,
            link: cardData.link,
            name: cardData.name,
            id: cardData._id,
            owner: cardData.owner,
          };
        });

        setCards(formatedData);
      })

      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, [cards]);

  useEffect(() => {
    api.getProfile().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header />
          <Main
            onEditAvatar={handleAvatarUpdateClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleCardPopupClick}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlace}
          />

          <div
            className="popup popup_form popup_type_safety-issue"
            name="popupSafetyIssue"
          >
            <div className="popup__container">
              <button type="reset" className="popup__close"></button>
              <h3 className="popup__heading">Вы уверены?</h3>
              <form
                name="SafetyIssueForm"
                className="form form_type_safety-issue"
                noValidate
              >
                <fieldset className="form__handlers">
                  <button
                    type="submit"
                    name="sBtnEditBlock"
                    className="form__button form__button_safety-issue"
                  >
                    Да
                  </button>
                </fieldset>
              </form>
            </div>
          </div>

          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
