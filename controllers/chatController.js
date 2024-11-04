// controllers/chatController.js
const ChatMessage = require('../models/ChatMessage');

const saveMessage = async (req, res) => {
  try {
    const { sender, text, userId } = req.body;
    const message = await ChatMessage.create({ userId, sender, text });
    res.status(201).json(message);
  } catch (error) {
    console.error("메시지 저장 중 오류:", error);
    res.status(500).json({ message: "메시지 저장 실패" });
  }
};

// 새로운 함수 추가: 사용자 대화 내역 불러오기
const getUserMessages = async (req, res) => {
  try {
    const userId = req.user.id; // JWT에서 userId 추출
    const messages = await ChatMessage.findAll({
      where: { userId }, // 사용자 ID로 필터링
      order: [['createdAt', 'ASC']], // 오래된 메시지부터 최신 메시지 순으로 정렬
    });
    res.status(200).json(messages);
  } catch (error) {
    console.error("메시지 불러오기 중 오류:", error);
    res.status(500).json({ message: "메시지 불러오기 실패" });
  }
};


module.exports = {
  saveMessage,
  getUserMessages,
};

