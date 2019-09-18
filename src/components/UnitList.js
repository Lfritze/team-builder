// render list of team members like we did for Notes today
//import TeamMember
import React from 'react';
import TeamMember from './TeamMember';

// map like we did in notes today
export default function UnitList({ team }) {
    return team.map(person =>
        <TeamMember {...person} />
        );
}