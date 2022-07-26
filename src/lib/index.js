import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from "./lib/components/Modal";
import {ModalTitle} from "./lib/components/ModalTitle";
import {ModalContent} from "./lib/components/ModalContent";
import {ModalActions} from "./lib/components/ModalActions";


const close = true
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Modal name="my-super-bright-alert">
          <ModalTitle> Modal Title</ModalTitle>
          <ModalContent>*****Modal Message*****</ModalContent>
          <ModalActions>
              <button type="button" onClick={() =>console.log(close)}>Close Modal</button>
          </ModalActions>
      </Modal>
  </React.StrictMode>

);

