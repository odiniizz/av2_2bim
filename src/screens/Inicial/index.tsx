import { ImageBackground, Text, View } from "react-native";
import { styleContainer, styleText } from "../../styles/globalstyle"
import { styles } from "./styles"
import { MenuTabTypes } from "../../navigation/MenuBottomTab.navigation";

export function Inicial({ navigation }: MenuTabTypes) {
    return (
        <ImageBackground style={styleContainer.container}>
            <View style={styleContainer.container}>
                <View>
                    <Text style={styleText.textTitle}>Página Inicial</Text>
                    <Text style={styles.text}>capricha nos ponto aí :)</Text>
                </View>
            </View>
            
        </ImageBackground>
    )
}
