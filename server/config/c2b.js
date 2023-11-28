var axios = require("axios").default;
const config = require("./mpesaToken");

async function c2b(payload, cbSucess, cbBug) {
  const { number, amount } = payload;
  console.log({ payload });

  var api = axios.create({
    baseURL: config.mpesa.c2b.baseUrl,
  });

  const data = {
    input_TransactionReference: config.mpesa.c2b.input_TransactionReference,
    input_CustomerMSISDN: number,
    input_Amount: amount,
    input_ThirdPartyReference:
      config.mpesa.c2b.input_ThirdPartyReference + new Date().getTime(),
    input_serviceProviderCode: config.mpesa.c2b.input_serviceProviderCode,
  };
  api
    .post(
      "/ipg/v1x/c2bPayment/singleStage/",
      {
        input_TransactionReference: data.input_TransactionReference,
        input_CustomerMSISDN: data.input_CustomerMSISDN,
        input_Amount: data.input_Amount,
        input_ThirdPartyReference: data.input_ThirdPartyReference,
        input_serviceProviderCode: data.input_serviceProviderCode,
      },
      {
        headers: {
          Authorization: config.mpesa.auth,
          Origin: config.mpesa.c2b.origin,
        },
      }
    )
    .then((resp) => {
      cbSucess(resp);
    })
    .catch((error) => {
      console.log(error?.message);
      cbBug(error);
    });
}

module.exports = {
  c2b,
};
