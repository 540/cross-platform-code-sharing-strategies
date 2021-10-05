import {useHistory} from "react-router-dom";

export const useNavigator = () => {
    const history = useHistory<any>();

    return {
        goToPokemonDetail: (pokemonId: number) => history.push('/detail', {pokemonId}),
        goBack: history.goBack
    }
}
