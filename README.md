# Getting Started
The `p14-plugin-modal` as its name suggests, is a plugins developed as part of my OpenClassRooms training program.
It is a React plugin allowing to display a modal alert, for more information go to the section "How the plugin works"
## Installation
```
$ npm install --save p14-plugin-modal
$ yarn add p14-plugin-modal
```

### How the plugin works

**Import module:**
```jsx
import Modal, { ModalActions, ModalContent,  ModalTitle } from 'p14-plugin-modal/dist'
```

**Create your state in your component:**
```jsx
const [myModal, setMyModal] = useState(false)
```

**Render your alert in your component:**
```jsx
    return (
        <>
            <Modal name="my-super-bright-alert"  show={myModal} setShow={setMyModal}>
              <ModalTitle> Modal Title</ModalTitle>
              <ModalContent>*****Modal Message*****</ModalContent>
              <ModalActions>
                <button type="button" onClick={() =>setMyModal(false)}>Close Modal</button>
              </ModalActions>
            </Modal>
        </>
    )
```

**`<Modal/>` params:**
- name: *id* of your alert title use to define *Aria*
- showClose: Boolean use to show or hide cross close button (`true` by default)
- show: Boolean state use to show and hide your alert
- setShow: function that updates your state





