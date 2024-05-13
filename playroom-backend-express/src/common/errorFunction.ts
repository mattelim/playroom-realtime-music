export function errorFn(error, res) {
  // Consider adjusting the error handling logic for your use case
  if (error.response) {
    if (error.response.status === 200) {
      console.error(error.response.status, "No data found.");
      res.status(200).json([]);
      return;
    }
    console.error(error.response.status, error.response.data);
    res.status(error.response.status).json(error.response.data);
  } else {
    console.error(`Error with API request: ${error.message}`);
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.'
      }
    });
  }
}

export function dbErrorFn(error, res) {
  // Consider adjusting the error handling logic for your use case
  if (error.response) {
    if (error.response.status === 200) {
      console.error(error.response.status, "No data found.");
      res.status(200).json([]);
      return;
    }
    console.error(error.response.status, error.response.data);
    res.status(error.response.status).json(error.response.data);
  } else {
    console.error(`Error with DB request: ${error.message}`);
    res.status(500).json({
      error: {
        message: 'An error occurred during your request.'
      }
    });
  }
}