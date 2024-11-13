import React from "react";
import { useGetClients } from "../hook/useGetClients";
import { useDeleteClients } from "../hook/useDeleteClient";
import { useEditClient } from "../hook/useEditUser";
import { useCreateQarz } from "../hook/useCreateQarz";
import { useGetQarz } from "../hook/useGetQarz";

export const Qarz = () => {
    const { mutate: useDeleteClient } = useDeleteClients();
    const { mutate: editUser } = useEditClient();
    const { data, refetch } = useGetClients();
    const { mutate: createQarz } = useCreateQarz();
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

    const QarzCreate = (item) => {
        const newQarzName = prompt("Enter new Qarz name");
        if (newQarzName) {
            createQarz(
                { clientId: item.id, qarzName: newQarzName },
                {
                    onSuccess: () => {
                        refetch();
                    },
                }
            );
        }
    };

    const Editqarz = (item) => {
        const newQarz = prompt("Enter new Qarz name");
        if (newQarz) {
            editUser({
                id: item.id,
                data: { ...item, qarzName: newQarz },
            });
        }
    };

    return (
        <div className="container">
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
                    <div>
                        <h1 className="text-[20px] font-semibold text-white">
                            {item.qarzName}
                        </h1>
                    </div>

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
                    {!item.qarzName && (
                        <button
                            onClick={() => QarzCreate(item)}
                            className="bg-blue-500 text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px] ml-[20px]"
                        >
                            ADD QARZ
                        </button>
                    )}
                    {item.qarzName && (
                        <button
                            onClick={() => Editqarz(item)}
                            className="bg-gray-500 text-[20px] text-white font-semibold rounded-[10px] py-[8px] px-[20px] mt-[10px] ml-[20px]"
                        >
                            EDIT QARZ
                        </button>
                    )}
                </div>
            ))}
        </div>
    );
};
