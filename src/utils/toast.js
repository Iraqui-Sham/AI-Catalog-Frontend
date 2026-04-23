export const showToast = (msg) => {
  const toast = document.createElement("div");
  toast.innerText = msg;

  toast.className =
    "fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
};