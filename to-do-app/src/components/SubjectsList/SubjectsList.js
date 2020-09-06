import React from 'react';
import SubjectListItem from './SubjectListItem/SubjectListItem'
const SubjectsList = (props) => {
  console.log(props.arrList);
  let listItems = 'Loading';
   listItems = props.arrList.map((item,index) => {
     console.log('Index: ' + index)
     return (
        <SubjectListItem  
          indexItem={index} 
          name={item} 
          deleteItem={props.deleteHandler} 
          updateItem ={props.updateHandler}  
          completeItem ={props.completeHandler}/>
     )
   });
  return ( 
    <div className="mt-8">{listItems}</div>
   );
}
 
export default SubjectsList;