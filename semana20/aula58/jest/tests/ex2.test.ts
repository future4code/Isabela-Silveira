import { performPurchase, User } from "../src/ex1"

describe('performPurchase', () => {
    test('testing whether the balance is greater than the purchase amount', () => {
        const user: User = {
            name: 'Isabela',
            balance: 500
        }
        const result = performPurchase(user,60)

        expect(result).toBeDefined()
    })

    test('testing whether the balance equals the purchase amount', () => {
        const user: User = {
            name: 'Isabela',
            balance: 800
        }

        const result = performPurchase(user, 800)

        expect(result).toBeDefined()
    })
       
    test('testing whether the balance is less than the purchase amount', () => {
        const user: User = {
            name: 'Isabela',
            balance: 700
        }

        const result = performPurchase(user, 800)

        expect(result).toBeDefined()
    })
        
})