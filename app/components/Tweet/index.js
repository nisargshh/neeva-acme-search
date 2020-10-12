/**
 *
 * Tweet
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  AiFillTwitterCircle,
  // eslint-disable-next-line import/no-unresolved
} from 'react-icons/Ai';
import DataCard from '../DataCard';
import TweetData from '../../data/tweet.json';
import styles from './styles.css';

function Tweet({ search }) {
  const tweetItems = TweetData.tweet
    .filter((data, i) => {
      console.log(i);
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
        type="tweet"
        tweet={data}
        Logo={<AiFillTwitterCircle className={styles.tweetLogo} />}
      />
    ));
  return <span>{tweetItems}</span>;
}

Tweet.propTypes = {
  search: PropTypes.string,
};

export default Tweet;
