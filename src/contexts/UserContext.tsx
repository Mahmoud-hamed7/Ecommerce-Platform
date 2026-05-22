
import { createContext, useEffect, useState } from "react";


interface UserContextType {
  UserLogin: any;
  setUserLogin: React.Dispatch<React.SetStateAction<any>>;
}

export const UserContext = createContext<UserContextType>({
  UserLogin: null,
  setUserLogin: () => {},
});
export default function UserContextProvider({ children }: { children: React.ReactNode }) {
 const [UserLogin, setUserLogin] = useState<string | null>(
  localStorage.getItem("userToken")
);




  return (
    <UserContext.Provider value={{ UserLogin, setUserLogin }}>
      {children}
    </UserContext.Provider>
  );
}