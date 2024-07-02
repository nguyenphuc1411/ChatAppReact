import { useFormik } from "formik";
import { validationRegiser } from "../utils/yup";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { register } from "../Slice/AuthSlice";
import { useNavigate } from "react-router-dom";
function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: validationRegiser,
        onSubmit: values => {
            dispatch(register(values))
            toast.success("Register successfully")
            setTimeout(() => {
                navigate("/login")
            }, 1000);
        }
    });

    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <form className="bg-white p-6 rounded shadow-lg w-full max-w-sm" onSubmit={formik.handleSubmit}>
                    <h3 className="text-xl font-semibold mb-4 text-center">Create a new account</h3>
                    <div>
                        <label>Fullname</label>
                        <input
                            className="p-2 mb-2 w-full border-b-2 outline-none border-b-slate-900"
                            type="text"
                            name="fullName"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            placeholder="Your fullname..."
                        />
                        {formik.errors.fullName && formik.touched.fullName && (
                            <span className="text-red-500">{formik.errors.fullName}</span>
                        )}
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            className="p-2 mb-2 w-full border-b-2 outline-none border-b-slate-900"
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Your email..."
                        />
                        {formik.errors.email && formik.touched.email && (
                            <span className="text-red-500">{formik.errors.email}</span>
                        )}
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            className="p-2 mb-2 w-full border-b-2 outline-none border-b-slate-900"
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Your password..."
                        />
                        {formik.errors.password && formik.touched.password && (
                            <span className="text-red-500">{formik.errors.password}</span>
                        )}
                    </div>
                    <div>
                        <label>Confirm Password</label>
                        <input
                            className="p-2 mb-2 w-full border-b-2 outline-none border-b-slate-900"
                            type="password"
                            name="confirmPassword"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            placeholder="Confirm password..."
                        />
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
                            <span className="text-red-500">{formik.errors.confirmPassword}</span>
                        )}
                    </div>

                    <button className="p-2 mt-3 w-full bg-blue-500 text-white rounded  hover:bg-blue-900" type="submit">Register</button>
                    <div className="mt-2 text-right">
                        Are you have a account?
                        <Link to="/login" className="text-blue-500 ml-3 cursor-pointer hover:text-blue-900">Login</Link>
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

export default Register;
