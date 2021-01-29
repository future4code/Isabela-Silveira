import * as jwt from 'jsonwebtoken';
import { AuthenticationData } from '../types/types';

export function generateToken(input: AuthenticationData): string {
    
    const token: string = jwt.sign({
        id: input.id 
    }, 
        process.env.JWT_KEY as string, 
        {expiresIn: process.env.JWT_EXPIRE_TIME});
        
        return token;

}

export function getTokenData(token: string): AuthenticationData {
    
    const payload = jwt.verify(token, process.env.JWT_KEY as string);

    return payload as AuthenticationData;
}