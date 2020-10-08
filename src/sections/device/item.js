import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Item = ({item}) => {
  return (
    <View style={style.container}>
      <Image style={style.device_photo} />
      <View style={style.name_phone_container}>
        <Text style={style.name_device}></Text>
        <Text style={style.phone_device}></Text>
      </View>

      <View style={style.icons_container}>
        <Image style={style.delete_icon}></Image>
        <Image style={style.edit_icon}></Image>
      </View>
    </View>
  );
};
const style=StyleSheet.create({
  container:{

  },
  device_photo:{

  },
  name_phone_container:{
  
  },
  name_device:{

  },
  phone_device:{

  },
  icons_container:{

  },
  delete_icon:{

  },
  edit_icon:{
    
  }
})

export default Item;
