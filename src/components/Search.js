import React, {useState} from "react";

const Search = ({fetchWeatherByCity, setCity}) => {
    const [input, setInput] = useState('');

    const handleSearch = () => {
        setCity(input);
        fetchWeatherByCity(input);
    };


    return (
        <div className="search">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter City..."
            />

            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;