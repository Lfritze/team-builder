import React, {useState} from 'react'
import styled from 'styled-components'

const NewMemberButton = styled.button`
    background: teal;
    border-radius: 10px;
    border: 2px solid green;
    color: white;
    margin-top: 5%;
    padding: 0.25em 1em;
`;

const NameBox = styled.input`
    border-radius: 5px;
    margin-bottom: 2%;
    padding: 0.25%;
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
            
                <label htmlFor="name">Name:</label>
                <NameBox 
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={handleChanges}/>
            

            <div>
                <label htmlFor="email">Email:</label>
                <NameBox 
                id="email"
                name="email"
                value={member.email}
                type="email"
                placeholder="Email"
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