import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://www.shecodes.io/learn/apis/dictionary
        let apiKey = "otb198570afbd1823c32f524f4467bab";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        // stores the inputted value in the state
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
            <Results results={results} />
        </div>
    );
}