const FormError = ({children}) => {
    return ( 
        <>
            <span className='block mt-1 text-red-500 text-sm'><i class="fa-solid fa-xmark"></i> {children}</span>
        </>
     );
}
 
export default FormError;