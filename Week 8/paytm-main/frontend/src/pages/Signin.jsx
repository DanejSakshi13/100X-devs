// src/components/Signin.jsx
import Heading from "../auth-components/Heading"; 
import SubHeading from "../auth-components/SubHeading";
import InputBox from "../auth-components/InputBox";
import SubmitButton from "../auth-components/SubmitButton";
import BottomWarning from "../auth-components/BottomWarning";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  return (
    <div className="h-auto max-w-80 bg-gray-100 flex flex-col justify-center">
      <Heading heading={"Sign in"} />
      <SubHeading subheading={"Enter your credentials to access your account"} />
      <InputBox 
        onChange={(e)=>{
          setUsername(e.target.value)
        }}
      label={"Email"} placeholder={"Enter your email"} />
      <InputBox 
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      label={"Password"} placeholder={"Enter your password"} />
      <SubmitButton onClick={async()=>{
        navigate('/dashboard')
      }} label={"Sign in"} />
      <BottomWarning label={"Don't have an account ?"} buttonText={"Sign up"} to={"/signup"}/>
    </div>
  );
}
