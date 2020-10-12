/**
 *
 * Card
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

function DataCard({ type, tweet, calendar, dropbox, contacts, slack, Logo }) {
  if (type === 'tweet') {
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
          {tweet.matching_terms.map(el => (
            <Tag name={el} className={styles.tags} />
          ))}
          <div className={styles.timestamp}>{relativeDate}</div>
        </Card.Footer>
      </Card>
    );
  }
  if (type === 'calendar') {
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
            {calendar.invitees.map(el => (
              <Tag name={el} className={styles.tags} />
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {calendar.matching_terms.map(el => (
            <Tag name={el} className={styles.tags} />
          ))}
          <div className={styles.timestamp}>{relativeDate}</div>
        </Card.Footer>
      </Card>
    );
  }
  if (type === 'dropbox') {
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
            {dropbox.shared_with.map(el => (
              <Tag name={el} className={styles.tags} />
            ))}
            <br />
            Path: <span className={styles.pathName}>{dropbox.path}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {dropbox.matching_terms.map(el => (
            <Tag name={el} className={styles.tags} />
          ))}
          <div className={styles.timestamp}>{relativeDate}</div>
        </Card.Footer>
      </Card>
    );
  }
  if (type === 'contacts') {
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
            {contacts.emails.map(el => (
              <Tag name={el} className={styles.tags} />
            ))}
            <br />
            Phones:{' '}
            {contacts.phones.map(el => (
              <Tag name={el} className={styles.tags} />
            ))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {contacts.matching_terms.map(el => (
            <Tag name={el} className={styles.tags} />
          ))}
          <div className={styles.timestamp}>{relativeDate}</div>
        </Card.Footer>
      </Card>
    );
  }
  if (type === 'slack') {
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
          {slack.matching_terms.map(el => (
            <Tag name={el} className={styles.tags} />
          ))}
          <div className={styles.timestamp}>{relativeDate}</div>
        </Card.Footer>
      </Card>
    );
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
