var dateAttr = require('calendar').dateAttr
  , delegate = require('delegate')
  , classes = require('classes')
;

function select(date) {
    var cal = this
      , selected = cal._body.querySelector('.selected')
      , el = cal._body.querySelector('td[data-date="' + dateAttr(date) + '"]')
    ;
    
    // Just stop... You're selected what is already selected
    if (selected === el) return;
    
    selected && classes(selected).remove('selected');
    
    cal._selected = date;
    
    el && classes(el).add('selected');
    
    cal.emit('select', date);
}

exports.plugin = function (cal) {
    
    cal.select = select;
    
    delegate.bind(cal._body, 'td', 'click', function (e) {
        
        var date = new Date(e.target.getAttribute('data-date'));
        
        if (date.getMonth() !== cal._date.getMonth()) {
            cal.setMonth(date.getMonth());
        }
        
        cal.select(date);
        
    });
    
    cal.on('render', function (date) {
        if (cal._selected && date.getFullYear() === cal._selected.getFullYear() && date.getMonth() === cal._selected.getMonth()) {
            cal.select(cal._selected);
        }
    });
    
};