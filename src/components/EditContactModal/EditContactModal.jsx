import { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";

import { editContact } from "../../redux/contacts/contactsOperations";
import toast from "react-hot-toast";

import css from "./EditContactModal.module.css";
import { EditContactForm } from "../EditContactForm/EditContactForm";

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

export const EditContactModal = ({ id, name, number }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const handleEdit = () => {
    dispatch(editContact({ id, name, number }));
    closeModal();
    toast.success(`Successfully edited contact ${name}!`);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Contact edit"
      >
        <div className={css.modal}>
          <h2 className={css.header}>Edit your contact</h2>
          <EditContactForm name={name} number={number} />
          <div className={css.buttons}>
            <button className={css.button} onClick={closeModal}>
              Do not edit
            </button>
            <button className={css.button} type="button" onClick={handleEdit}>
              Edit contact
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
