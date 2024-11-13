import { request } from "../config/request";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export const UseSingleQarz = (id) => {
    const client = useQueryClient();
    return useQuery({
        queryKey: [`qarz`],
        queryFn: () => request.get(`/qarz/${id}`).then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["qarz"]);
        },
    });
};
