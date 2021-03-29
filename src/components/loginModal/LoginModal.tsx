import React, {useState} from 'react';
import s from './LoginModal.module.scss';
import Modal from 'react-modal'

export function LoginModal() {
    return (
        <div className={s.container}>

        </div>
    )
}

Modal.setAppElement('#root')

export function ModalLog() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setModalIsOpen(true)}>open</button>
            <Modal isOpen={modalIsOpen}
                   shouldCloseOnOverlayClick={false}
                   onRequestClose={() => setModalIsOpen(false)}
                   style={
                       {

                           overlay: {
                               backgroundColor: 'rgb(255,255,255, 0.7)',
                               position: 'fixed',
                               display: 'flex',
                               justifyContent: 'center',
                               alignItems: 'center',

                           },
                           content: {
                               marginLeft: '500px',
                               width: '500px',
                               color: 'orange'
                           }
                       }
                   }
            >
                <h2>modal</h2>
                <p>body</p>
                <button onClick={() => setModalIsOpen(false)}>close</button>
            </Modal>
        </>
    )
}
