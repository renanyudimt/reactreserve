
function catchErrors(error, callbackError) {
  let errorMessage;
  if (error.response) {
    //the request was made and the server respond with a status code that is not in the range of 2XX
    errorMessage = error.response.data;
    console.error("Error request", errorMessage)
  } else if (error.request) {
    //the request was made but no responde was receive 
    errorMessage = error.request;
    console.error("Error request", errorMessage)
  } else {
    //something else happend in making the request that triggered an error
    errorMessage = error.message;
    console.error("Error request", errorMessage)
  }

  callbackError(errorMessage)
}

export default catchErrors;