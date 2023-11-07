import React from 'react';

function BotCard({ bot, selectedBots, handleCardClick }) {
  const isSelected = selectedBots.some((b) => b.id === bot.id);

  const handleClick = () => {
    // Toggle the selection of the card
    if (isSelected) {
      // If the bot is already selected, deselect it
      handleCardClick(bot, false);
    } else {
      // If the bot is not selected, select it
      handleCardClick(bot, true);
    }
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
