"use client";
import { SearchBar } from "@/components/SearchBar";
import { data } from "@/data/data";
import { useState } from "react";
import { Trending } from "../components/Trending";
import { nanoid } from "nanoid";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";

export default function Home() {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState(data);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = e => {
        e.preventDefault(); // Prevent the form from submitting
        const searchTerm = query.trim();

        if (searchTerm) {
            // Perform a case-insensitive search on titles and update searchResults
            const filteredResults = data.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
            setSearchResults(filteredResults);
            setIsSearching(true);
        } else {
            setSearchResults(data);
            setIsSearching(false);
        }
    };

    return (
        <div className="px-[16px]">
            <SearchBar
                query={query}
                setQuery={setQuery}
                handleSearch={handleSearch}
                placeholder="Search for movies or TV series"
            />

            {isSearching ? null : <Trending />}
            <Header
                isSearching={isSearching}
                searchResults={searchResults}
                query={query}
                header={"Recommended for you"}
            />
            <div className="relative grid justify-between gap-4 grid-cols-2 ">
                {searchResults.map(item => (
                    <Card item={item} key={nanoid()} />
                ))}
            </div>
        </div>
    );
}
