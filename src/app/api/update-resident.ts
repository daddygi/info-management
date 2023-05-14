import { NextApiRequest, NextApiResponse } from 'next';
import { Inhabitant } from '../types/Inhabitant';
import { getInhabitants } from '../utils/inhabitants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id: residentId } = req.query
    const { method, body } = req

    if (method !== 'PUT'){
        res.setHeader('Allow', ['PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
        return
    }

    const inhabitants = getInhabitants()

    const updatedInhabitants = inhabitants.map((inhabitant: Inhabitant) => {
        if(inhabitant.residentid.toString() === residentId){
            const updatedInhabitant = {...inhabitant, ...body, dateregistered: new Date ()}
            return updatedInhabitant
        }
        return inhabitant
    })

    localStorage.setItem('inhabitants', JSON.stringify(updatedInhabitants))
    res.status(200).json({ message: 'Inhabitant updated successfully'})
}