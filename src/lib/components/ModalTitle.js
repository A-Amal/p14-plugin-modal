/**
 * Show title wrapper
 * @component
 */
export function ModalTitle({ children }) {
    return (
        <h3 className="modal-title" id="modal-title">
            {children}
        </h3>
    )
}
