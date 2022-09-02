const expenseAppService = {
  convertToHumanDate: (date) => {
    return new Date(date).toLocaleDateString("UTC", {
      year: "numeric",
      month: "long",
    });
  },
  convertCurrency: (amount, currency) => {
    // Format the price above to USD, INR, EUR using their locales.
    let formatCurrency = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: `${currency}`,
    });
    return formatCurrency.format(amount);
  },
  validateNumberField: (number) => {
    const numberRegEx = /\-?\d*\.?\d{1,2}/;
    return numberRegEx.test(String(number).toLowerCase());
  },
};

export default expenseAppService;
