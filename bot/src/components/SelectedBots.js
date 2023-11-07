import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBolt, faShield } from '@fortawesome/free-solid-svg-icons';

function SelectedBots({ selectedBots, handleDischargeBot, handleDisplayedCardClick }) {
  return (
    <div className="selected-cards-container">
      <div className="selected-cards" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px' }}>
        {selectedBots.length > 0 ? (
          selectedBots.map((bot) => (
            <div key={bot.id} className="bot-details" style={{ margin: '20px' }}>
              <h2>{bot.name}</h2>
              <img
                src={bot.avatar_url}
                alt={bot.name}
                onClick={() => handleDisplayedCardClick(bot)} 
              />
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' }}>
                <p>
                  <FontAwesomeIcon icon={faHeart} /> Health: {bot.health}
                </p>
                <p>
                  <FontAwesomeIcon icon={faBolt} /> Damage: {bot.damage}
                </p>
                <p>
                  <FontAwesomeIcon icon={faShield} /> Armor: {bot.armor}
                </p>
              </div>
              <button onClick={() => handleDischargeBot(bot)} className="discharge-button">X</button>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}

export default SelectedBots;
