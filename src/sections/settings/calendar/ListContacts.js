import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ContactItem from './ContactItem';
import {connect} from 'react-redux';

class ListContact extends Component {
  renderItem({item}) {
    return <ContactItem item={item} theme={this.props.theme} />;
  }
  keyExtractor(item) {
    return item.number.toString();
  }

  render() {
    return (
      <View style={style.FlatList_container}>
        <FlatList
          style={style.FlatList}
          data={this.props.contacts}
          renderItem={this.renderItem.bind(this)}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  FlatList_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  FlatList: {
    width: '90%',
  },
});

const mapStateToProps = (state) => {
  return {
    theme: state.themes[state.currentTheme],
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps)(ListContact);
