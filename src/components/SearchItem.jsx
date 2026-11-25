const SearchItem = ({ search, setSearch }) => {
    return (
        <form className='flex items-center justify-center bg-gray-200 p-5 pt-1 ' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search' className='absolute hidden'>Search</label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='border border-gray-300 rounded-md p-2 w-96'
            />
        </form>
    )
}

export default SearchItem