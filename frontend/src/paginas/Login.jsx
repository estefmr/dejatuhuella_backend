import {Link} from 'react-router-dom'

const LOgin = () => {
    return ( 
        <>
           
            <div>
                <h1 className="text-indigo-600 font-black text-4xl">Inicia sesion y Administra a tus <span className="text-black">pacientes</span> </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10'>
                <form>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <div>
                        <label className="uppercase text-gray-600 block text-xl font-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                        />
                    </div>
                    <input 
                    type="submit"
                    value="iniciar sesion"
                    className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md-w-auto"
                    />
                </form>
                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link className='block text-center my-5 text-gray-500' to="/registrar">¿No tienes una cuenta? Registrate</Link>
                    <Link to="/olvide-password">Olvide mi password</Link>
                </nav>
            </div>
           
        </>
     );
}
 
export default LOgin;