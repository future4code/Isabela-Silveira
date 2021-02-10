import { validateCharacter } from "../src/ex1"

describe('testing validateCharacter', () => {

    test('Should return false for empty name', () => {

        const result = validateCharacter({
            name: '',
            life: 1500,
            defense: 650,
            force: 300
        })

        expect(result).toBe(false);

    })

    test('Should return false for life 0', () => {

        const result = validateCharacter({
            name: 'Luffy',
            life: 0,
            defense: 650,
            force: 300
        })

        expect(result).toBe(false)

    })

    test('Should return false for force 0', () => {

        const result = validateCharacter({
            name: 'Zoro',
            life: 1500,
            defense: 50,
            force: 0
        })

        expect(result).toBe(false)

    })
})