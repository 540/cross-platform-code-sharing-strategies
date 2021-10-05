import {useNavigation} from '@react-navigation/native';

export const useNavigator = () => {
    const {navigate, goBack} = useNavigation<any>();

    return {
        goToPokemonDetail: (pokemonId: number) => navigate('PokemonDetail', {pokemonId}),
        goBack: goBack
    }
}
