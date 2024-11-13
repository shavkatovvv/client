import { useMutation } from "@tanstack/react-query";

import { request } from "../config/request";

import { client } from "../client/client";

export const useCreateQarz = () => {
    return useMutation({
        mutationFn: (data) =>
            request.post("/qarz", data).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["client"]);
        },
    });
};
