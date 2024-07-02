import { useFormik } from 'formik';
import { validationLogin } from '../utils/yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Slice/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: validationLogin,
        onSubmit: values => {
            const email = values.email
            const password = values.password
            dispatch(login({ email, password }))
            toast.success("Login successfully")
            setTimeout(() => {
                navigate("/")
            }, 1000)
        }
    });

    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <form className="bg-white p-6 rounded shadow-lg w-full max-w-sm" onSubmit={formik.handleSubmit}>
                    <h3 className="text-xl font-semibold mb-4 text-center">Login to Chat App</h3>
                    <div>
                        <label>Email</label>
                        <input
                            className="p-2 mb-2 w-full border-b-2 outline-none border-b-slate-900"
                            name="email"
                            type="text"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Your email..."
                        />
                        {formik.errors.email && formik.touched.email && <span className="text-red-500">{formik.errors.email}</span>}
                    </div>

                    <div className='mt-2'>
                        <label>Password</label>
                        <input
                            className="p-2 mb-2 w-full border-b-2 outline-none border-b-slate-900"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Your password..."
                        />
                        {formik.errors.password && formik.touched.password && <span className="text-red-500">{formik.errors.password}</span>}
                    </div>
                    <button className="p-2 mt-3 w-full bg-blue-500 text-white rounded hover:bg-blue-900" type="submit">Login</button>
                    <div className="mt-2 flex justify-between">
                        <a className="text-blue-300 cursor-pointer hover:text-blue-500">Forgot password?</a>
                        <Link to="/register" className="cursor-pointer hover:text-gray-600">Create new account?</Link>
                    </div>
                </form>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={2000}
                limit={1}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Bounce
            />
        </>
    );
}

export default Login;
