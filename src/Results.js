import React from 'react';
import Meaning from "./Meaning";
import './Results.css'

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <section>
                    <h2>{props.results.word}</h2>
                    {props.results.phonetic}
                </section>

                <section>
                    {/* Access only the first meaning */}
                    <Meaning meaning={props.results.meanings[0]} />
                </section>
            </div>
        );
    } else {
        return null;
    }
}
