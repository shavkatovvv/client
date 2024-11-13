import React from "react";
import { Form } from "../components/form";

export const MainLayout = () => {
    return (
        <div className="container">
            <header className="bg-blue-500 py-[50px]">
                <div className="container">
                    <div className="flex justify-center items-center">
                        <h1 className="text-[20px] font-medium text-white">
                            HEADER
                        </h1>
                    </div>
                </div>
            </header>
            <Form />
        </div>
    );
};
