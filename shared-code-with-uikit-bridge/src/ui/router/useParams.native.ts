import {RouteProp, useRoute} from '@react-navigation/native';
import {RouterParams} from './Router.definition';

export const useParams = <Screen extends keyof RouterParams>() => {
    const {params}: RouteProp<RouterParams, Screen> = useRoute<RouteProp<RouterParams, Screen>>();

    return params
}
