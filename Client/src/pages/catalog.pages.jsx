import { useCards } from "../cards/customHooks";

import ContenCard from "../components/templates/contentCard";
import { Input } from "../components/atoms/inputs";
import { Select } from "../components/atoms/select";
import { SearchBar } from "../components/molecules/searchBar";
import { useState, useEffect } from "react";
import Pagination from "../components/molecules/pagination";
import { performanceSearch, pluralizar } from "../utils";

export default function Catalog({ filter }) {
  document.title = filter ? pluralizar(filter) : "Home";
  ////
  const [variable, setVariable] = useState({});
  const [sort, setSort] = useState();
  const [page, setPage] = useState("1");
  const [name, setName] = useState();

  const type = {
    partidario: "partidario",
    pokemon: "pokemon",
    objeto: "objeto",
    estadio: "estadio",
    herramienta: "herramienta",
  };

  useEffect(() => {
    const updatedVariable = { ...variable, sort };
    if (filter) {
      updatedVariable.type = type[filter] ? filter : variable.type;
    }
    setVariable(updatedVariable);
  }, [sort, filter]);

  const options = [
    { value: "price", label: "de menor precio" },
    { value: "-price", label: "de mayor precio" },
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

  function handleSearch(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      performanceSearch();
    }
  }
  function clickSearch() {
    performanceSearch();
  }

  function handlePage(numPage) {
    setPage(numPage);
  }
  return (
    <>
      <SearchBar>
        <Input
          type="text"
          icon="search"
          handle={handleSearch}
          click={clickSearch}
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
