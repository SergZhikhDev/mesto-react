function EditProfile() {
  return (
    <>
      <fieldset className="form__input-container">
        <input
          type="text"
          name="userName"
          className="form__input-area form__input-area_name form__input-area_userName"
          id="userName"
          placeholder="Введите имя"
          // value=""
          minLength="2"
          maxLength="40"
          required
        />

        <span className="popup__error" id="error-userName"></span>

        <input
          type="text"
          name="aboutSelf"
          className="form__input-area form__input-area_property form__input-area_aboutSelf"
          id="about-self"
          placeholder="Введите род занятий"
          // value=""
          minLength="2"
          maxLength="200"
          required
        />

        <span className="popup__error" id="error-about-self"></span>
      </fieldset>

      {/* <fieldset className="form__handlers">
        <button
          type="submit"
          name="sBtnEditBlock"
          className="form__button form__button_edit-block"
        >
          Сохранить
        </button>
        <button
          type="button"
          name="sBtnEditBlock"
          className="form__button form__button-dont-worry "
        >
          Сохранение ...
        </button>
      </fieldset> */}
    </>
  );
}
export default EditProfile;
