function PopupWithForm(props) {
  const { children, title, name,isOpen, onClose } = props;
  return (
    <div className={`popup  ${isOpen && 'popup_opened'} popup_type_${name}`} name="popupEditProfile">
      <div className="popup__container">
        <button type="reset"
         className="popup__close"
         onClick = {onClose}
        ></button>
        <h3 className="popup__heading">{`${title}`}</h3>
        <form name={`${name}`} className={`form form_type_${name}`} noValidate>
          {children}
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
