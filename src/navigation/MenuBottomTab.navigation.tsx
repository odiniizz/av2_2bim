import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Home} from '../screens';
import { FontAwesome, Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { colors } from "../styles/globalstyle"
import { ScreenCamera, ScreenImagens, ScreenQrCode } from '../screens';

type MenuTabParam = {
    HomeInicial: undefined
    Camera: undefined
    Imagem: undefined
    QrCode: undefined
}
type MenuScreenNavigation = BottomTabNavigationProp<MenuTabParam, "HomeInicial">
export type MenuTabTypes = {
    navigation: MenuScreenNavigation
}

export function MenuTabs() {
    const Tab = createBottomTabNavigator<MenuTabParam>();
    return (
        <Tab.Navigator 
            screenOptions={{ 
                tabBarActiveBackgroundColor: 'rgb(143, 135, 131)',
                tabBarActiveTintColor: colors.white,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarInactiveBackgroundColor: 'rgb(143, 135, 131)',
                tabBarInactiveTintColor: colors.white,
            }}>
            <Tab.Screen name="HomeInicial" component={Home}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={26} color={colors.white} />
                    )
                }}
            />
            <Tab.Screen name="Camera" component={ScreenCamera}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="camera" size={26} color={colors.white} />
                    )
                }}
            />
            <Tab.Screen name="Imagem" component={ScreenImagens}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="image" size={26} color={colors.white} />
                    )
                }}
            />
            <Tab.Screen name="QrCode" component={ScreenQrCode}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="qrcode" size={26} color={colors.white} />
                    )
                }}
            />
        </Tab.Navigator>
    )

}