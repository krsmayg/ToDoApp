import Layout from "../src/components/Layout";
import React, { useState,useEffect } from 'react';
import ToDoInput from '../src/components/Inputs/ToDoInput';
import SubjectsList from '../src/components/SubjectsList/SubjectsList';
import {connect} from 'react-redux';
import {fetchTasks, createTask,deleteTask,updateTask} from '../src/actions/index';

const ListController = (props) => {
  const [inputValue, setInputValue] = useState('');
  const [completedList, setCompletedList] = useState([]);
  useEffect(() => {
    props.fetchTasks();
  },[])

  const addSubject = () => {
    props.createTask(inputValue);
  }
  const handleInput = (event) => {
    const input = event.target.value;
    setInputValue(input);
  }
  const deleteSubject = (id) => {
    const el = document.getElementById(`itemList-${id}`);
    el.className += " " + 'fly-away';
    setTimeout(() => {
      props.deleteTask(id);
    }, 2000);
  }
  const updateSubject = (event, id) => {
    const newName = event.target.value;
    props.updateTask(id, newName);
  }

  const addToCompleteList = (event, id) => {
    // const list = [...props.tasks];
    // const completeListCopy = [...completedList];
    // completeListCopy.push(list[id]);
    // const newList = list.filter((item, index) => index !== id);
    // const el = document.getElementById(`itemList-${id}`)
    // el.className += " " + 'fade-out';

    // setTimeout(() => {
    //   el.classList.remove('fade-out');
    //   setSubjectList(newList);
    //   setCompletedList(completeListCopy);
    // }, 2000);

  }
  const renderCompleteTasks = () => {
    return completedList.map(item => (
      <p>{item}</p>
    ))
  }
  return (
    <Layout>
     <h1 className="text-4xl uppercase text-center mt-5 text-white font-medium pixel-font">My List</h1>
    <div className="flex justify-center mt-20">
      <div className="py-10 px-5 rounded h-full min-h-400 w-full sm:w-11/12 lg:w-2/4">
        <div className="flex items-center justify-between md:justify-around">
          <ToDoInput setInput={handleInput} />
          <button onClick={addSubject} className="transition duration-500 ease-in-out bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transform hover:-translate-y-1 hover:scale-110 ">Add</button>
        </div>
        <SubjectsList
          arrList={props.tasks}
          deleteHandler={deleteSubject}
          updateHandler={updateSubject}
          completeHandler={addToCompleteList} />
      </div>
      {/* <div className="w-1/5 bg-white px-10 py-10 rounded h-full min-h-400 ml-4">
        <h1 className="text-lg font-black">Completed Tasks</h1>
        {renderCompleteTasks()}
      </div> */}
    </div>
    </Layout>
  );
}
const mapStateToProps = (state) =>{
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps,{fetchTasks,createTask,deleteTask,updateTask })(ListController);
 