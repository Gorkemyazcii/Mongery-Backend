const data = require("../orders.json");

async function getOrders(req, res, next) {
  const sort_by = req.query?.sort_by || "subtotal";
  const sort_order = req.query?.sort_order || "asc";
  const sort_from = req.query?.sort_from || "orders";

  if (sort_from === "orders") {
    const formattedOrders = data.orders?.map((order) => {
      return {
        ...order,
        primaryCurrencySubtotal: order?.subtotal * order?.primary_rate,
        secondaryCurrencySubtotal: order?.subtotal * order?.secondary_rate,
        primaryCurrency: "USD",
        secondaryCurrency: "TL",
      };
    });

    const sortedOrders = formattedOrders?.sort((a, b) => {
      if (a?.[sort_by] < b?.[sort_by]) {
        return sort_order === "asc" ? -1 : 1;
      } else if (a?.[sort_by] > b?.[sort_by]) {
        return sort_order === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    res.json(sortedOrders);
  } else {
    const formattedProducts = data.orders
      ?.map((order) => {
        const products = JSON.parse(order.products);
        return products.map((product) => {
          const subtotal = product?.unit_price * product?.quantity;
          return {
            ...product,
            primaryCurrencySubtotal:
              subtotal * product?.stocklogs[0].primary_rate,
            secondaryCurrencySubtotal:
              subtotal * product?.stocklogs[0].secondary_rate,
            primaryCurrency: "USD",
            secondaryCurrency: "TL",
          };
        });
      })
      .flat();
    const sortedProducts = formattedProducts?.sort((a, b) => {
      if (a?.[sort_by] < b?.[sort_by]) {
        return sort_order === "asc" ? -1 : 1;
      } else if (a?.[sort_by] > b?.[sort_by]) {
        return sort_order === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    res.json(sortedProducts);
  }
}

module.exports = {
  getOrders,
};
