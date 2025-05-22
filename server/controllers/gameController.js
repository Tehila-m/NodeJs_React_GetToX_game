const sendWinnerMail = require('../utils/mailer');
const logGameResult = require('../utils/logger');
// const finishGame = async (req, res) => {
//   const { player1, steps1, win1, player2, steps2, win2, date } = req.body;

//   // Determine winner
//   const winner = win1 ? player1 : player2;
//   const winnerSteps = win1 ? steps1 : steps2;

//   try {
//     // 1. Send email to manager
//     await sendWinnerMail(
//       process.env.MANAGER_EMAIL, // Manager's email from .env
//       winner,
//       winnerSteps,
//       player1,
//       steps1,
//       player2,
//       steps2,
//       date
//     );

//     // 2. Write to log
//     logGameResult(
//       player1, steps1, win1,
//       player2, steps2, win2,
//       date
//     );

//     res.status(200).json({ message: "Game result recorded, email sent, and log written." });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to record game result.", error: err.message });
//   }
// };

// module.exports = { finishGame };

const finishGame = async (req, res) => {
    const { player1, steps1, win1, player2, steps2, win2, date } = req.body;
    const winner = win1 ? player1 : player2;
    const winnerSteps = win1 ? steps1 : steps2;

    try {
        // Send the winner email
        await sendWinnerMail(
            process.env.MANAGER_EMAIL, // To: manager's email from your .env
            'Game Winner!',
            `<b>The winner is ${winner}. Steps: ${winnerSteps}</b>`
        );

        // ... (call logger here, etc.)
        logGameResult(
            player1, steps1, win1,
            player2, steps2, win2,
            date
        );


        res.status(200).json({ message: "Email sent!" });
    } catch (err) {
        console.error('Failed to send email:', err);
        res.status(500).json({ message: "Failed to send email.", error: err.message });
    }
};

module.exports = { finishGame };