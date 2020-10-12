/**
 *
 * Tag
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Badge } from 'react-bootstrap';

function Tag({ name, className }) {
  return (
    <Badge pill variant="info" className={className}>
      {name}
    </Badge>
  );
}

Tag.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Tag;
