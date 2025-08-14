import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { View, Text, Image } from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] rounded-xl bg-primary">
        <View className="flex justify-center items-center bg-white rounded-full h-24 w-24">
          <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={require('../../assets/images/no-product-image.png')}
                    style={{ width: 300, height: 300 }}
                  />
                </View>
        </View>
      </View>

      {/* Draweritems */}

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
export default CustomDrawer;
