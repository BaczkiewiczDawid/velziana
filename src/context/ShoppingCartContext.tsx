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

  const deleteItem = (id: number) => {
    setShoppingCartItems(shoppingCartItems?.filter((item) => item !== id))
  }

  const handleShoppingCartItems = (id: number) => {
    if (shoppingCartItems?.find((el) => el === id) || shoppingCartItems!?.length >= 3) {
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
        deleteItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
