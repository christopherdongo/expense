import React from 'react';
import Modal from 'react-modal';
import {AiFillCloseCircle} from 'react-icons/ai'
import '../sytles.css'

const ModalEdit =({children, closeModal,modalIsOpen})=>{

  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                  :'70%'
    }
  };
    return(
        <div>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
          contentLabel="Editar Gasto"
          ariaHideApp={false}
        >
        <span className="button-modal-cerrar" onClick={closeModal}><AiFillCloseCircle className="icon-close-modal" /></span>
       {/*<button className="close-btn-modal" onClick={closeModal}><AiFillCloseCircle className="icon-close-modal" /></button>*/}
        <h2 className="text-center font-smaller">Guardar</h2>
        {
          children
        }
          
        </Modal>
      </div>
    )
}

export default ModalEdit

