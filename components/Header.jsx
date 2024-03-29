export const Header = ({ isSearching, searchResults, query, header }) => {
    return (
        <div>
            {isSearching ? (
                <h2 className="text-[20px] mb-[24px]">
                    Found {searchResults.length} results for "{query}"
                </h2>
            ) : null}
            {isSearching ? null : <h2 className="my-[24px] text-[20px]">{header}</h2>}
        </div>
    );
};
