import './index.css'

const Modal = ({children, title ,isOpen,close })=>{
    if(!isOpen){
        return null
    }
    return(
        <div className='modalOverlay'>
            <div className='modal'>
                <h2 className='title'>{title}</h2>
                 <div> {children}</div>   
                <button  onClick={close} >close</button>
            </div>
        </div>
    )
}

export default Modal