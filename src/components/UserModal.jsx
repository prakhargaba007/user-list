import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const UserModal = forwardRef(({ user, onError }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      <div className="result-modal__content">
        <img
          src={user?.avatar}
          alt="avatar"
          onError={onError}
          className="result-modal__avatar"
        />
        <h2 className="result-modal__name">
          {user?.profile?.firstName} {user?.profile?.lastName}
        </h2>
        <p className="result-modal__info">
          <span className="result-modal__info-label">Email:</span>{" "}
          {user?.profile?.email}
        </p>
        <p className="result-modal__info">
          <span className="result-modal__info-label">Bio:</span> {user?.Bio}
        </p>
        <p className="result-modal__info">
          <span className="result-modal__info-label">Job Description:</span>{" "}
          {user?.jobTitle}
        </p>
        <form method="dialog">
          <button className="result-modal__close-btn">Close</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default UserModal;
