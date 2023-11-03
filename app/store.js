import { create } from "zustand";
import { persist } from "zustand/middleware";
import { data } from "@/data/data";

const INITIAL_STATE = {
    cart: []
};

export const useCartStore = create(
    persist(
        (set, get) => ({
            cart: INITIAL_STATE.cart,

            addToBookmarked: (item, count) => {
                const cart = get().cart;
                const cartItem = cart.find(movie => movie.title === item.title);
                console.log("cartItem", cartItem);
                if (cartItem) {
                    const updatedCart = cart.map(movie =>
                        movie.title === item.title ? { ...movie, quantity: movie.quantity + count } : movie
                    );
                    set(state => ({
                        cart: updatedCart
                    }));
                    console.log("updatedCart", updatedCart);
                    console.log(cart);
                } else {
                    const updatedCart = [...cart, { ...item, quantity: count }];

                    set(state => ({
                        cart: updatedCart
                    }));
                }
            },
            removeFromCart: item => {
                set(state => ({
                    cart: state.cart.filter(movie => movie.title != item.title)
                }));
            }
        }),
        {
            name: "cart-storage"
        }
    )
);

const store = set => ({
    succes: false,
    setSucces: succes => set(() => ({ succes: succes }))
});

export const useStore = create(store);
