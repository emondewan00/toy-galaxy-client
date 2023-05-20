import toast, { Toaster } from "react-hot-toast";

const Toast = () => {
  const notify = () => toast.success("Here is your toast.",{position:"top-right"});
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default Toast;
