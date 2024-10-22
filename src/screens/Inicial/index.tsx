import { ImageBackground, Text, View } from "react-native";
import { styleContainer, styleText } from "../../styles/globalstyle"
import { styles } from "./styles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";
import { useAuth } from "../../hook/auth";
import { ComponentButtonInterface } from "../../components"

export function Inicial({ navigation }: MenuTabTypes) {
    const { user, signOut } = useAuth()
    return (
        <ImageBackground style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View>
                    <Text style={styleText.textTitle}>Plant</Text>
                    <Text style={styles.text}>seu diário botânico pessoal</Text>
                </View>
            </View>
            
        </ImageBackground>
    )
}