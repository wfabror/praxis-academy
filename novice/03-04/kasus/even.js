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

    let updateState = function() {
        cells.forEach(function(cell) {
            let row = Math.floor(cell.data('row'));
            let col = Math.floor(cell.data('col'));
            let sum = row + col;
            let isEven = sum % 2 == 0;
            if (isEven === even) {
                cell.addClass('active');
            } else {
                cell.removeClass('active');
            }

        });
        even = !even;
    }

    setInterval(updateState, 500);

    let $root = $('.container');
    createGrid($root)
});