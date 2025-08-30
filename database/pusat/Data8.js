async function VocalRemover(url) {
  return new Promise(async (resolve, reject) => {
    const axios = require('axios')
      const { data: res } = await axios.post(
      "https://www.vocalremoveroak.com/api/order/create/",
      {
        code: "ygfl",
        url,
      }
    );
    const OrderID = res.data.orderNo;
    let status = res.data.status;
    let data;
    while (status !== "SUCCEED") {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const { data: res } = await axios.get(
        `https://www.vocalremoveroak.com/api/order/${OrderID}/`
      );
      status = res.data.status;
      data = res.data;
    }
    resolve(data);
  });
}

module.exports = { VocalRemover }