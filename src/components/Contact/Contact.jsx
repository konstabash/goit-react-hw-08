import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  const isLong = name.length > 12;

  return (
    <div className={s.container}>
      <ul className={s.contacts}>
        <li>
          <FaUser className={s.icon} />
          <p>{isLong ? `${name.slice(0, 11).trim()}...` : name}</p>
        </li>
        <li>
          <FaPhoneAlt className={s.icon} />
          <p>{number}</p>
        </li>
      </ul>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
