
# calendar-select

  Select plugin for JayceTDE/calendar

## Installation

    $ component install JayceTDE/calendar-select

## Example

```js

var Calendar = require('calendar')
  , calendarSelect = require('calendar-select')
  , cal = new Calendar()
;

// Add select functionality to calendar
calendarSelect.plugin(cal);

// Listen for select events
cal.on('select', function (date) {
    console.log('Selected: ' + date.toString());
});

// Manually select today's date
cal.select(new Date());

```

Clicking on a day will select that date

## License

  MIT
