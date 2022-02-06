function Modal (props) {

 function noHandler(){
 props.onNo();
 }

 function yesHandler (){
     props.onYes();
 }


    return (
    <div className='modal'>
  <p>Are you sure ?</p>
  <button className='btn btn--alt' onClick={yesHandler}>Yes </button>
  <button className='btn' onClick={noHandler}>No</button>
    </div>

    );

}

export default Modal;