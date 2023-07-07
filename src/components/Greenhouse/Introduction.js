import React from 'react';

const Introduction = () => {
  const title = "Kinship";
  const subtitle = "Welcome! We’re the recruiting home of the Kinship division of Mars Petcare. We also recruit for at-home diagnostics brands Wisdom and Whistle (part of the Science & Diagnostics division). Both Kinship and Science & Diagnostics are divisions of Mars Petcare—and are dedicated to one purpose: creating A BETTER WORLD FOR PETS™. Through comprehensive veterinary care, nutrition, breakthrough programs in diagnostics, wearable health monitoring, DNA testing and pet welfare, our 100,000 Petcare Associates help pets in more than 130 countries. Interested? Learn more about our open roles below.";
  const leftGrid = "OUR FAMILY OF BRANDS\n\nThe Kin, The Wildest, PetExec, VetInsight, Adopt a Pet\nPart of Mars Petcare’s Kinship Division";
  const rightGrid = "Whistle Labs and Wisdom Panel\nPart of Mars Petcare’s Science & Diagnostics Division";

  return (
    <div>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <div className="grid">
        <div className="left">{leftGrid.split('\n').map((item, i) => <p key={i}>{item}</p>)}</div>
        <div className="right">{rightGrid.split('\n').map((item, i) => <p key={i}>{item}</p>)}</div>
      </div>
    </div>
  );
};

export default Introduction;

