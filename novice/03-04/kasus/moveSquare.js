$(function() {
    let row = 10;
    let cols = 10;
    let cells = [];
    let even = true;

    function createGrid(root) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < cols; j++) {
                let cell = $('<div>').addClass('cell');
                cell.attr('data-row', 1).attr('data-col', 1);
                cells.push(cell);
                root.append(cell);
            }
        }
    };

    function moveDown() {
        let active = $('.active');
        active.removeClass('active');
        let row = active.data('row');
        let col = active.data('col');
        let nextRow = (row + 1) % row;
        let nextCellSelector = '[data-row =' + nextRow + ']' + '[data-col=' + col + ']';
        $(nextCellSelector).addClass('active');
    }

    function moveUp() {
        let active = $('.active');
        active.removeClass('active');
        let row = active.data('row');
        let col = active.data('col');
        let nextRow = (row - 1);
        nextRow = nextRow < 0 ? nextRow + row : nextRow;
        let nextCellSelector = '[data-row=' + nextRow + ']' + '[data-col=' + col + ']';
        $(nextCellSelector).addClass('active');
    }

    function moveRight() {
        let active = $('.active');
        active.removeClass('active');
        let row = active.data('row');
        let col = active.data('col');
        let nextCol = (col + 1) % row;
        let nextCellSelector = '[data-row=' + row + ']' + '[data-col=' + nextCol + ']';
        $(nextCellSelector).addClass('active');
    }

    function moveLeft() {
        let active = $('active');
        active.removeClass('active');
        let row = active.data('row');
        let col = active.data('col');
        let nextCol = (col - 1);
        nextCol = nextCol < 0 ? nextCol + col : nextCol;
        let nextCellSelector = '[data-row=' + row + ']' + '[data-col=' + nextCol + ']';
        $(nextCellSelector).addClass('active');

    }
    var moves = {
        '97': moveLeft,
        '115': moveDown,
        '119': moveUp,
        '100': moveRight
    }

    var $root = $('.container');
    createGrid($root);
    $('.cell').on('click', function(e) {
        $('.active').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('body').on('keypress', function(e) {
        moves[e.keyCode]();
    })
});