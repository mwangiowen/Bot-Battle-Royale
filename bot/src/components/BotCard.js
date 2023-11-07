import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBolt, faShield } from '@fortawesome/free-solid-svg-icons';

function BotCard({ bot, selectedBots, handleCardClick, handleDischargeBot }) {
  return (
    <div
      className={`card ${selectedBots.some((b) => b.id === bot.id) ? 'selected' : ''}`}
      onClick={() => handleCardClick(bot)}
    >
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>
        <FontAwesomeIcon icon={faHeart} /> Health: {bot.health}
      </p>
      <p>
        <FontAwesomeIcon icon={faBolt} /> Damage: {bot.damage}
      </p>
      <p>
        <FontAwesomeIcon icon={faShield} /> Armor: {bot.armor}
      </p>
      {selectedBots.some((b) => b.id === bot.id) && (
        <button onClick={() => handleDischargeBot(bot)} className="discharge-button">X</button>
      )}
    </div>
  );
}

export default BotCard;
