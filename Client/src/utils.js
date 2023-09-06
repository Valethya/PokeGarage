export const capitalizar = (str) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
export const pluralizar = (word) => {
  if (word.endsWith("n")) {
    const plural = word + "es";
    return capitalizar(plural);
  } else {
    const plural = word + "s";
    return capitalizar(plural);
  }
};

export function formatCurrencyCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(value);
}
