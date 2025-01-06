import css from "./Contact.module.css";

import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { DeleteContactModal } from "../DeleteContactModal/DeleteContactModal";
import { EditContactModal } from "../EditContactModal/EditContactModal";

export const Contact = ({ id, name, number }) => {
  return (
    <li className={css.contact}>
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
      <div className={css.buttons}>
        <EditContactModal id={id} name={name} number={number} />
        <DeleteContactModal id={id} name={name} number={number} />
      </div>
    </li>
  );
};
