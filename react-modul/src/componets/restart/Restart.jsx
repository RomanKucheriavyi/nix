import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/userSlice";
import style from "./Restart.module.scss";

export default function Restart() {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteUser());
  };

  return (
    <button
      className={style.button}
      type="button"
      onClick={handleClick}
    >
      Заново
    </button>
  );
}
