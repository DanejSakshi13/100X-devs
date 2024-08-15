/*
import Heading from "../auth-components/Heading";
import SubHeading from "../auth-components/SubHeading";
import InputBox from "../auth-components/InputBox";
import SubmitButton from "../auth-components/SubmitButton";
import BottomWarning from "../auth-components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="h-auto max-w-80 bg-gray-100 flex flex-col justify-center">
      <Heading heading={"Sign up"} />
      <SubHeading subheading={"Enter your information to create an account"} />
      {error && <div className="text-red-500">{error}</div>}
      <InputBox
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        label={"First Name"}
        placeholder={"Enter your first name"}
      />
      <InputBox
        onChange={(e) => {
          setLastName(e.target.value);
        }}
        label={"Last Name"}
        placeholder={"Enter your last name"}
      />
      <InputBox
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        label={"Email"}
        placeholder={"Enter your email"}
      />
      <InputBox
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        label={"Password"}
        placeholder={"Enter your password"}
      />
      <SubmitButton
        onClick={async () => {
          try {
            const response = await axios.post(
              "http://localhost:3000/api/v1/user/signup",
              {
                username,
                firstName,
                lastName,
                password,
              }
            );
            localStorage.setItem("token", response.data.token);
            navigate("/dashboard");
          } catch (error) {
            if (error.response) {
              setError(error.response.data.message || "Signup failed");
            } else if (error.request) {
              setError("No response from server");
            } else {
              setError("Signup failed");
            }
          }
        }}
        label={"Sign up"}
      />
      <BottomWarning
        label={"Already have an account ?"}
        buttonText={"Sign in"}
        to={"/signin"}
      />
    </div>
  );
}
*/



// prathamesh
import Heading from "../auth-components/Heading";
import SubHeading from "../auth-components/SubHeading";
import InputBox from "../auth-components/InputBox";
import SubmitButton from "../auth-components/SubmitButton";
import BottomWarning from "../auth-components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Signup(){

   

     const [firstName, setFirstName] = useState(" ")
    const [lastName, setLastName] = useState(" ")
    const [username, setUserName] = useState(" ")
    const [password, setPassword] = useState(" ")
    const navigate = useNavigate()
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4 transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            <Heading label={"Sign up"}/>
            <SubHeading label={"Enter your information to create an account"} />

            <InputBox onChange={e => {
                setFirstName(e.target.value)
            }} label={"First Name"} placeholder="Enter your first name" />

            <InputBox onChange={e => {
                setLastName(e.target.value)
            }} label={"Last Name"} placeholder="Enter your last name" />

            <InputBox onChange={e => {
                setUserName(e.target.value)
            }}  label={"Email"} placeholder="Enter your email"/>

            <InputBox onChange={e => {
                setPassword(e.target.value)
            }} label={"Password"} placeholder="Set a strong password"/>
           
            <div className="pt-4">
                <SubmitButton  onClick={async () => {
                      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                      username,
                      firstName,
                        lastName,
                        password
                      });
                      //storing the token in localStorage for further use
                      localStorage.setItem("token", response.data.token)

                      //to remove the user when they click on logut we have to remove the token
                      //the way to remnove the token from local storage is
                      //localStorage.removeItem("token")  

                      navigate("/dashboard")

                }} label={"Sign up"}  />
               
            </div>

            <BottomWarning label={"Already have an account? " } buttonText={"Sign in"} to={"/signin"} />
           
            </div>
            </div>
        </div>

    )

}

