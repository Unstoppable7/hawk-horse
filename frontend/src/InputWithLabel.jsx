import { forwardRef } from "react";

const InputWithLabel = forwardRef(function InputWithLabel(props, ref) {
   const { componentID, type, inputValue, onChange, children } = props;

   return (
      <>
         <label htmlFor={componentID}>{children}</label>
         <input name={componentID} id={componentID} type={type} value={inputValue} onChange={onChange} ref={ref} />
      </>
   );
});

export default InputWithLabel