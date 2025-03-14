import Modal from "react-modal";
import { useEffect } from "react";
import css from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, largeImageURL }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        onRequestClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onRequestClose]);

  if (!isOpen) return null;

  return (
    <Modal
      className={css.modal}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={css.overlay}
    >
      <img className={css.image} src={largeImageURL} alt="" />
    </Modal>
  );
};

export default ImageModal;
