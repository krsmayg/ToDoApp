import React from 'react';
import SubjectListItem from './SubjectListItem/SubjectListItem'
const SubjectsList = (props) => {
  let listItems = 'Loading';
  let arr = props.arrList;
  if(arr) {
    listItems = arr.map((item) => {
      return (
         <SubjectListItem  
           indexItem={item._id} 
           name={item.name} 
           deleteItem={props.deleteHandler} 
           updateItem ={props.updateHandler}  
           completeItem ={props.completeHandler}/>
      )
    });
  }
  return ( 
    <div className="mt-8">{listItems}</div>
   );
}
 
export default SubjectsList;