import {
  VisitedCountriesListItem,
  CountryImage,
  DetailsSection,
  DeleteButton,
  VisitedCountryTitle,
  VisitedCountryContainer,
} from './styledComponents'

const VisitedCountries = props => {
  const {visitedCountryDetails, deleteVisitCountry} = props
  const {name, imageUrl, id} = visitedCountryDetails

  const remove = () => {
    deleteVisitCountry(id)
  }

  return (
    <VisitedCountriesListItem>
      <VisitedCountryContainer>
        <CountryImage src={imageUrl} alt="thumbnail" />
        <DetailsSection>
          <VisitedCountryTitle>{name}</VisitedCountryTitle>
          <DeleteButton type="button" onClick={remove} data-testid="delete">
            Remove
          </DeleteButton>
        </DetailsSection>
      </VisitedCountryContainer>
    </VisitedCountriesListItem>
  )
}

export default VisitedCountries
