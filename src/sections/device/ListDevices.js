//Este componente muestra los dispositivos de automatizacion agregados en forma de lista
//boton de borrar dispositivo
//boton de editar dispositivo
//los anteriores botones se encuentran ubicados en cada elemento de la lista
import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import connect from 'react-redux';
import Item from './item';
class ListaDispositivos extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={this.props.device_list}
          renderItem={({item}) => {
            <Item item={item} />;
          }}
        />
      </View>
    );
  }
}

const mapToStateToProps = (state) => {
  return {
    device_list: state.devices,
  };
};
export default connect(mapToStateToProps)(ListaDispositivos);
