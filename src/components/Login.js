import React from "react";
import BrandTextWithDesc from "./widget/BrandTextWithDesc";
import {NavLink} from "react-router-dom";
import {useForm} from "react-hook-form";
import {login} from "../service/auth";

const Login = () => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        login(data).then(r => {
            if (r.status === 200) {
                console.log("adaaam");
            }
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container max-w-sm mx-auto min-h-screen flex flex-col">
                <div className="flex flex-col flex-1 items-center justify-center px-6 py-8 ">
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
    );
};

export default Login;