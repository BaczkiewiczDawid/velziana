import { createContext, useState, ReactNode } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type Cart = number[] | undefined;

export const ShoppingCartContext: any = createContext({});

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shoppingCartItems, setShoppingCartItems] = useState<Cart>([]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleShoppingCartItems = (id: number) => {
    if (shoppingCartItems?.find((el) => el === id)) {
      return
    }
    setShoppingCartItems((prevState) => [...(prevState) || [], id]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleOpen,
        shoppingCartItems,
        handleShoppingCartItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
