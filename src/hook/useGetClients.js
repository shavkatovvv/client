import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useGetClients = () => {
    return useQuery({
        queryKey: ["client"],
        queryFn: () => request.get("/client").then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["client"]);
        },
    });
};
