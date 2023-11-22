import {CountryName, Button, CountryListItem, Para} from './styledComponents'

const CountriesList = props => {
  const {details, addVisitCountry} = props
  const {id, name, isVisited} = details

  const countryText = isVisited ? 'Visited' : 'Visit'

  const addCountry = () => {
    addVisitCountry(id)
  }

  return (
    <CountryListItem>
      <CountryName>{name}</CountryName>
      {isVisited === true ? (
        <Para>{countryText}</Para>
      ) : (
        <Button type="button" onClick={addCountry}>
          {countryText}
        </Button>
      )}
    </CountryListItem>
  )
}
export default CountriesList
