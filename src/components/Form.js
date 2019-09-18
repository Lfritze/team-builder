import React, { useState } from 'react';

export default function Form(props) {
    console.log('props', props);
    const [member, setMember] = useState({name: "", email: "", role: "" });
    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value }); 
    };

    const formSubmitter = event => {
        event.preventDefault();
        props.addMember(member);
        setMember({name: "", email: "", role: "" });
    };
    return (
        <form onSubmit={formSubmitter}>
            <label htmlFor = 'name'>Name: </label>
            <input 
            id = 'name'
            type = 'text'
            name = 'name'
            onChange = {handleChanges}
            value = {member.name}
            />

            <label html ='email'>Email: </label>
            <input
            id = 'email'
            type = 'text'
            name = 'email'
            onChange = {handleChanges}
            value = {member.email}
            />

            <label htmlFor='role'>Role: </label>
            <input
            id = 'role'
            type = 'text'
            name = 'role'
            onChange = {handleChanges}
            value={member.role}
            />
            <button type = 'submit'> Add Member </button>
        </form>
    );
}