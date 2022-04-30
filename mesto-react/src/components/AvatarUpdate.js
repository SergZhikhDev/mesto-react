function AvatarUpdate() {
  return (
    <>
      {" "}
      <fieldset className="form__input-container">
        <input
          type="url"
          name="avatar"
          className="form__input-area form__input-area_name form__input-area_avatar"
          id="avatarUpdate"
          placeholder="Введите ссылку на аватар"
          // value=""

          required
        />
        <span className="popup__error" id="error-avatarUpdate"></span>
      </fieldset>
      {/* <fieldset className="form__handlers">
        <button
          type="submit"
          name="sBtnAvatarUpdate"
          className="form__button form__button_avatar-update"
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

export default AvatarUpdate;
