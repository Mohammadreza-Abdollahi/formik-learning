import '../assets/css/layout.css'

const AddForm = () => {
    return ( 
        <>
            <div className="my-form py-10 rounded-lg">
                <h1 className="text-3xl text-purple-600 text-center">ثبت نام</h1>
                <form action="" className='px-12'>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="name">نام :</label>
                        <input id='name' type="text" name="name" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="نام خود را وارد کنید..."></input>
                    </div>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="email">ایمیل :</label>
                        <input id='email' type="email" name="email" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="ایمیل خود را وارد کنید..."></input>
                    </div>
                    <div className='mb-6'>
                        <label className='text-lg' htmlFor="password">رمزعبور :</label>
                        <input id='password' type="password" name="password" class="mt-2 transition duration-200 block m-auto w-full rounded-md outline-none px-3 py-3 text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 text-xl" placeholder="رمزعبور خود را وارد کنید..."></input>
                    </div>
                    <input className='w-full py-3 mt-4 mb-3 border rounded border-purple-500 text-slate-700 transition-colors duration-300 hover:bg-purple-500 hover:text-white text-2xl' type="submit" value={'ثبت نام'}/>
                </form>
            </div>
        </>
     );
}
 
export default AddForm;