$(function() {
    let row = 10;
    let cols = 10;
    let cells = [];

    function createGrid(root) {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < cols; j++) {
                let cell = $('<div>').addClass('cell');
                cells.push(cell);
                root.append(cell);
            }
        }
    };

    let updateState = function() {
        cells.forEach(function(cell) {
            let randomNum = Math.random() * 2;
            if (randomNum > 1) {
                cell.addClass('active');
            } else {
                cell.removeClass('active');
            }

        });
    }

    setInterval(updateState, 500);

    let $root = $('.container');
    createGrid($root)
});