import { useLocation} from "react-router-dom";
import {RouterParams} from './Router.definition';

export const useParams = <Screen extends keyof RouterParams>() => {
    const {state: params} : {state: RouterParams[Screen]} = useLocation();

    return params
}
