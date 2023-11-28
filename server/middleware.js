const request = require("request");
exports.accessToken = (req, res, next) => {
  try {
    const url =
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
    const auth = new Buffer.from(
      `${process.env.SAFARICOM_CONSUMER_KEY}:${process.env.SAFARICOM_CONSUMER_SECRET}`
    ).toString("base64");

    request(
      {
        url: url,
        headers: {
          Authorization: "Basic " + auth,
        },
      },
      (error, response, body) => {
        if (error) {
          res.status(401).send({
            message: "Something went wrong when trying to process your payment",
            error: error.message,
          });
        } else {
          req.safaricom_access_token = JSON.parse(body).access_token;
          next();
        }
      }
    );
  } catch (error) {
    console.error("Access token error ", error);
    res.status(401).send({
      message: "Something went wrong when trying to process your payment",
      error: error.message,
    });
  }
};

function parseDate(val) {
  return val < 10 ? "0" + val : val;
}

exports.getTimestamp = () => {
  const dateString = new Date().toLocaleString("en-us", {
    timeZone: "Africa/Nairobi",
  });
  const dateObject = new Date(dateString);
  const month = parseDate(dateObject.getMonth() + 1);
  const day = parseDate(dateObject.getDate());
  const hour = parseDate(dateObject.getHours());
  const minute = parseDate(dateObject.getMinutes());
  const second = parseDate(dateObject.getSeconds());
  return (
    dateObject.getFullYear() +
    "" +
    month +
    "" +
    day +
    "" +
    hour +
    "" +
    minute +
    "" +
    second
  );
};
