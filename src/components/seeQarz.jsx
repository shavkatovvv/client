import React from "react";
import { UseSingleQarz } from "../hook/useSeeQarz";
import { useParams } from "react-router-dom";

export const SeeQarz = () => {
    const { id } = useParams();
    const { data } = UseSingleQarz(id);
    return (
        <div className="container">
            <h1 className="text-[20px] font-bold text-red-700">
                THIS Client QARZ IS:---{data?.qarzName}
            </h1>
        </div>
    );
};
