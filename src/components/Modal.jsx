import "./Modal.css"

function Modal({title, btnCancel, btnConfirm}){
    return (
    <>
    <div className="modal">
      <p className="modal__title">{title}</p>
      <div className="modal__buttons">
        <button className="btn btn__cancel" onClick={btnCancel}>Cancel</button>

        <button className="btn" onClick={btnConfirm}>Confirm</button>
      </div>
    </div>
    <div className="backdrop" />
  </>
  );
}

export default Modal