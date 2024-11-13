import { useMutation } from "@tanstack/react-query";

import { request } from "../config/request";

import { client } from "../client/client";

export const useCreateClients = () => {
    return useMutation({
        mutationFn: (data) =>
            request.post("/client", data).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["client"]);
        },
    });
};
