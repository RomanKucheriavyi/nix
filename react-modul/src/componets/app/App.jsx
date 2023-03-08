import { Routes, Route } from "react-router-dom";
import Login from "../../pages/login";
import Main from "../../pages/main";
import CoinFlip from "../../pages/coin-flip";
import GuessDoor from "../../pages/guess-door";
import GuessNum from "../../pages/guess-num";
import End from "../../pages/end";
import NoPage from "../../pages/no-page/NoPage";
import AuthRoute from "../../helpers/AuthRoute";
import { useSelector } from "react-redux";
import { getDeposit, getBalance, getName } from "../../store/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();
  const deposit = useSelector(getDeposit);
  const balance = useSelector(getBalance);
  const name = useSelector(getName);
  useEffect(() => {
    if (name && balance <= deposit / 5) {
      navigate("/end");
    }
  }, [name, balance, deposit, navigate]);

  useEffect(() => {
    if (balance / deposit >= 2) {
      navigate("/end");
    }
  }, [balance, deposit, navigate]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<AuthRoute />}>
        <Route path="/" element={<Main />} />
        <Route path="/coin-flip" element={<CoinFlip />} />
        <Route path="/guess-door" element={<GuessDoor />} />
        <Route path="/guess-num" element={<GuessNum />} />
        <Route path="/end" element={<End />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  )
};
