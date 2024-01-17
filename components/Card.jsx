import Image from "next/image";
import useFromStore from "@/app/hooks/useFromStore";
import { useCartStore } from "../app/store";
import { useEffect, useState } from "react";
export const Card = ({ item }) => {
    const addToBookmarked = useCartStore(state => state.addToBookmarked);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const cart = useCartStore(state => state.cart);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const isInCart = cart.find(cartItem => cartItem.title === item.title);
    useEffect(() => {
        if (isInCart !== undefined) {
            setIsBookmarked(true);
        } else {
            setIsBookmarked(false);
        }
    }, [isInCart]);
    return (
        <div className="flex justify-center">
            <div className="relative">
                <Image
                    src={item.thumbnail?.regular?.small}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-[8px] w-[164px] h-[110px]"
                />
                <div
                    className="w-[30px] h-[30px] rounded-full absolute top-[8px] right-[20px] cursor-pointer"
                    onClick={() => {
                        isBookmarked ? removeFromCart(item) : addToBookmarked(item);
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <circle opacity="0.500647" cx="16" cy="16" r="16" fill="#10141E" />
                        <path
                            d="M20.7112 9.771L20.7215 9.77548L20.7319 9.77965C20.7992 9.80657 20.8386 9.84049 20.8705 9.88692C20.9032 9.93458 20.9167 9.97786 20.9167 10.0364V21.9636C20.9167 22.0221 20.9032 22.0654 20.8705 22.1131C20.8386 22.1595 20.7992 22.1934 20.7319 22.2203L20.7237 22.2236L20.7156 22.2271C20.7107 22.2292 20.6807 22.2407 20.6094 22.2407C20.5085 22.2407 20.4397 22.2142 20.3686 22.15L16.3572 18.2346L15.8333 17.7233L15.3095 18.2346L11.2975 22.1505C11.2129 22.2276 11.1421 22.25 11.0573 22.25C11.02 22.25 10.9882 22.2433 10.9555 22.229L10.9452 22.2245L10.9347 22.2203C10.8674 22.1934 10.8281 22.1595 10.7962 22.1131C10.7635 22.0654 10.75 22.0221 10.75 21.9636V10.0364C10.75 9.97786 10.7635 9.93458 10.7962 9.88692C10.8281 9.84049 10.8674 9.80657 10.9347 9.77965L10.9452 9.77548L10.9555 9.771C10.9882 9.75674 11.02 9.75 11.0573 9.75H20.6094C20.6466 9.75 20.6784 9.75674 20.7112 9.771Z"
                            stroke="white"
                            strokeWidth="1.5"
                            className={isBookmarked ? `fill-white` : `fill-none`}
                            fill=""
                        />
                    </svg>
                </div>
                <div className="flex items-center opacity-75 gap-2 text-[12px] mt-[8px]">
                    <p className="top-[10px]">{item.year}</p>
                    <div className="w-[3px] h-[3px] rounded-full border-2 border-[#FFF]"></div>
                    <div className="flex justify-center items-center gap-[4px]">
                        <Image
                            src="/icon-category-movie.svg"
                            alt="genre"
                            width={15}
                            height={15}
                            className="w-[15px] h-[15px]"
                        />
                        <p className="bottom-[10px]">{item.category}</p>
                    </div>
                    <div className="w-[3px] h-[3px] rounded-full border-2 border-[#FFF]"></div>
                    <p className="bottom-[10px]">{item.rating}</p>
                </div>
                <p className="text-[14px] font-medium">{item.title}</p>
            </div>
        </div>
    );
};
