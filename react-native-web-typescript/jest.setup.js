export const mockNavigation = {
    goBack: jest.fn(),
    navigate: jest.fn(),
    push: jest.fn(),
    popToTop: jest.fn()
}
jest.mock('@react-navigation/native', () => {
    return {
        useRoute: () => jest.fn(),
        useNavigation: () => ({
            goBack: mockNavigation.goBack,
            navigate: mockNavigation.navigate,
            push: mockNavigation.push,
            popToTop: mockNavigation.popToTop
        })
    }
})
