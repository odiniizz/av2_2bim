import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import { useAuth } from '../../hook/auth';
import { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles'
import { ComponentButtonInterface, ComponentLoading } from '../../components';

export function QrCode() {
    const { user } = useAuth()
    const [scanned, setScanned] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    if (!permission) {
        return <ComponentLoading />
    }
    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>Você precisa dar permissão para acesso à câmera</Text>
                <TouchableOpacity onPress={requestPermission}>Solicitar permissão</TouchableOpacity>
            </View>
        );
    }
    function handleBarcodeScanner({ data }: BarcodeScanningResult) {
        Alert.alert(`${data}`)
        setScanned(true)
    }
    return (
        <>
            {(
                <Image source={{ uri: `https://image-charts.com/chart?chs=500x500&cht=qr&chl=${'oi'}&choe=UTF-8` }} style={styles.qrcode} />
            )}
            {!scanned ? (
                <CameraView
                    style={styles.qrcode}
                    barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
                    onBarcodeScanned={handleBarcodeScanner}
                />
            ) : (
                <ComponentButtonInterface onPressI={() => setScanned(false)} title='Scanear Novamente' type='primary' />
            )}
        </>
    )
}