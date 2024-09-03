import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [photos, setPhotos] = useState(null);


    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }

    function handlePhotosResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function search(event) {
        event.preventDefault();

        // documentation: https://www.shecodes.io/learn/apis/dictionary
        const apiKey = "otb198570afbd1823c32f524f4467bab";
        const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

        axios.get(apiUrl).then(handleResponse);

        // documentation: https://www.shecodes.io/learn/apis/images
        const photosApiKey = "otb198570afbd1823c32f524f4467bab";

        const photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photosApiKey}`;

        axios.get(photosApiUrl).then(handlePhotosResponse);
    }

    function handleKeywordChange(event) {
        // stores the inputted value in the state
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <section>
                <h1 className="text-center">search for a word</h1>
                <form onSubmit={search}>
                    <input type="search" onChange={handleKeywordChange}/>
                </form>
                <div className="hint">
                    suggested words: sunset, wine, mundane...
                </div>
            </section>
                <Results results={results} />
                <Photos photos={photos} />
        </div>
    );
}