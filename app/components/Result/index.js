/**
 *
 * Result
 *
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tweet from '../Tweet';
import Calendar from '../Calendar';
import Dropbox from '../Dropbox';
import Contacts from '../Contacts';
import Slack from '../Slack';

const StyledResult = styled.div`
  background-color: grey;
  width: 100vw;
  height: auto;
`;

function Result({ search }) {
  return (
    <StyledResult>
      <Tweet search={search} />
      <Calendar search={search} />
      <Dropbox search={search} />
      <Contacts search={search} />
      <Slack search={search} />
    </StyledResult>
  );
}

Result.propTypes = {
  search: PropTypes.string,
};
export default Result;
