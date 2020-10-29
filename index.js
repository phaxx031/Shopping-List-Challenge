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
  $('ul').on('click', '.shopping-item-toggle', function() {
      let buttonClicked = $(this);
      buttonClicked.closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

  $('ul').on('click', '.shopping-item-delete', function() {
      let buttonClicked = $(this);
      buttonClicked.closest('li').remove('li');
    });
});

//how to write event delegation for buttons above