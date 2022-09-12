import React, { createContext, useState, useContext } from "react";
import { TypeStoreContextOBJ } from "../../@types/GlobalTypes"

const obj: TypeStoreContextOBJ = {
  email: "",
  setEmail: "",
  notification: 0,
  setNotification: "",
  cloud: 0,
  setCloud: "",
};

const StoreContext = createContext<TypeStoreContextOBJ>(obj);

export default function Store({ children }) {
  const [email, setEmail] = useState("teste@gmail.com");
  const [notification, setNotification] = useState(1);
  const [cloud, setCloud] = useState(1);

  return (
    <StoreContext.Provider
      value={{
        email,
        setEmail,
        notification,
        setNotification,
        cloud,
        setCloud,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useEmail() {
  const context = useContext(StoreContext);
  const { email, setEmail } = context;
  return { email, setEmail };
}

export function useNotification() {
  const context = useContext(StoreContext);
  const { notification, setNotification } = context;
  return { notification, setNotification };
}

export function useCloud() {
  const context = useContext(StoreContext);
  const { cloud, setCloud } = context;
  return { cloud, setCloud };
}
