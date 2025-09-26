//Higher Order function. A function that received function as a pharameter also call it. ex: const fo = (fn)=> ()=> {}
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

//2nd way
// const asyncHandlerSecondWay = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(error.code || 500).json({
//       message: error.message,
//       success: false,
//     });
//   }
// };
export { asyncHandler };
