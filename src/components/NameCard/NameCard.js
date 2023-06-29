import React from 'react'
import './NameCard.css'

const nameCheapUrl = "https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqa2lkNEttcVlIOUNCUHpRYUJWcW1aRkZ1VHkyUXxBQ3Jtc0ttM3V5VWxic3RKRmFhNjA4b1BrZGJ6NW5sYXVnd0IyWlNUbk94NGZ6bnZrWEFFVFFQclBQdDdDQ1ZReVQyUW1LeW1IejFKeHVyTmJXazc2RWZHZjJTQUZfOXVYZVdXajdhdG5EdHdGN1VteW5uT3J3MA&q=https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults%2F%3Fdomain%3D%27%3B";

const NameCard= ({suggestedName}) =>{
    return (
       <a 
       target="_blank"
            href={`${nameCheapUrl}${suggestedName}`}
            rel="noreferrer"
            className="result-name-link"
        >
            <div className="result-name-card">
                <p className="result-name">{suggestedName}</p>
            </div>
       </a>
    );
};

export default NameCard;