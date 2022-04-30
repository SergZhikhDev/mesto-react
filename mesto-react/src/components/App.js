import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import AvatarUpdate from "./AvatarUpdate";
import EditProfile from "./EditProfile";
import CardPopup from "./CardPopup";
import ImagePopup from "./ImagePopup";

function App() {
  const [isAvatarUpdateOpen, setIsAvatarUpdateOpen] = useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ isOpen: false });

  function handleAvatarUpdateClick() {
    setIsAvatarUpdateOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfileOpen(true);
  }

  function handleCardPopupClick() {
    setIsCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({
      isOpen: true,
      ...card,
    });
  }

  function closeAllPopups() {
    setIsAvatarUpdateOpen(false);
    setIsEditProfileOpen(false);
    setIsCardPopupOpen(false);
    setSelectedCard({ isOpen: false });
  }

  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleAvatarUpdateClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleCardPopupClick}
          onCardClick={handleCardClick}
        />
        <Footer />

        <PopupWithForm
          name="avatar-update"
          title="Обновить аватар"
          btnText="Сохранить"
          isOpen={isAvatarUpdateOpen}
          onClose={closeAllPopups}
        >
          <AvatarUpdate />
        </PopupWithForm>

        <PopupWithForm
          name="edit-profile"
          title="Редактировать профиль"
          btnText=" Сохранить"
          isOpen={isEditProfileOpen}
          onClose={closeAllPopups}
        >
          <EditProfile />
        </PopupWithForm>

        <PopupWithForm
          name="cardPopup"
          title="Новое место"
          btnText=" Создать"
          isOpen={isCardPopupOpen}
          onClose={closeAllPopups}
        >
          <CardPopup />
        </PopupWithForm>

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
  );
}

export default App;
