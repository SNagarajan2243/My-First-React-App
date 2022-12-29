import React, { useState } from "react";

import "./InputField.css";

import Card from "../UI/Card";

import Button from "../UI/Button";

import Modal from "../UI/Modal";

const InputField = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [input1Valid, setInput1Valid] = useState(true);
  const [input2Valid, setInput2Valid] = useState(true);
  const [label1Valid, setLabel1Valid] = useState(true);
  const [label2Valid, setLabel2Valid] = useState(true);
  const [error,setError] = useState(null);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
    if (username.length === 0) {
      setInput1Valid(true);
      setLabel1Valid(true);
    }
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
    if (age.length === 0) {
      setInput2Valid(true);
      setLabel2Valid(true);
    }
  };
  
  const errorHandler = () => {
    setError(null)
  }

  const passDetail = (event) => {
    event.preventDefault();
    if (username.length === 0 && age.length === 0) {
      setInput1Valid(false);
      setInput2Valid(false);
      setLabel1Valid(false);
      setLabel2Valid(false);
      setError({title: 'Invalid Input',message: "Please Enter a valid Username and Age (non-empty values)"})
      return;
    }else if(username.length === 0 ){
      setInput1Valid(false);
      setLabel1Valid(false);
      setError({title:'No Username Entered', message: "Please Enter Username"})
      return ;
    } 
    else if(age.length === 0){
      setInput2Valid(false);
      setLabel2Valid(false);
      setError({title:'No Age Entered', message: "Please Enter Age"})
      return ;
    }
    else if (age < 1) {
      setInput2Valid(false);
      setLabel2Valid(false);
      setError({title: 'Invalid Age',message: "Please Enter a valid age"})
      return;
    } else {
      setInput1Valid(true);
      setInput2Valid(true);
      setLabel1Valid(true);
      setLabel2Valid(true);
    }

    props.storeDetail(username, age);
    setUsername("");
    setAge("");
  };

  return (
    <>
      {error && <Modal errorMessage={error} onConfirm={errorHandler}/>}
      <Card>
        <form className="formDesign" onSubmit={passDetail}>
          <label
            htmlFor="username"
            className={!label1Valid ? "labelInValid" : ""}
          >
            Username
          </label>
          <input
            type="text"
            value={username}
            className={!input1Valid ? "inputInValid" : ""}
            id="username"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age" className={!label2Valid ? "labelInValid" : ""}>
            Age
          </label>
          <input
            type="text"
            id="age"
            value={age}
            className={!input2Valid ? "inputInValid" : ""}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User Detail</Button>
        </form>
      </Card>
    </>
  );
};

export default InputField;
