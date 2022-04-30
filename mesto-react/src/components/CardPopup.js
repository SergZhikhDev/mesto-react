function CardPopup() {
  return (
    <fieldset className="form__input-container">

      <input
        type="text"
        name="place"
        className="form__input-area form__input-area_name"
        id="place"
        placeholder="Название"
        // value=""
        minLength="2"
        maxLength="30"
        required
      />
      <span className="popup__error" id="error-place"></span>

      <input
        type="url"
        name="placeLink"
        className="form__input-area form__input-area_property"
        id="placeLink"
        placeholder="Введите ссылку"
        // value=""
        required
      />
      <span className="popup__error" id="error-placeLink"></span>
      
    </fieldset>
  );
}

export default CardPopup;
