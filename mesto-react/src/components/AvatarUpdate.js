function AvatarUpdate() {
  return (
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
  );
}

export default AvatarUpdate;
