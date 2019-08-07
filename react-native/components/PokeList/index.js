import React, {PureComponent} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';

import PokeCard from '../PokeCard';

export default class PokeList extends PureComponent {
  state = {
    pokeList: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
      const pokemon = await pokemonApiCall.json();
      this.setState({pokeList: pokemon.results, loading: false});
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  renderItem(data) {
    return <PokeCard {...data.item} />
  }

  render() {
    const {pokeList, loading} = this.state;

    if (!loading) {
      return <FlatList
        data={pokeList}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.name}
      />
    } else {
      return <ActivityIndicator/>
    }
  }
}
