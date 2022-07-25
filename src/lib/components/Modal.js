import {createContext, useCallback, useEffect, useRef, useState} from "react";
import propTypes from 'prop-types'
import "./Modal.css"

/**
 * Create context
 */
export const ModalContext = createContext()

/**
 * Modal
 * @component
 * @param {Object} params
 * @param {String} params.name
 * @param {Boolean} params.showClose
 */
export default function Modal({ name, showClose = true, children }) {

    /**
     * References
     */
    const ref = useRef(null)
    const [show, setShow] = useState(true)
    /**
     * Manage keyboard interaction
     * @param  e
     */
    const handelKeydown = useCallback((e) => {
        if (e.key === 'Escape') return setShow(false)
    }, [setShow])
    // Focus first element focusable
    useEffect(() => {
          if (show) {
              ref.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0].focus()
              document.addEventListener('keydown', handelKeydown.bind(this))
        } else {
            document.removeEventListener('keydown', handelKeydown)
        }
        return () => {
            document.removeEventListener('keydown', handelKeydown)
        }
    }, [show, handelKeydown, ref])

    /**
     * Render
     */
    return show && (
        <ModalContext.Provider value={{show, setShow, showClose, children}}>
            <div className="modal" aria-labelledby={`${name}-title`} role="dialog" aria-modal="true" ref={ref}>
                <div className="modal-container">
                    <div className="modal-overlay" aria-hidden="true" onClick={() => setShow(!show)}/>
                    <span className="modal-spacer" aria-hidden="true">&#8203;</span>
                    <div className="modal-wrapper">
                        <div className="alert-modal">
                            {children}
                        </div>
                        {showClose &&
                            <button className="modal-close" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"/></svg>
                            </button>
                        }
                    </div>
                </div>
            </div>
        </ModalContext.Provider>
    )
}
// PropsTypes
Modal.propTypes = {
    name: propTypes.string.isRequired,
    showClose: propTypes.bool,

}




