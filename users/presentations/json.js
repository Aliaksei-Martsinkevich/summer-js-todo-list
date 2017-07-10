export default (data, req, res, next) => {
  if (data instanceof Error) {
    next(data);
  } else {
    res.status(200).json(data);
  }
};
