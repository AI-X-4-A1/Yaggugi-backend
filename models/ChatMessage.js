// models/ChatMessage.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const ChatMessage = sequelize.define('ChatMessage', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true, // 이 옵션이 있으면 createdAt과 updatedAt이 자동으로 추가됩니다.
});

module.exports = ChatMessage;
