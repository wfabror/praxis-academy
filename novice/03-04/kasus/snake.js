$(function() {
    let rows = 10;
    let cols = 10;
    let cells = [];
    let even = true;
    let snake = [];
    let iniatialVal = [0, 1];
    let snakeVal = [];

    function createGrid(root) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < cols; j++) {
                let cell = $('<div>').addClass('cell');
                cell.attr('data-row', i).attr('data-col', j);
                cells.push(cell);
                root.append(cell);
            }
        }
    };

    function resetGrid() {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < cols; j++) {
                getCell(i, j).removeClass('active').removeClass('active-head');
            }
        }
    }

    function getCell(row, col) {
        let selector = '[data-row=' + row + '][data-col=' + col + ']';
        return $(selector);
    }

    function createSnake() {
        let row = Math.floor(Math.random() * rows);
        let col = Math.floor(Math.random() * cols);

        let head = getCell(row, col).addClass('active-head');
        snake.push(head);
        snakeVal.push(iniatialVal);
        createTail(head, [0, -1], 4);
    }

    function createTail(head, dir, numCells) {
        for (let i = 1; i <= numCells; i++) {
            let dx = i * dir[0];
            let dy = i * dir[1];
            let tailRow = head.data('row') + dx;
            let tailCol = head.data('col') + dy;
            tailRow = (tailRow + rows) % rows;
            tailCol = (tailCol + cols) % cols;
            let tail = getCell(tailRow, tailCol).addClass('active');
            snake.push(tail);
            snakeVal.push(iniatialVal);
        }
    }

    function move() {
        resetGrid();
        let tempSnake = [];
        let tempSnakeVal = [];
        tempSnakeVal.push(iniatialVal);
        for (let i = 0; i < snake.length; i++) {
            if (i !== 0) {
                let prevIndex = i - 1;
                tempSnakeVal.push(snakeVal[prevIndex]);
            }
        }
        snakeVal = tempSnakeVal;
        for (let i = 0; i < snake.length; i++) {
            let dx = snakeVal[i][0];
            let dy = snakeVal[i][1];
            let cell = snake[i];
            let tailRow = cell.data('row') + dx;
            let tailCol = cell.data('col') + dy;
            tailRow = (tailRow + rows) % rows;
            tailCol = (tailCol + cols) % cols;
            let snakeClass = i === 0 ? 'active-head' : 'active';
            tempSnake.push(getCell(tailRow, tailCol).addClass(snakeClass));
        }
        snake = tempSnake;
    }

    let $root = $('.container');
    createGrid($root);
    createSnake();
    $('body').on('keypress', function(e) {
        switch (e.keyCode) {
            case 119:
                if (iniatialVal[0] === 1 && iniatialVal[1] === 0) return;
                return iniatialVal = [-1, 0];
            case 115:
                if (iniatialVal[0] === -1 && iniatialVal[1] === 0) return;
                return iniatialVal = [1, 0];
            case 97:
                if (iniatialVal[0] === 0 && iniatialVal[1] === 1) return;
                return iniatialVal = [0, -1];
            case 100:
                if (iniatialVal[0] === 0 && iniatialVal[1] === -1) return;
                return iniatialVal = [0, 1];
            default:
                return;
        }
    });
    setInterval(move, 250);
});