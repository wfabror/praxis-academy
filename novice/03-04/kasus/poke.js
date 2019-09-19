$(function() {
    // let row = 10;
    // let cols = 10;
    // let cells = [];

    function buildGrid(root) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let cell = $('<div>').addClass('cell');
                cell.attr('data-row', i).attr('data-col', j);
                // cells.push(cell);
                root.append(cell);
            }
        }
    };

    function addListeners() {
        $('.cell').on('click', function(event) {
            let cell = $(event.currentTarget);
            let id = cell.data('row') + "" + cell.data('col');
            let url = 'https://pokeapi.co/api/v2/pokemon/' + id + '/';
            let interval = setInterval(function() {
                cell.toggleClass('active');
            }, 300);
            $.ajax({
                url: url,
                method: 'get',
                success: function(response) {
                    clearInterval(interval);
                    cell.addClass('active');
                    let imageUrl = response.sprites.front_default;
                    cell.css('background-image', 'url(' + imageUrl + ')');
                }
            })
        })
    }
    let container = $('.container');
    buildGrid(container);
    addListeners();


});