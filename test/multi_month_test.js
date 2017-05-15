import React from 'react'
import Calendar from '../src/calendar'
import Month from '../src/month'
import YearDropdown from '../src/year_dropdown'
import { shallow } from 'enzyme'

describe('Multi month calendar', function () {
  var dateFormat = 'MMMM YYYY'

  function getCalendar (extraProps) {
    return shallow(
            <Calendar
                dateFormat={dateFormat}
                onSelect={() => {}}
                onClickOutside={() => {}}
                hideCalendar={() => {}}
                dropdownMode="scroll"
                {...extraProps}/>
      )
  }

  xit('should render multiple months if the months property is present', () => {
    var calendar = getCalendar({monthsShown: 2})
    var months = calendar.find(Month)
    expect(months).to.have.length(2)
  })

  xit('should render dropdown only on first month', () => {
    var calendar = getCalendar({monthsShown: 2, showYearDropdown: true})
    var datepickers = calendar.find(YearDropdown)
    expect(datepickers).to.have.length(1)
  })
})

