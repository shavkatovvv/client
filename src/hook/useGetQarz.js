import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useGetQarz = () => {
    return useQuery({
        queryKey: ["client"],
        queryFn: () => request.get("/qarz").then((res) => res.data),
        onSuccess: () => {
            client.invalidateQueries(["client"]);
        },
    });
};
