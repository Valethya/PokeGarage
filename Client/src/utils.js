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

export const performanceSearch = (event) => {
  const value = event.target.value;
  if (filter) {
    if (type[filter]) {
      setVariable({ type: filter, name: value, sort: sort, page: page });
    }
  } else {
    setName(value);
    setVariable({ name: value, sort: sort, page: page });
  }
};

export function formatCurrencyCLP(value) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(value);
}
