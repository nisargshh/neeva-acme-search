/**
 *
 * DataCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import styled from 'styled-components';
import { Card } from 'react-bootstrap';
// eslint-disable-next-line import/no-unresolved
import styles from './styles.css';
import Tag from '../Tag';

export function TweetDataCard({ tweet, Logo }) {
  const momentDate = moment(tweet.timestamp, 'YYYY-MM-DD');
  const relativeDate = momentDate.fromNow();
  return (
    <Card className={styles.cardStyle}>
      <Card.Header>
        {Logo}
        {tweet.user}
      </Card.Header>
      <Card.Body>
        <Card.Text>{tweet.message}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {tweet.matching_terms.map((el, i) => (
          <Tag key={`tweettag${i}`} name={el} className={styles.tags} />
        ))}
        <div className={styles.timestamp}>{relativeDate}</div>
      </Card.Footer>
    </Card>
  );
}

TweetDataCard.propTypes = {
  tweet: PropTypes.object,
  Logo: PropTypes.element,
};

export function CalendarDataCard({ calendar, Logo }) {
  const momentDate = moment(calendar.date, 'YYYY-MM-DD hh:mm:ss', true);
  const relativeDate = momentDate.fromNow();
  return (
    <Card className={styles.cardStyle}>
      <Card.Header>
        {Logo}
        {calendar.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Invitees:{' '}
          {calendar.invitees.map((el, i) => (
            <Tag
              key={`calendarinvitees${i}`}
              name={el}
              className={styles.tags}
            />
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {calendar.matching_terms.map((el, i) => (
          <Tag key={`calendartag${i}`} name={el} className={styles.tags} />
        ))}
        <div className={styles.timestamp}>{relativeDate}</div>
      </Card.Footer>
    </Card>
  );
}

CalendarDataCard.propTypes = {
  calendar: PropTypes.object,
  Logo: PropTypes.element,
};

export function DropboxDataCard({ dropbox, Logo }) {
  const momentDate = moment(dropbox.created, 'YYYY-MM-DD', true);
  const relativeDate = momentDate.fromNow();
  return (
    <Card className={styles.cardStyle}>
      <Card.Header>
        {Logo}
        {dropbox.title}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Shared With:{' '}
          {dropbox.shared_with.map((el, i) => (
            <Tag key={`dropboxshared${i}`} name={el} className={styles.tags} />
          ))}
          <br />
          Path: <span className={styles.pathName}>{dropbox.path}</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {dropbox.matching_terms.map((el, i) => (
          <Tag key={`dropboxtag${i}`} name={el} className={styles.tags} />
        ))}
        <div className={styles.timestamp}>{relativeDate}</div>
      </Card.Footer>
    </Card>
  );
}

DropboxDataCard.propTypes = {
  dropbox: PropTypes.object,
  Logo: PropTypes.element,
};

export function ContactDataCard({ contacts, Logo }) {
  const momentDate = moment(contacts.last_contact, 'YYYY-MM-DD', true);
  const relativeDate = momentDate.fromNow();
  return (
    <Card className={styles.cardStyle}>
      <Card.Header>
        {Logo}
        {`${contacts.name} - ${contacts.company}`}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Emails:{' '}
          {contacts.emails.map((el, i) => (
            <Tag key={`contactemail${i}`} name={el} className={styles.tags} />
          ))}
          <br />
          Phones:{' '}
          {contacts.phones.map((el, i) => (
            <Tag key={`contactphone${i}`} name={el} className={styles.tags} />
          ))}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {contacts.matching_terms.map((el, i) => (
          <Tag key={`contacttag${i}`} name={el} className={styles.tags} />
        ))}
        <div className={styles.timestamp}>{relativeDate}</div>
      </Card.Footer>
    </Card>
  );
}

ContactDataCard.propTypes = {
  contacts: PropTypes.object,
  Logo: PropTypes.element,
};

export function SlackDataCard({ slack, Logo }) {
  const momentDate = moment(slack.timestamp, 'YYYY-MM-DD hh:mm:ss', true);
  const relativeDate = momentDate.fromNow();
  return (
    <Card className={styles.cardStyle}>
      <Card.Header>
        {Logo}
        {`${slack.channel} - ${slack.author}`}
      </Card.Header>
      <Card.Body>
        <Card.Text>{slack.message}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        {slack.matching_terms.map((el, i) => (
          <Tag key={`slacktag${i}`} name={el} className={styles.tags} />
        ))}
        <div className={styles.timestamp}>{relativeDate}</div>
      </Card.Footer>
    </Card>
  );
}

SlackDataCard.propTypes = {
  slack: PropTypes.object,
  Logo: PropTypes.element,
};

function DataCard({ type, tweet, calendar, dropbox, contacts, slack, Logo }) {
  if (type === 'tweet') {
    return <TweetDataCard tweet={tweet} Logo={Logo} />;
  }
  if (type === 'calendar') {
    return <CalendarDataCard calendar={calendar} Logo={Logo} />;
  }
  if (type === 'dropbox') {
    return <DropboxDataCard dropbox={dropbox} Logo={Logo} />;
  }
  if (type === 'contacts') {
    return <ContactDataCard contacts={contacts} Logo={Logo} />;
  }
  if (type === 'slack') {
    return <SlackDataCard slack={slack} Logo={Logo} />;
  }
}

DataCard.propTypes = {
  type: PropTypes.string,
  tweet: PropTypes.object,
  calendar: PropTypes.object,
  dropbox: PropTypes.object,
  contacts: PropTypes.object,
  slack: PropTypes.object,
  Logo: PropTypes.element,
};

export default DataCard;
