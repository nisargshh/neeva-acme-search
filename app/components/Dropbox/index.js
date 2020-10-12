/**
 *
 * Dropbox
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillDropboxCircle,
  // eslint-disable-next-line import/no-unresolved
} from 'react-icons/Ai';
import DataCard from '../DataCard';
import DropboxData from '../../data/dropbox.json';
import styles from './styles.css';

function Dropbox({ search }) {
  const dropboxItems = DropboxData.dropbox
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
        type="dropbox"
        dropbox={data}
        Logo={<AiFillDropboxCircle className={styles.dropboxLogo} />}
      />
    ));
  return <span>{dropboxItems}</span>;
}

Dropbox.propTypes = {
  search: PropTypes.string,
};

export default Dropbox;
