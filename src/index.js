import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from "./lib/components/Modal";
import  {ModalActions} from "./lib/components/ModalActions"
import {ModalContent} from "./lib/components/ModalContent"
import {ModalTitle} from "./lib/components/ModalTitle"
const close = true
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Modal name="my-super-bright-alert"  show={true} setShow={false}>
            <ModalTitle> Modal Title</ModalTitle>
            <ModalContent>*****Modal Message*****</ModalContent>
            <ModalActions>

            </ModalActions>
        </Modal>
    </React.StrictMode>

);
