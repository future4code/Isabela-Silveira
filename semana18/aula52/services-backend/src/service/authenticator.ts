import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types/types';

export function generateToken(input: AuthenticationData): string {
    const token: string = jwt.sign({
        id: input.id,
        role: input.role
    },
        process.env.JWT_KEY as string,
        {expiresIn: '1y'});

        return token;
    
}

export function getTokenData(token: string): AuthenticationData {
    const payload = jwt.verify(token, process.env.JWT_key as string);

    return payload as AuthenticationData;
}