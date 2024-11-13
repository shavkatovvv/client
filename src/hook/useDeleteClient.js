import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../config/request";

export const useDeleteClients = () => {
    const client = useQueryClient();
    return useMutation({
        mutationFn: (id) =>
            request.delete(`/client/${id}`).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["client"]);
        },
    });
};
