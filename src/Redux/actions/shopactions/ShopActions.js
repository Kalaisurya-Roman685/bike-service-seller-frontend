import { toast } from "react-toastify";


export const shopCreate = (data, toast, history) => async (dispatch) => {
    try {
        const response = await ProjectCreate(data);
        setTimeout(() => {
            history("/portfolio/projects");
        }, 1000);
        toast.success(response?.message);
    }
    catch (err) {
        toast.error(err?.response?.data?.message);
    }
}

