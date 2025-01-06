import css from "./Contact.module.css";

import { IoMdPerson } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { ModalComp } from "../Modal/Modal";

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
      <ModalComp id={id} name={name} number={number} />
    </li>
  );
};
