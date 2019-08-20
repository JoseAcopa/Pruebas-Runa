import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as regionActions from '../../modules/region';
import { Container, Title, List, Pokemon } from './styled';

class Region extends React.Component {
  componentDidMount(){
    let idRegion = Number(this.props.match.params.id)
    this.props.getRegionId(idRegion)
  }

  render(){
    let regionPokemones = this.props.region.region.pokemon_entries !== undefined ? this.props.region.region.pokemon_entries : []

    return(
      <Container>
        <Title>Lista de Pokémon de la Region {this.props.match.params.region}: {regionPokemones.length}</Title>
        <List>
          {
            regionPokemones.map((pokemones, i) => {
              return (
                <Pokemon to="/pokemon/info" key={i}>{pokemones.pokemon_species.name}</Pokemon>
              )
            })
          }
        </List>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  home: state.home,
  region: state.region
})

export default connect(mapStateToProps, dispatch => bindActionCreators(regionActions, dispatch))(Region)
