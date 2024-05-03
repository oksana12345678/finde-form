import { toast } from "react-toastify";

const Error = () => {
  toast.error("Sorry, something went wrong, try again later!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
export default Error;
