/**
 *
 * Slack
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillSlackCircle,
  // eslint-disable-next-line import/no-unresolved
} from 'react-icons/Ai';
import DataCard from '../DataCard';
import SlackData from '../../data/slack.json';
import styles from './styles.css';

function Slack({ search }) {
  const slackItems = SlackData.slack
    .filter(data => {
      if (search === '') {
        return data;
      }
      if (data.matching_terms.includes(search.toLowerCase())) {
        return data;
      }
      return null;
    })
    .map(data => (
      <DataCard
        type="slack"
        slack={data}
        Logo={<AiFillSlackCircle className={styles.dropboxLogo} />}
      />
    ));
  return <span>{slackItems}</span>;
}

Slack.propTypes = {
  search: PropTypes.string,
};

export default Slack;
