import React, {useState} from 'react'
import styled from 'styled-components'

const NewMemberButton = styled.button`
background: teal;
border-radius: 10px;
border: 2px solid green;
color: white;
margin: 0 auto;
margin-top: 5%;
padding: 0.25em 1em;
`;

export default function Form(props){

    const [member, setMember] = useState({
            name: "",
            email: "",
            role: ""
    })

    const handleChanges = event => {
            setMember({
                ...member, [event.target.name]:event.target.value
            })
    }

    const submitForm = event => {
            event.preventDefault();
            props.addNewMember(member);

            setMember({
                name:"",
                email:"",
                role:""
            })
    }
    console.log('member', member);
    return(
        <form onSubmit={submitForm}>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                id="name"
                name="name"
                type="text"
                value={member.name}
                onChange={handleChanges}/>
            </div>

            <div>
                <label htmlFor="email">Email:</label>
                <input 
                id="email"
                name="email"
                value={member.email}
                type="email"
                onChange={handleChanges}/>
            </div>

            <div>
                <label htmlFor="role">Role:</label>
                <select id="role" name="role" value={member.role} onChange={handleChanges}>
                    <option value="0" onChange={handleChanges}></option>
                    <option value="Project-Manager">Project Manager</option>
                    <option value="Frontend-Developer">Frontend Developer</option>
                    <option value="Backend-Developer">Backend Developer</option>
                    <option value="Data-Scientist">Data Scientist</option>
                    <option value="Logistics-Coordinator">Logistics Coordinator</option>
                    <option value="Ux-Designer">UX Designer</option>
                </select>
            </div>
            <NewMemberButton type="submit">
            Add New Team Member
            </NewMemberButton>
         </form>    
    )
}