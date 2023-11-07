import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faBolt, faShield } from '@fortawesome/free-solid-svg-icons';
import SelectedBots from './SelectedBots';
import BotCard from './BotCard';

function BotsImage() {
  const [botsData, setBotsData] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then((data) => {
        setBotsData(data);
      });
  }, []);

  const handleCardClick = (bot) => {
    if (!selectedBots.some((b) => b.id === bot.id)) {
      // If the bot is not selected, add it
      setSelectedBots([...selectedBots, bot]);
    }
  };

  const handleDischargeBot = (bot) => {
    // Remove the bot from the backend and frontend
    fetch(`http://localhost:8001/bots/${bot.id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status === 200) {
          // Remove the bot from the botsData array
          setBotsData(botsData.filter((b) => b.id !== bot.id));

          // Remove the bot from the selectedBots array
          setSelectedBots(selectedBots.filter((b) => b.id !== bot.id));
        } else {
          console.error('Failed to discharge the bot');
        }
      });
  };

  return (
    <div>
      <SelectedBots selectedBots={selectedBots} handleDischargeBot={handleDischargeBot} />
      <div className="card-container">
        {botsData.map((bot) => (
          <BotCard key={bot.id} bot={bot} selectedBots={selectedBots} handleCardClick={handleCardClick} handleDischargeBot={handleDischargeBot} />
        ))}
      </div>
    </div>
  );
}

export default BotsImage;
