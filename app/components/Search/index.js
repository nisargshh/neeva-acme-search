/**
 *
 * Search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { injectIntl, intlShape } from 'react-intl';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi';
import messages from './messages';
import styles from './styles.css';

function Search({ intl, onSearchChange, onSearchSubmit, search, keyPress }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder={intl.formatMessage({ ...messages.placeholder })}
          aria-label="search"
          aria-describedby="basic-addon2"
          className={styles.searchInput}
          onChange={e => onSearchChange(e.target.value)}
          onKeyDown={e => keyPress(e)}
          value={search}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            className={styles.searchButton}
            onClick={onSearchSubmit}
            type="submit"
          >
            <FiSearch className={styles.searchIcon} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

Search.propTypes = {
  intl: intlShape.isRequired,
  onSearchChange: PropTypes.func,
  onSearchSubmit: PropTypes.func,
  keyPress: PropTypes.func,
  search: PropTypes.string,
};

export default injectIntl(Search);
