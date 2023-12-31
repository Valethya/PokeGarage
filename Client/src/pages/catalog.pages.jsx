import { useCards } from "../cards/customHooks";

import ContenCard from "../components/templates/contentCard";
import { Input } from "../components/atoms/inputs";
import { Select } from "../components/atoms/select";
import { SearchBar } from "../components/molecules/searchBar";
import { useState, useEffect } from "react";
import { pluralizar } from "../utils";

export default function Catalog({ filter }) {
  document.title = filter ? pluralizar(filter) : "Home";
  ////
  const [category, setCategory] = useState(filter);
  const [variable, setVariable] = useState({});
  const [sort, setSort] = useState();
  const [page, setPage] = useState("1");
  const [name, setName] = useState();
  const [inputValue, setInputValue] = useState("");
  const type = {
    partidario: "partidario",
    pokemon: "pokemon",
    objeto: "objeto",
    estadio: "estadio",
    herramienta: "herramienta",
  };

  useEffect(() => {
    const updatedVariable = { ...variable, sort };
    if (filter != category) {
      delete updatedVariable.name;
      setInputValue("");
      setPage("1");
    }

    if (!filter) {
      delete updatedVariable.type;
      delete updatedVariable.name;
      setVariable(updatedVariable);
    }
    if (filter) {
      updatedVariable.type = type[filter] ? filter : variable.type;
    }
    setVariable(updatedVariable);
    console.log("esto es: ", updatedVariable);
  }, [sort, filter]);

  const options = [
    { value: "finalPrice", label: "de menor precio" },
    { value: "-finalPrice", label: "de mayor precio" },
  ];

  const handleSelect = (selectedOption) => {
    if (filter) {
      if (type[filter]) {
        setSort(selectedOption.value);
        setVariable({
          type: filter,
          sort: selectedOption.value,
          page: page,
          ...(name && { name: name }),
        });
      }
    } else {
      setSort(selectedOption.value);
      setVariable({
        sort: selectedOption.value,
        page: page,
        ...(name && { name: name }),
      });
    }
  };
  const performanceSearch = (event) => {
    const value = event.target?.value || inputValue;
    if (filter) {
      if (type[filter]) {
        setVariable({
          type: filter,
          ...(value && { name: value }),
          sort: sort,
          page: page,
        });
      }
    } else {
      value && setName(value);
      setVariable({ ...(value && { name: value }), sort: sort, page: page });
    }
  };
  function handleSearch(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performanceSearch(event);
    }
  }
  function clickSearch(event) {
    event.preventDefault();
    performanceSearch(event);
  }

  function handlePage(numPage) {
    setPage(numPage);
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue, " holis");
  return (
    <>
      <SearchBar>
        <Input
          type="text"
          icon="search"
          handle={handleSearch}
          click={clickSearch}
          change={handleInputChange}
          value={inputValue}
        />

        <Select options={options} onSelect={handleSelect} />
      </SearchBar>
      <ContenCard
        variable={variable}
        page={page}
        handle={handlePage}
      ></ContenCard>
    </>
  );
}
