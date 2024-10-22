import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { MenuTabs } from './MenuBottomTab.navigation';
import { useAuth } from '../hook/auth';
import { Loading } from '../components/Loading';

export function Navigation() {
    const {user, loading} = useAuth()
    if (loading) {
        return <Loading/>
    }
    return (
        <NavigationContainer>
            <MenuTabs/>
        </NavigationContainer>
    )
}
