
import LogoutIconButton from '@/presentation/auth/components/LogoutIconButton';
import CustomDrawer from '@/presentation/shared/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        // headerShown: false,
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'indigo',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          drawerLabel: 'Productos',
          title: 'Productos',

          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Usuario',
          title: 'Usuario',

          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Horario',
          title: 'Horario',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

           <Drawer.Screen
        name="logout/index"
        options={{
          drawerLabel: 'Cerrar Sesión',
          title: 'cerrar',
          drawerIcon: ({ color, size }) => (
            <LogoutIconButton />
          ),
        }}
      />

    </Drawer>
  );
};
export default DrawerLayout;


/**
 *   <Stack.Screen
        name="(home)/index"
        options={{
          title: 'Productos',
          headerLeft: () => <LogoutIconButton />,
        }}
      />
 */