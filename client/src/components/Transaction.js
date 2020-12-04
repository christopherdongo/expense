import React,{useContext, useState} from 'react';
import {GlobalSite} from '../context/GlobalSite'
import ModalEdit from './Modal'
import EditForm from '../components/EditForm'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import {formatNumber} from '../utils/format'
const Transaction=({item})=>{

    const {deleteTransaction} = useContext(GlobalSite)
    const sign = item.amount < 0 ? '-':'+'
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalContent, setModalContent]=useState(null)


    const closeModal=()=>{
      setIsOpen(false);
    }

    const editTracket=(id)=>{
        setIsOpen(true);
        setModalContent(
            <EditForm  closeModal={closeModal} modalIsOpen={modalIsOpen} item={item} id={id} setIsOpen={setIsOpen}/>
        )
    } 
  
    return(
          <>
          <li className={item.amount < 0 ? 'minus' : 'plus'} key={item.id}>
           <div className="containervalor">
             <p>{item.text}</p>
             <p>{sign}${formatNumber((Math.abs(item.amount)))}</p>
           </div>
          <div className="span-botones">
          <button className="editar-btn" onClick={()=>editTracket(item._id)}>Editar<AiFillEdit/></button>
          <button className="delete-btn" onClick={()=>deleteTransaction(item._id)}>Borrar<AiFillDelete/></button>
          </div>
         </li>
         
         <ModalEdit
         modalIsOpen={modalIsOpen}
         closeModal={closeModal}
         // eslint-disable-next-line
         modalIsOpen={modalIsOpen}
         >
         {modalContent}
         </ModalEdit>
          </>
    )
}


export default Transaction

 

