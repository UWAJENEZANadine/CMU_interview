// Function to calculate discount percentage
function calculateDiscount(orders, totalPriceOfThreeHighestOrders) {
    if (orders >= 10) {
      if (totalPriceOfThreeHighestOrders >= 10000) {
        return 10; // 10% discount
      } else if (totalPriceOfThreeHighestOrders >= 6000) {
        return 5; // 5% discount
      } else {
        return 1; // 1% discount
      }
    } else {
      return 0; // No discount if less than 10 orders
    }
  }
  
  module.exports = calculateDiscount;
  