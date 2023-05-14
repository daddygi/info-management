import { Inhabitant } from "../types/Inhabitant";

export const updateInhabitant = async (residentId: number, inhabitant: Inhabitant): Promise<Inhabitant> =>{
    const res = await fetch(`/api/update-resident?id=${residentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inhabitant)
    })

    if(!res.ok){
        throw new Error('Failed to update inhabitant.')
    }
    const updatedInhabitant = await res.json()
    return updatedInhabitant as Inhabitant
}