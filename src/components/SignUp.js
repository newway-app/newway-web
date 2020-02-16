import React, {useReducer} from "react";
import BrandTextWithDesc from "./widget/BrandTextWithDesc";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-regular-svg-icons";
import {NavLink, Redirect} from "react-router-dom";
import {useForm} from "react-hook-form";
import {registerUser} from "../service/auth";
import {TaggedAlert} from "./widget/TaggedAlert";

function signUpReducer(state, action) {
    switch (action.type) {
        case 'field':
            return {
                ...state,
                [action.fieldName]: action.payload,
            };
        case 'sign-up':
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        case 'success':
            return {
                ...state,
                isSignedUp: true,
                isLoading: false
            };
        case 'error':
            return {
                ...state,
                error: 'something went wrong',
                isLoading: false
            };
        default:
            break;
    }
    return state;
}

const initialState = {
    isLoading: false,
    isSignedUp: false,
    isAgree: false,
    hasAgreeError: false,
    error: ''
};

const SignUp = () => {
    const [state, dispatch] = useReducer(signUpReducer, initialState);
    const {isLoading, isSignedUp, isAgree, hasAgreeError, error} = state;
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {

        if (isAgree !== true) {
            dispatch({type: 'field', fieldName: 'hasAgreeError', payload: true});
            return;
        }

        dispatch({type: 'sign-up'});
        registerUser(data).then(r => {
            if (r.status === 201) {
                dispatch({type: "success"});
            }
        }).catch(err => {
            setTimeout(() => {
                dispatch({type: 'field', fieldName: 'error', payload: ''})
            }, 2000);
            dispatch({type: "error"});
        });
    };

    return (
        <div>
            {isSignedUp ? <Redirect to="/"/> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container max-w-sm mx-auto min-h-screen flex flex-col">
                    <div className="flex flex-col flex-1 items-center justify-center px-6 py-8 ">
                        {error ? <TaggedAlert title="error" message={error}/> : null}
                        <BrandTextWithDesc/>
                        <input type="text"
                               name="username"
                               placeholder="username"
                               ref={register({required: true, min: 1})}
                               className="mt-5 block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.username && "give me a name"}
                        <input type="text"
                               name="email"
                               placeholder="email"
                               ref={register({required: true, min: 1})}
                               className="block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.email && "give me a email"}
                        <input type="password"
                               name="password"
                               placeholder="password"
                               ref={register({required: true})}
                               className="block border border-gray-500 w-full p-3 text-xl rounded rounded-full mb-2 focus:outline-none"/>
                        {errors.password && "give me a pass"}
                        <div onClick={() => {
                            dispatch({type: 'field', fieldName: 'isAgree', payload: !isAgree});
                            if (hasAgreeError) {
                                dispatch({type: 'field', fieldName: 'hasAgreeError', payload: false});
                            }
                        }} className="cursor-pointer justify-start items-stretch mb-2 focus:outline-none mt-2">
                            <FontAwesomeIcon className={`${isAgree ? "text-green-900" : "text-gray-500"}`}
                                             icon={faCheckCircle}/> i agree to the <span
                            className="text-green-nw">terms</span> and <span
                            className="text-green-nw">privacy policy</span>.
                        </div>
                        {hasAgreeError ? "so you are not agree with me?" : null}
                        <button className="mt-2 bg-green-nw text-white font-semibold w-full text-3xl
                hover:text-green-nw  hover:bg-white py-1 px-4 border border-green-nw rounded-full focus:outline-none"
                                disabled={isLoading}>Sign Up
                        </button>
                        <NavLink to="/login"
                                 className="mt-6 text-green-800 font-bold underline focus:outline-none hover:text-green-nw">already
                            have an account
                        </NavLink>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SignUp;