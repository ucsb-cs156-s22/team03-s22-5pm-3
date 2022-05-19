import { toast } from "react-toastify";

export function onDeleteSuccess(message) {
    console.log(message);
    toast(message);
}

export function cellToAxiosParamsDelete(cell) {
	return {
        url: "/api/recommendationrequests",
        method: "DELETE",
        params: {
            requesterEmail: cell.row.values.requesterEmail
        }
    }
}