import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import toast from "react-hot-toast";

import css from "./Modal.module.css";

import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ModalComp = ({ id, name, number }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
    closeModal;
    toast.success(`Successfully deleted contact ${name}!`);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Delete</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={css.modal}>
          <h2 className={css.header}>
            Are you sure you want to delete this contact?
          </h2>
          <div className={css.contact}>
            <div className={css["contact-info"]}>
              <div className={css["contact-detail"]}>
                <IoMdPerson size="20" className={css["contact-icon"]} />
                <span>{name}</span>
              </div>
              <div className={css["contact-detail"]}>
                <FaPhone size="15" className={css["contact-icon"]} />
                <span>{number}</span>
              </div>
            </div>
          </div>
          <div className={css.buttons}>
            <button className={css.button} onClick={closeModal}>
              No
            </button>
            <button className={css.button} type="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
