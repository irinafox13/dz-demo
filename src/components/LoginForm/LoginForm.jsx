import { useState } from "react";
import Headline from "../Headline/Headline";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';

const LoginForm = () => {  
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState(user.name);

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          onClick={() => {
            setUser({
              name, 
              isLogined: true
            })
          }}
        >
          Войти в профиль
        </Button>
      </div>
    </>
  );
};

export default LoginForm;
