

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  const body = {
    message: "Hello from Lambda"
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify(body, event),
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  };
  return response;
};
