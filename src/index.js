import React from 'react';
import ReactDOM from 'react-dom/client';
import Modal from "./lib/components/Modal";
import {ModalIcon} from "./lib/components/ModalIcon";
import {ModalTitle} from "./lib/components/ModalTitle";
import {ModalContent} from "./lib/components/ModalContent";
import {ModalActions} from "./lib/components/ModalActions";
import { ReactComponent as GreatStarSVG } from './asset/logo.svg'


const close = true
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Modal name="my-super-bright-alert" show={true} setShow={ false }>
          <ModalTitle>This is my super bright alert</ModalTitle>
          <ModalContent>Don't forget to follow me on my github account</ModalContent>
          <ModalActions>
              <button type="button" onClick={() => close}>It was famous</button>
          </ModalActions>
      </Modal>
  </React.StrictMode>

);

