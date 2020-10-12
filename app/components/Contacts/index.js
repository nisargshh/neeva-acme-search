/**
 *
 * Contacts
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  AiFillContacts,
  // eslint-disable-next-line import/no-unresolved
} from 'react-icons/Ai';
import DataCard from '../DataCard';
import ContactsData from '../../data/contacts.json';
import styles from './styles.css';

function Contacts({ search }) {
  const contactsItems = ContactsData.contacts
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
        type="contacts"
        contacts={data}
        Logo={<AiFillContacts className={styles.contactsLogo} />}
      />
    ));
  return <span>{contactsItems}</span>;
}

Contacts.propTypes = {
  search: PropTypes.string,
};

export default Contacts;
