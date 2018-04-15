
function makeGrid() {
    event.preventDefault();

    let row= $("#inputHeight");
    let column = $('#inputWeight'); 
    let table = $('#pixelCanvas');
    
    if ($("tbody").length) $("tbody").remove();

    let tbody = document.createElement("tbody");

    for (let indexRow = 0; indexRow < row.val(); indexRow++) {

        let newTr = document.createElement('tr');
        
        for (let indexColumn = 0; indexColumn < column.val(); indexColumn++) {
            let newtd = document.createElement('td');        
            newTr.appendChild(newtd);
        }

        tbody.appendChild(newTr);
    }

    table.append(tbody);
    
}


$(function() {
    $("#sizePicker").submit(makeGrid)

});


$('body').on('click', 'td', function() {
    let color =  $('#colorPicker').val();
    let colorTd =  $(this).css('background-color');

    $(this).css('background-color', color); 
    
});
