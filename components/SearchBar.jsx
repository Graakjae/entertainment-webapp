"use client";
import { useState } from "react";
import Image from "next/image";
import { data } from "@/data/data";

export const SearchBar = ({ handleSearch, query, setQuery, placeholder }) => {
    // const [query, setQuery] = useState("");
    // const [searchResults, setSearchResults] = useState(data);
    // const [isSearching, setIsSearching] = useState(false);

    // const handleSearch = e => {
    //     e.preventDefault(); // Prevent the form from submitting
    //     const searchTerm = query.trim();

    //     if (searchTerm) {
    //         // Perform a case-insensitive search on titles and update searchResults
    //         const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
    //         setSearchResults(filteredResults);
    //         setIsSearching(true);
    //         console.log(filteredResults);
    //     } else {
    //         setSearchResults(data);
    //         setIsSearching(false);
    //         console.log("false");
    //     }
    // };

    return (
        <form onSubmit={handleSearch} className="flex items-center my-[24px]">
            <Image src="/icon-search.svg" alt="Search" width={24} height={24} className="h-[24px] w-[24px]" />
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="pl-[16px] bg-transparent w-full border-none outline-none text-[16px]"
            />
        </form>
    );
};
