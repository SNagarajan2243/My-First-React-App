import React,{useState} from 'react';

import './App.css';

import InputField from './Components/InputField/InputField';

import InputDetail from './Components/Details/InputDetail'

const App = () => {

    const [content,setContent] = useState([]);

    const sDetail = (user,a) => {
        setContent(prevContent => [...prevContent,{Name:user , Age: a , key:Math.random()}])
    } 

    const deleteContent = (key) => {
        setContent(prevContent => {
            const updateContent = prevContent.filter(con => con.key!==key)
            return updateContent;
        })
    }

    return (
        <div className="container">
            <InputField storeDetail={sDetail}/>
            <InputDetail details={content} deleteHandler={deleteContent}/>
        </div>
    )
}

export default App;
