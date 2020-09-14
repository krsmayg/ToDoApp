import React, { useState } from 'react';
const SubjectListItem = (props) => {
  const [visible, setVisible] = useState(false);
  const visibilityToogle = () => {
    setVisible(!visible);
  } 
  return ( 
      <div key={props.indexItem} className="transition duration-200 ease-in border-solid border-b border-gray-400 px-4 py-3 transform hover:-translate-y-1 mt-4 flex justify-between items-center bg-white rounded-full" id={`itemList-${props.indexItem}`}>
        <div className="flex items-center ">
        <label className="custom-container" onClick={(event) => props.completeItem(event, props.indexItem)}> 
          <input type="checkbox" className="checkbox"/>
          <span className="check-mark"></span>
        </label>
        <p className="ml-2">{props.name}</p>
        </div>
        {visible ? <input onChange={(event) => props.updateItem(event,props.indexItem)} placeholder="update subject" className="outline-none"></input> : null}
        <div>
          <button onClick={visibilityToogle} className="transition duration-500 ease-in p-2 bg-orange-400 rounded transform hover:-translate-y-1 mr-4 outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>
          </button>
          <button onClick={() => props.deleteItem(props.indexItem)} className="transition duration-500 ease-in p-2 bg-red-600 rounded transform hover:-translate-y-1 outline-none">
            <svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white" className="transition duration-500 ease-in  transform hover:rotate-180"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
          </button>
        </div>
      </div>
   );
}
 
export default SubjectListItem;
