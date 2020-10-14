/**
 *
 * Calendar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillCalendar,
  // eslint-disable-next-line import/no-unresolved
} from 'react-icons/Ai';
import DataCard from '../DataCard';
import CalendarData from '../../data/calendar.json';
import styles from './styles.css';

function Calendar({ search }) {
  const calendarItems = CalendarData.calendar
    .filter(data => {
      if (search === '') {
        return data;
      }
      if (data.matching_terms.includes(search.toLowerCase())) {
        return data;
      }
      return null;
    })
    .map((data, i) => (
      <DataCard
        key={`calendar${i}`}
        type="calendar"
        calendar={data}
        Logo={<AiFillCalendar className={styles.emailLogo} />}
      />
    ));
  return <span>{calendarItems}</span>;
}

Calendar.propTypes = {
  search: PropTypes.string,
};

export default Calendar;
