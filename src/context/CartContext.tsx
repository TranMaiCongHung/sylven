"use client";

import * as React from "react";

export interface CartItem {
  id: string;
  productId: string;
  slug: string;
  title: string;
  subtitle?: string;
  image: string;
  price: number;
  formattedPrice: string;
  variant?: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  totalCount: number;
  totalPrice: number;
  formattedTotal: string;
  openBag: () => void;
  closeBag: () => void;
  toggleBag: () => void;
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { id?: string; quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "sylven_bag_items_v1";

function parsePriceToNumber(formattedPrice: string): number {
  if (!formattedPrice) return 0;
  const cleaned = formattedPrice.replace(/[^\d]/g, "");
  return cleaned ? parseInt(cleaned, 10) : 0;
}

function formatPriceVND(amount: number): string {
  return amount.toLocaleString("vi-VN") + "₫";
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Load cart from localStorage on client mount
  React.useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      console.warn("Failed to read cart from localStorage:", e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save cart to localStorage whenever items change
  React.useEffect(() => {
    if (!isHydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.warn("Failed to save cart to localStorage:", e);
    }
  }, [items, isHydrated]);

  const openBag = React.useCallback(() => setIsOpen(true), []);
  const closeBag = React.useCallback(() => setIsOpen(false), []);
  const toggleBag = React.useCallback(() => setIsOpen((prev) => !prev), []);

  const addItem = React.useCallback(
    (newItem: Omit<CartItem, "id" | "quantity"> & { id?: string; quantity?: number }) => {
      const variantKey = newItem.variant || "(Standard)";
      const computedId = newItem.id || `${newItem.productId}-${variantKey}`;
      const qtyToAdd = newItem.quantity && newItem.quantity > 0 ? newItem.quantity : 1;

      setItems((prevItems) => {
        const existingIndex = prevItems.findIndex((it) => it.id === computedId);
        if (existingIndex > -1) {
          const updated = [...prevItems];
          const existing = updated[existingIndex];
          updated[existingIndex] = {
            ...existing,
            quantity: existing.quantity + qtyToAdd,
          };
          return updated;
        }

        const numericPrice =
          typeof newItem.price === "number" && newItem.price > 0
            ? newItem.price
            : parsePriceToNumber(newItem.formattedPrice);

        const itemToAdd: CartItem = {
          id: computedId,
          productId: newItem.productId,
          slug: newItem.slug,
          title: newItem.title,
          subtitle: newItem.subtitle,
          image: newItem.image,
          price: numericPrice,
          formattedPrice: newItem.formattedPrice || formatPriceVND(numericPrice),
          variant: variantKey,
          quantity: qtyToAdd,
        };

        return [...prevItems, itemToAdd];
      });
    },
    []
  );

  const removeItem = React.useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((it) => it.id !== id));
  }, []);

  const updateQuantity = React.useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prevItems) => prevItems.filter((it) => it.id !== id));
      return;
    }
    setItems((prevItems) =>
      prevItems.map((it) => (it.id === id ? { ...it, quantity } : it))
    );
  }, []);

  const clearCart = React.useCallback(() => {
    setItems([]);
  }, []);

  const totalCount = React.useMemo(() => {
    return items.reduce((acc, it) => acc + (it.quantity || 1), 0);
  }, [items]);

  const totalPrice = React.useMemo(() => {
    return items.reduce((acc, it) => acc + (it.price || 0) * (it.quantity || 1), 0);
  }, [items]);

  const formattedTotal = React.useMemo(() => {
    return formatPriceVND(totalPrice);
  }, [totalPrice]);

  const value = React.useMemo(
    () => ({
      items,
      isOpen,
      totalCount,
      totalPrice,
      formattedTotal,
      openBag,
      closeBag,
      toggleBag,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [
      items,
      isOpen,
      totalCount,
      totalPrice,
      formattedTotal,
      openBag,
      closeBag,
      toggleBag,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextType {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

