import React from "react";
import { useForm } from "react-hook-form";
import { useCreateClients } from "../hook/useCreateClient";
import { useGetClients } from "../hook/useGetClients";
import { useDeleteClients } from "../hook/useDeleteClient";
import { useEditClient } from "../hook/useEditUser";
import { Link, useNavigate } from "react-router-dom";
import { UseSingleQarz } from "../hook/useSeeQarz";

export const Form = () => {
    const { handleSubmit, register, reset } = useForm();
    const { data } = useGetClients();
    const { mutate } = useCreateClients();
    const { mutate: useDeleteClient } = useDeleteClients();
    const { mutate: editUser } = useEditClient();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: () => {
                reset();
            },
        });
    };

    const DELETE = (id) => {
        useDeleteClient(id, {
            onSuccess: () => {},
        });
    };

    const Edit = (item) => {
        const newTitle = prompt("Enter new title");
        const newDesc = prompt("Enter new description");
        const born = prompt("Enter new born");
        if (newTitle && newDesc && born) {
            editUser({
                id: item.id,
                data: { title: newTitle, description: newDesc, born: born },
            });
        }
    };

    return (
        <div className="container">
            <Link className="py-[80px] text-green-600 " to="/qarz">
                About Qarz
            </Link>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-[20px] mb-[80px]"
            >
                <div className="mt-[20px] w-[700px]">
                    <input
                        className="p-[20px] w-[500px] bg-gray-500 rounded-[20px] text-white "
                        type="text"
                        {...register("title")}
                        placeholder="Title"
                    />
                </div>
                <div className="mt-[20px] mb-[20px]">
                    <input
                        className="p-[20px] w-[500px] bg-gray-500 rounded-[20px] text-white "
                        type="text"
                        {...register("description")}
                        placeholder="Description"
                    />
                </div>

                <div className="mt-[20px] mb-[20px]">
                    <input
                        className="p-[20px] w-[500px] bg-gray-500 rounded-[20px] text-white "
                        type="text"
                        {...register("born")}
                        placeholder="born date"
                    />
                </div>
                <button
                    type="submit"
                    className="p-[10px] bg-green-500 rounded-[10px] text-white "
                >
                    Send
                </button>
            </form>
            {data?.map((item) => (
                <div
                    key={item.id}
                    className="w-[400px] rounded-[20px] bg-teal-500 p-[30px] mb-[20px] mt-[20px]"
                >
                    <h1 className="text-[20px] font-semibold text-white">
                        {item.title}
                    </h1>
                    <h3 className="text-[20px] font-semibold text-white">
                        {item.description}
                    </h3>
                    <h3 className="text-[20px] font-semibold text-white">
                        {item.born}
                    </h3>
                    <button
                        onClick={() => DELETE(item.id)}
                        className="bg-red-500 text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px]"
                    >
                        DELETE
                    </button>
                    <button
                        onClick={() => Edit(item)}
                        className="bg-black text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px] ml-[20px]"
                    >
                        EDIT
                    </button>
                    <button
                        onClick={() => navigate(`/seeqarz/${item.id}`)}
                        className="bg-green-500 text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px] ml-[10px]"
                    >
                        SHOW
                    </button>
                </div>
            ))}
        </div>
    );
};
