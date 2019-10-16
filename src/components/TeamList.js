import React from 'react';
import TeamMember from './TeamMember';

// map like we did in notes today
export default function TeamList({ myTeam }) {
    return myTeam.map(person =>
        <TeamMember {...person}/>
        );
}