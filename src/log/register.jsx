import React from "react";
import { useForm } from "react-hook-form";
import { useRegisterUsers } from "../hook/useRegisterUser";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { mutate } = useRegisterUsers();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: (data) => {
                localStorage.setItem("userData", JSON.stringify(data));

                navigate("/app");
            },
            onError: (err) => {
                console.log(err);
            },
        });
    };

    return (
        <section>
            <div className="container">
                <div>
                    <div className="absolute rounded-[20px] w-[550px] p-[20px] bg-gray-500 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                        <h1 className="text-center text-[20px] font-medium text-white">
                            REGISTER
                        </h1>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-[20px]"
                        >
                            <div className="mt-[20px] ">
                                <input
                                    className="p-[10px] w-full rounded-[20px]"
                                    type="email"
                                    {...register("email")}
                                    placeholder="email"
                                />
                            </div>
                            <div className="mt-[20px] mb-[20px]">
                                <input
                                    className="p-[10px] w-full rounded-[20px]"
                                    type="password"
                                    {...register("password")}
                                    placeholder="password"
                                />
                            </div>

                            <div className="mt-[20px] mb-[20px]">
                                <input
                                    className="p-[10px] w-full rounded-[20px]"
                                    type="name"
                                    {...register("name")}
                                    placeholder="name"
                                />
                            </div>
                            <button
                                type="submit"
                                className="p-[10px] bg-teal-500 w-full text-[20px] font-medium text-white rounded-[10px]"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
