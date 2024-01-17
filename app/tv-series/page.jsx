"use client";
import { SearchBar } from "@/components/SearchBar";
import { data } from "@/data/data";
import { useState } from "react";
import { nanoid } from "nanoid";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";

export default function TVSeries() {
    const filteredTVSeries = data.filter(item => item.category === "TV Series");

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState(filteredTVSeries);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = e => {
        e.preventDefault(); // Prevent the form from submitting
        const searchTerm = query.trim();

        if (searchTerm) {
            // Perform a case-insensitive search on titles and update searchResults
            const filteredResults = filteredTVSeries.filter(item =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
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
                placeholder="Search for TV series"
            />
            <Header isSearching={isSearching} searchResults={searchResults} query={query} header={"TV-series"} />
            <div className="grid gap-4 grid-cols-2">
                {searchResults.map(item => (
                    <Card item={item} key={nanoid()} />
                ))}
            </div>
        </div>
    );
}
