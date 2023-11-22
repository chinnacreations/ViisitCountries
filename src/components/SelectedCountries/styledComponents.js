import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #000000;
  padding: 20px;
  min-height: 100vh;
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
`
export const NoVisitedCountries = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
`
export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 32px;
`
export const VisitedCountriesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
  flex-wrap: wrap;
  list-style-type: none;
`
export const CountriesLists = styled.ul`
  padding: 0px;
  list-style-type: none;
  max-height: 40vh;
  overflow-y: scroll;
  border: 1px solid #94a3b8;
  border-radius: 6px;
`
