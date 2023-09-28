const { default: axios } = require('axios');

const apiClient = axios.create({
  baseURL: '/api',
});

// TODO: Next version could consider interceptors
// const STATUS_UNAUTHORIZED = 401;
// const STATUS_FORBIDDEN = 403;
// const getErrorMessage = (error) => {
//     if (error.response?.status === STATUS_UNAUTHORIZED) {
//         // User not auth, ask to relogin
//         signIn(undefined, { callbackUrl: config.callbackUrl });
//         return "Please login";
//     }

//     if (error.response?.status === STATUS_FORBIDDEN) {
//         // User not authorized, must subscribe/purchase/pick a plan
//         return "Pick a plan to use this feature";
//     }

//     return error?.response?.data?.error || error.message || error.toString();
// };

// apiClient.interceptors.response.use(
//     response => response,
//     error => {
//         const errorMessage = getErrorMessage(error);

//         console.log("here", { errorMessage });
//         toast({
//             title: "Error",
//             description: errorMessage
//         });

//         return Promise.reject(error);
//     }
// );

export { apiClient };
