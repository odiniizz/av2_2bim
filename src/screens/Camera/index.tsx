import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture } from 'expo-camera';
import { useRef, useState } from "react";
import { Button, Text, TouchableOpacity, View, Alert, ImageBackground } from 'react-native';
import { styles } from './styles'
import { colors } from '../../styles/globalstyle';
import { AntDesign, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library'
import { ComponentLoading } from '../../components';

export function Camera() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [permissionMedia, requestPermissionMedia] = MediaLibrary.usePermissions();
    const ref = useRef<CameraView>(null)
    const [photo, setPhoto] = useState<CameraCapturedPicture>()

    if (!permission) {
        return <ComponentLoading />
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.container}>Você precisa dar permissão para acesso à Câmera</Text>
                <Button onPress={requestPermission} title="grand permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    async function takePicture() {
        if (ref.current) {
            const picture = await ref.current.takePictureAsync({ imageType: 'jpg', quality: 0 })
            setPhoto(picture)
        }
    }

    async function savePhoto() {
        if (permissionMedia!.status !== 'granted') {
            await requestPermissionMedia();
        }
        const asset = await MediaLibrary.createAssetAsync(photo!.uri)
        MediaLibrary.createAlbumAsync("Images", asset, false)
        Alert.alert("Imagem salva com sucesso")
    }

    if (photo) {
        return (
            <ImageBackground source={{ uri: photo.uri }} style={styles.camera}>
                <View style={styles.headerSave}>
                    <TouchableOpacity onPress={() => setPhoto(undefined)}>
                        <MaterialCommunityIcons name="keyboard-backspace" size={50} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={savePhoto}>
                        <Entypo name="save" size={50} color="black" />
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={ref}>
                <View style={styles.headerCamera}>
                    <TouchableOpacity onPress={toggleCameraFacing}>
                        <AntDesign name="sync" size={50} color={colors.whiteBackground}></AntDesign>
                    </TouchableOpacity>
                </View>
                <View style={styles.footerCamera}>
                    <TouchableOpacity onPress={takePicture} style={styles.ball} />
                </View>
            </CameraView>
        </View>
    );
}