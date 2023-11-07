import React from 'react';

function BotCard({ bot, selectedBots, handleCardClick }) {
  const isSelected = selectedBots.some((b) => b.id === bot.id);

  const handleClick = () => {
    handleCardClick(bot, isSelected);
  };

  return (
    <div
      className={`card ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <h2>{bot.name}</h2>
      <img src={bot.avatar_url} alt={bot.name} />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
    </div>
  );
}

export default BotCard;
