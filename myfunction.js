function createBoard() {
    for (let j = 0; j < 400; j = j + 50) {

        for (let i = 0; i < 400; i = i + 50) {
            board.push(createSprite(i + 25, j + 25, 50, 50));
            if (j % 100 === 0) {
                if (i % 100 === 0) {
                    board[board.length - 1].shapeColor = "brown"
                } else {
                    board[board.length - 1].shapeColor = "white"
                }
            } else {
                if (i % 100 === 0) {
                    board[board.length - 1].shapeColor = "white"
                } else {
                    board[board.length - 1].shapeColor = "brown"
                }
            }
        }
    }
}