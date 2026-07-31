import { useState } from "react";
import Headline from "../Headline/Headline";
import Input from "../Input/Input";
import Button from "../Button/Button";

const LoginForm = ({ user, setUser }) => {
  const [userName, setUserName] = useState("");

  if (user.isLogined) return;
  return (
    <>
      <Headline title={"Вход"} />
      <div
        style={{
          display: "grid",
          gap: "8px",
          marginTop: "24px",
          width: "fit-content",
          minWidth: "384px",
        }}
      >
        <Input
          placeholder={"Введите имя"}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Button
          onClick={() => {
            setUser({ name: userName, isLogined: true });
            setUserName("");
          }}
        >
          Войти в профиль
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
