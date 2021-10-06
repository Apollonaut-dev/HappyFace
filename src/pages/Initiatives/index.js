import React, { useEffect, useState } from 'react';

import Feed from '../../components/Feed';

// import CreateInitiative from '../../components/CreateInitiative';
import Initiative from '../../models/Initiative';

export default function Initiatives() {
  // useEffect to get initiatives from database
  const [initiatives, updateInitiativeList] = useState([]);
  useEffect(() => {
    Initiative.create('fundraiser', 'fundrasing for cool dude with cancer')
      .then(i => Initiative.readOne(i.id))
      .then(i => updateInitiativeList([<div>{i.type}</div>]));
  }, [])
  return (
    <>
      <Feed feedItems={initiatives} />
    </>
  ); 
}