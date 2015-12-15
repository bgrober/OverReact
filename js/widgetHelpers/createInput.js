//function called to create an input field in new boxes
var toPascal = require('./toPascal');

module.exports = function(context, func) {
  var errorMessage = 'Please only use alphanumeric characters, underscores, or spaces';

  //pattern property makes sure they can only use alphanumeric characters, underscores, or spaces
  var inputField = $(`<form><input
    required
    pattern="[a-zA-Z0-9_ ]+"
    placeholder="Component Name..."
    title="${errorMessage}"
    class="form-control">
    </input></form>`
  );
  inputField.appendTo(('#' + context));
  inputField.on('submit', function(e){
    e.preventDefault();
    //convert input to Pascal case
    $('#dup-warning').css('display', 'none')
    var output = toPascal($(e.target).find('input').val());
    $(e.target).find('input').val(output);
    func($(this));
  });

};
