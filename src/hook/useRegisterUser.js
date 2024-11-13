import { request } from "../config/request";
import { useMutation } from "@tanstack/react-query";
import { client } from "../client/client";

export const useRegisterUsers = () => {
    return useMutation({
        mutationFn: (data) =>
            request.post("/register", data).then((res) => res.data),
        onSuccess: () => {
            localStorage.setItem(
                "userData",
                JSON.stringify(client.getQueryData())
            );
        },
    });
};
