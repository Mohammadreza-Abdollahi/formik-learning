const FormError = ({children}) => {
    console.log(children);
    return ( 
        <>
            <span className='block mt-1 text-red-500 text-sm'><i className="fa-solid fa-xmark"></i> {children}</span>
        </>
     );
}
 
export default FormError;