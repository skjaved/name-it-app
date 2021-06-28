import React from 'react';
import './NameCard.css';

const nameChipUrl =
  'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({ suggestedName }) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={`${nameChipUrl}${suggestedName}`}
      className="card-link"
    >
      <div className="result-name-card">
        <p className="result-name">{suggestedName}</p>
      </div>
    </a>
  );
};

export default NameCard;
