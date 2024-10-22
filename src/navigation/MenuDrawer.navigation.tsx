import { DrawerNavigationProp, createDrawerNavigator } from '@react-navigation/drawer';
import { MenuTabs } from './MenuBottomTab.navigation';
import { colors } from '../styles/globalstyle'
import { FontAwesome5, FontAwesome, Entypo, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ScreenCamera, ScreenImagens, ScreenQrCode } from '../screens';

type MenuDrawerParam = {
    Home: undefined
    Camera: undefined
    Imagem: undefined
    QrCode: undefined
}
type MenuScreenNavigation = DrawerNavigationProp<MenuDrawerParam, "Home">
export type DrawerTypes = {
    navigation: MenuScreenNavigation
}

export function DrawerNavigation() {
    const Drawer = createDrawerNavigator<MenuDrawerParam>();
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: 'rgb(143, 135, 131)'},
            headerTintColor: colors.white,
            drawerStyle: {
                backgroundColor: 'rgb(143, 135, 131)',
            },
            drawerActiveTintColor: colors.black,
            drawerInactiveTintColor: colors.black
        }}>
            <Drawer.Screen name='Home' component={MenuTabs}
                options={{
                    drawerLabel: 'Pagina Inicial',
                    headerTitle: '',
                    drawerIcon: () => (
                        <FontAwesome name="home" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Camera' component={ScreenCamera}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="camera" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='Imagem' component={ScreenImagens}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="picture-o" size={24} color={colors.white} />
                    ),
                }}
            />
            <Drawer.Screen name='QrCode' component={ScreenQrCode}
                options={{
                    drawerIcon: () => (
                        <MaterialCommunityIcons name="qrcode-scan" sixe={24} color={colors.white} />
                    ),
                }}
            />
            
        </Drawer.Navigator>
    )
}