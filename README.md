const regex4=/^(?:[a-zA-Z]{1,20}(?:[0-9]{1,10})?(?:[-._][a-z0-9]{1,20})?(?:[_-][a-z0-9]{1,15})?@[a-z]{1,10}[.][a-z]{2,6}(?:[.][a-z]{2,4})?)(?:;(?:[a-zA-Z]{1,20}(?:[0-9]{1,10})?(?:[-._][a-z0-9]{1,20})?(?:[_-][a-z0-9]{1,15})?@[a-z]{1,10}[.][a-z]{2,6}(?:[.][a-z]{2,4})?))*$/

import React, { useState } from 'react';
import { Subheading, Icon, Chip, DateRangePicker, Divider } from '@innovaccer/design-system';

const CustomPopover = () => {
  const { startDate: initialStartDate, endDate: initialEndDate } = DateRangePicker.utils.getCurrentWeek();

  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);
  const [selected, setSelected] = useState('currWeek');
  const [monthNav, setMonthNav] = useState(DateRangePicker.utils.getCurrentMonth());

  const setDate = (date) => {
    const d = new Date();
    return new Date(d.setDate(date));
  };

  const onReset = () => {
    setStartDate(null);
    setEndDate(null);
    setSelected('');
    setMonthNav(DateRangePicker.utils.getCurrentMonth());
  };

  const renderChildren = () => {
    return (
      <div className="pt-6 px-5">
        <div className="d-flex align-items-center justify-content-between">
          <Subheading size="s" className="py-3" appearance="subtle">
            Range
          </Subheading>
          <Icon name="refresh" onClick={onReset} />
        </div>
        <div className="pt-5">
          <Chip
            label="This week"
            clearButton={false}
            type="selection"
            className="mb-5 d-block"
            selected={selected === 'currWeek'}
            name="rangePicker"
            onClick={() => {
              setSelected('currWeek');
              setMonthNav(DateRangePicker.utils.getCurrentMonth());
              const { startDate, endDate } = DateRangePicker.utils.getCurrentWeek();
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
          <Chip
            label="Last week"
            clearButton={false}
            type="selection"
            className="mb-5 d-block"
            selected={selected === 'prevWeek'}
            name="chip"
            onClick={() => {
              setSelected('prevWeek');
              setMonthNav(DateRangePicker.utils.getCurrentMonth());
              const { startDate, endDate } = DateRangePicker.utils.getPreviousWeek();
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
          <Chip
            label="Last month"
            clearButton={false}
            type="selection"
            className="mb-5  d-block"
            selected={selected === 'prevMonth'}
            name="rangePicker"
            onClick={() => {
              setSelected('prevMonth');
              setMonthNav(DateRangePicker.utils.getCurrentMonth() - 1);
              const { startDate, endDate } = DateRangePicker.utils.getPreviousMonth();
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
          <Chip
            label="Last 90 days"
            clearButton={false}
            type="selection"
            className="mb-5  d-block"
            selected={selected === 'prev90Days'}
            name="rangePicker"
            onClick={() => {
              setSelected('prev90Days');
              setMonthNav(DateRangePicker.utils.getCurrentMonth());
              const { startDate, endDate } = DateRangePicker.utils.getPrevious90Days();
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
          <Chip
            label="Custom"
            clearButton={false}
            type="selection"
            className="mb-5  d-block"
            selected={selected === 'custom'}
            name="rangePicker"
            onClick={() => {
              setSelected('custom');
              setMonthNav(DateRangePicker.utils.getCurrentMonth());
              const { startDate, endDate } = DateRangePicker.utils.getCustomDates();
              setStartDate(startDate);
              setEndDate(endDate);
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-25">
      <DateRangePicker
        withInput={true}
        singleInput={true}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate, eDate, sValue, eValue) => {
          console.log(sDate, eDate);
        }}
        monthsInView={1}
        monthNav={monthNav}
      >
        {renderChildren()}
        <Divider vertical={true} />
      </DateRangePicker>
    </div>
  );
};

export default CustomPopover;
