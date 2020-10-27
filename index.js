$('#js-shopping-list-form').submit(function(event) {
    let item,
        stringToBecomeHtml;
    
    event.preventDefault();
    item = $('#shopping-list-entry').val();

    stringToBecomeHtml = `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`

    $('.shopping-list').append(stringToBecomeHtml);
});

$(document).ready(function() {

  $('#shopping-item-toggle').on('click', function() {
    $('#shopping-item').toggleClass(shopping-item__checked, function() {

    });
  });

});

//what i did above was basically if i click on the check button, it should toggle the class of crossing the name (shopping item checked) 
//to current span class which is where the stuff like apple, oranges, etc. are, not sure how to do this though...

$(document).ready(function() {

  $('#shopping-item-delete').on('click', function() {
    $('ul').children().remove('selected');
  });

});

// putting delete instead of toggle breaks the very first jquery that make the add item button work for whatever reason...
// my thinking is target the delete button and when we click it, it triggers an event where we delete the current li although
// i am not totally sure how to target the current li... maybe use the this keyword - claudio

// last assignment below is making sure enter/return works so we dont have to always click add item

