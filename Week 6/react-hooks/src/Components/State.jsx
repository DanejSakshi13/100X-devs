import { useState } from "react";
import PropTypes from 'prop-types';

// IDEAL
export default function State(){
    
    return(
        <div>
            <HeaderWithButton></HeaderWithButton>
            <Header title="title5"></Header>
            <Header title="title6"></Header>
            <Header title="title7"></Header>
        </div>
    )
}


// to reduce number of rerenders 
function HeaderWithButton(){
    // push the state down, such that parent component does not have any state variable
        const [title,setTitle] = useState("my name is sakshi")

        function changeHeading(){
        setTitle("My name is " + Math.random());
        }

        return <div>
            <button onClick={changeHeading}>Click to change name</button>
            <Header title={title}></Header>  
        </div>
}

function Header({title}){
    return(
    <div>
        {title}
    </div>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
};












/*
import React, { useState } from "react";

export default function State(){
    const [title,setTitle] = useState("my name is sakshi")
    function changeHeading(){
        setTitle("My name is " + Math.random());
    }
    return(
        <div>
            <button onClick={changeHeading}>Click to change name</button>
            <Header title={title}></Header>  
            <Header title="title2"></Header>
            <Header title="title3"></Header>
            <Header title="title4"></Header>
            <Header title="title5"></Header>
        </div>
    )
}


function Header({title}){
    return(
    <div>
        {title}
    </div>
    )
}
*/