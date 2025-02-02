import { useState } from "react"
import Modal from "./Modal"

const ModalWrapper = ()=>{
    const [isOpen ,setIsOpen] = useState(false)

   
    return(
        <>
        <button onClick={()=>setIsOpen(true)}>Show Modal</button>
        <Modal 
        title='Modal Title'
        isOpen={isOpen}
        close={()=> setIsOpen(false)}
        >
            One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
        </Modal>
        </>
    )
}

export default ModalWrapper