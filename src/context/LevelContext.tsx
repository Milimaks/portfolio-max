import { createContext, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}
export const LevelContext = createContext<number>(1);

export const LevelProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const level = 4;

  return (
    <LevelContext.Provider value={level}>{children}</LevelContext.Provider>
  );
};
