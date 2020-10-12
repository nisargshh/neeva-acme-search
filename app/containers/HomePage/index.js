/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import Search from '../../components/Search';
import Result from '../../components/Result';

export default function HomePage() {
  const [search, setSearch] = useState('');

  function onSearchChange(value) {
    setSearch(value);
  }

  function onSearchSubmit() {
    console.log(search);
  }

  function keyPress(e) {
    if (e.key === 'Enter') {
      onSearchSubmit(e.target.value);
    }
  }

  return (
    <div>
      <Search
        onSearchChange={onSearchChange}
        onSearchSubmit={onSearchSubmit}
        keyPress={keyPress}
        value={search}
      />
      <Result search={search} />
    </div>
  );
}
