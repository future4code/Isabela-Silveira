/* nome,
   vida = 1500,
   defesa,
   força
*/

interface Persons {
    name: string,
    life: number,
    defense: number,
    force: number
}

export const validateCharacter = (input: Persons): boolean => {
    if (!input.name || input.life === undefined ||input.defense === undefined || input.force === undefined) {
        return false
    }

    if (input.life <= 0 || input.defense <= 0 || input.force) {
        return false
    }

    return true
} 