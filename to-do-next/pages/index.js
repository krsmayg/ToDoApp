import Layout from "../src/components/Layout";
import React, { useState,useEffect } from 'react';
import ToDoInput from '../src/components/Inputs/ToDoInput';
import SubjectsList from '../src/components/SubjectsList/SubjectsList';
import {connect} from 'react-redux';
import {fetchTasks, createTask,deleteTask,updateTask} from '../src/actions/index';
import { DatePicker } from 'antd';
import moment from 'moment';

const ListController = (props) => {
  const dateFormat = 'YYYY/MM/DD';
  const [inputValue, setInputValue] = useState('');
  const [completedList, setCompletedList] = useState([]);
  const [inputDate, setInputDate] = useState(moment(Date.now()).format(dateFormat));

  useEffect(() => {
    props.fetchTasks();
  },[])
  const filterByDateTasks = () => {
    let tasks = props.tasks['tasks'];
    if(tasks) {
      let filteredTasks = tasks.filter(task => moment(task.date).format(dateFormat) ===  inputDate);
      console.log('filtered Taks', filteredTasks);
      if(filteredTasks.length > 0) {
        return (
          <SubjectsList
          arrList={filteredTasks}
          deleteHandler={deleteSubject}
          updateHandler={updateSubject}
          completeHandler={addToCompleteList} />
        );
      }
      else {
        return (
          <h1 className="text-white text-lg">No tasks on this date</h1>
        );
      }
    };
  };
  function dateHandler(date, dateString) {
    setInputDate(dateString);
    console.log(inputDate);
  };
  const addSubject = () => {
    if(inputValue.length > 0) props.createTask(inputValue);
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
          <div className="flex mt-10">
            <h1 className="text-white text-lg mr-4">Sort by Date: </h1>
            <DatePicker defaultValue={moment('2020/10/01', dateFormat)} format={dateFormat} onChange={dateHandler} />
          </div>
          {filterByDateTasks()}
        </div>
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
 