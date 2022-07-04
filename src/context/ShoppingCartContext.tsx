import { createContext, useState, ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

export const ShoppingCartContext: any = createContext({});

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
