import React, {useState} from "react";
import BrandTextWithDesc from "./widget/BrandTextWithDesc";
import {NavLink, Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import {login} from "../service/auth";
import {TaggedAlert} from "./widget/TaggedAlert";

const Login = () => {

    const {register, handleSubmit, errors} = useForm();
    const [toHome, setToHome] = useState(false);
    const [alert, setAlert] = useState();

    const onSubmit = data => {
        login(data).then(r => {
            if (r.status === 200) {
                setToHome(true);
                return;
            }
            setAlert("Something went wrong.");
        }).catch(err => {
            setTimeout(() => {
                setAlert(undefined);
            }, 2000);

            if (err.response.status === 403) {
                setAlert("username/email or password wrong");
                return;
            }

            setAlert("Something went wrong.");
        });
    };

    return (
        <div>
            {toHome ? <Redirect to="/"/> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container max-w-sm mx-auto min-h-screen flex flex-col">
                    <div className="flex flex-col flex-1 items-center justify-center px-6 py-8 ">
                        {alert !== undefined ? <TaggedAlert title="error" message={alert}/> : null}
                        <BrandTextWithDesc/>
                        <input type="text"
                               name="login"
                               placeholder="username / email"
                               ref={register({required: true, min: 1})}
                               className="mt-5 block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.login && "give me a name"}
                        <input type="password"
                               name="password"
                               placeholder="password"
                               ref={register({required: true})}
                               className="mt-2 block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.password && "give me a pass"}
                        <button
                            type="submit"
                            className="mt-2 bg-green-nw text-white font-semibold w-full text-3xl hover:text-green-nw
                    hover:bg-white py-1 px-4 border border-green-nw rounded-full focus:outline-none">Login
                        </button>
                        <NavLink to="sign-up"
                                 className="mt-6 text-green-800 font-bold underline focus:outline-none hover:text-green-nw">i
                            don't have an account</NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;