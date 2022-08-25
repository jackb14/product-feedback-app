import { useContext, useState } from "react";
import styled from "styled-components";
import { DataContext } from "../../DataContext";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { FilteredDataContext } from "./FilteredDataContext";

function Suggestions() {
  const { data } = useContext(DataContext);
  const [filteredData, setFilteredData] = useState(data);
  const value = { filteredData, setFilteredData };

  return (
    <>
      <StyledWrapper>
        <FilteredDataContext.Provider value={value}>
          <SideBar />
          <MainContent />
        </FilteredDataContext.Provider>
      </StyledWrapper>
    </>
  );
}

export default Suggestions;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 94px;
  max-width: 1110px;
  margin: auto;
  gap: 1.8rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 2rem;
    padding-top: 32px;
  }
`;
