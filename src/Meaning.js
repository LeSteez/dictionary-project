import React from 'react';
import './Meaning.css'
import Synonyms from './Synonyms';


export default function Meaning(props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>

            <div className="Definition">
                {props.meaning.definition}
            </div>
            <div className="Example">
                {props.meaning.example}
            </div>

            <Synonyms synonyms={props.meaning.synonyms} />
        </div>
    );
}
