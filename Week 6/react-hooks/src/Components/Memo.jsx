import React, { useState } from "react"
import PropTypes from 'prop-types';


export default function Memo(){
    const [title,setTitle] = useState("My name is Sakshi");
    function updateTitle(){
        setTitle("My name is " + Math.random());
    }

    return(
        <div>
            <button onClick={updateTitle}>Update the title</button>
            <Header title={title}></Header>
            <Header title="title2"></Header>
            <Header title="title3"></Header>
        </div>
    )
}

const Header = React.memo(function Header({title}){
    return (
        <div>
            {title}
        </div>
    )
})

Header.propTypes = {
    title: PropTypes.string.isRequired
};