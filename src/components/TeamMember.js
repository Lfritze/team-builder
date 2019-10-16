import React from 'react';

export default function TeamMember({
    name, 
    email, 
    role
}) {

    return (
        <div className = "team-member">
            <h1>{name} </h1>
            <h2>{email} </h2>
            <h2>{role}</h2>
        </div>
    );
}