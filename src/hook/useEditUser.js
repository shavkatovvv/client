import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../config/request";

export const useEditClient = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => request.put(`/client/${id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["client"] });
        },
    });
};
