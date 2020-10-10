//Este componente muestra los dispositivos de automatizacion agregados en forma de lista
//boton de borrar dispositivo
//boton de editar dispositivo
//los anteriores botones se encuentran ubicados en cada elemento de la lista
import React, {Component} from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import Separator from '../../utils/verticalSeparator';
class ListaDispositivos extends Component {
  renderItem({item}) {
    return <ListItem item={item} />;
  }
  keyExtractor(item) {
    return item.name;
  }
  renderSeparator() {
    return <Separator />;
  }

  render() {
    return (
      <View
        style={[
          style.container,
          {backgroundColor: this.props.theme.background},
        ]}>
        <View style={style.flatList_container}>
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.props.device_list}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  flatList_container: {
    width: '90%',
    paddingVertical: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    device_list: state.devices,
    theme: state.themes[state.currentTheme],
  };
};
export default connect(mapStateToProps)(ListaDispositivos);
