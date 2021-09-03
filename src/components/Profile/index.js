import React from 'react';
import { useParams } from 'react-router-dom';

export default function(props) {
  const { profileId } = useParams();
  return (
    <>
      {!profileId ? <div>Own profile</div> : <div>someone else's profile: {profileId}</div>}
    </>
  );
}