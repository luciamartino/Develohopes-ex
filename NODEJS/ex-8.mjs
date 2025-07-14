// Create agetResults function that uses async and await. Inside of the function, call the luckyDraw function for each of the players:

// Tina, Jorge, Julien

// Log out the resolved value for each promise and handle any promise rejections.

function luckyDraw(player) {
    return new Promise((resolve, reject) => {
        const win = Boolean(Math.round(Math.random()));

        process.nextTick(() => {
            if (win) {
                resolve(`${player} won a prize in the draw!`);
            } else {
                reject(new Error(`${player} lost the draw.`));
            }
        });
    });
}

// async function agetResults() {
//     try {
//         const data1 = await luckyDraw("Tina");
//         console.log(data1);
//     } catch (error) {
//         console.error(error);
//     }
//     try {
//         const data2 = await luckyDraw("Jorge");
//         console.log(data2);
//     } catch (error) {
//         console.error(error);
//     }
//     try {
//         const data3 = await luckyDraw("Julien");
//         console.log(data3);
//     } catch (error) {
//         console.error(error);
//     }
// }

// agetResults();

function agetResult() {
    const players = ["Tina", "Jorge", "Julien"];
    players.forEach(async (player) => {
        try {
            const data = await luckyDraw(player);
            console.log(data);
        } catch (error) {
            console.error(error.message);
        }
    });
}

agetResult();
