const fs = require('fs');
const path = require('path');

// Log file will be at: <your_project_root>/logs/game.log
const logDir = path.join(__dirname, '../logs');
const logFile = path.join(logDir, 'game.log');

// Ensure the log directory exists
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
}

function logGameResult(player1, steps1, win1, player2, steps2, win2, date) {
    const logEntry = 
`User1: ${player1} Steps: ${steps1} Win: ${win1}
User2: ${player2} Steps: ${steps2} Win: ${win2}
Date: ${date}
-----------------------------
`;
    fs.appendFileSync(logFile, logEntry, { encoding: 'utf8' });
}

module.exports = logGameResult;