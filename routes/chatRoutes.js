// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const authenticateJWT = require('../middlewares/authenticateJWT');

router.post('/saveMessage', authenticateJWT, chatController.saveMessage);

// 새로운 라우트 추가: 사용자 대화 내역 가져오기
router.get('/getUserMessages', authenticateJWT, chatController.getUserMessages);

module.exports = router;
