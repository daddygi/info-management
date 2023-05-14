import * as React from 'react';
import { useState, useEffect } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Inhabitant } from '../../types/Inhabitant';
import { updateInhabitant } from '../../utils/api';
import { getInhabitantById} from '../../utils/inhabitants';
import { useRouter } from 'next/router';

type Props = {
    inhabitant: Inhabitant;
}

export const getServerSideProps: GetServerSideProps<Props> = async (context: GetServerSidePropsContext) =>{
    const residentid = context.params?.residentid as string
    const inhabitant = await getInhabitantById(Number(residentid))
    return { props: { inhabitant }} as {props: Props}
}

const UpdateProfilePage = ({ inhabitant }: Props) =>{
    const [updatedInhabitant, setUpdatedInhabitant] = useState<Inhabitant>(inhabitant)

    const router = useRouter();
    const {residentid} = router.query;

    useEffect(() => {
        const fetchInhabitant = async () => {
            if (typeof residentid === 'string'){
                const inhabitantData = await getInhabitantById(Number(residentid));
                if (inhabitantData){
                    setUpdatedInhabitant(inhabitantData);
                }
            }
        };
        fetchInhabitant();
    }, [residentid]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const target = event.target
        const value = target.type === 'radio' ? (target as HTMLInputElement).checked : target.value;
        const name = target.name

        setUpdatedInhabitant({ ...updatedInhabitant, [name]: value,})
    };

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await updateInhabitant(updatedInhabitant.residentid, updatedInhabitant);
        window.location.href = `admin-pages/inhabitants/${updatedInhabitant.residentid}`;
    };

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label htmlFor = "firstname">Name</label>
                <input type = "text" id = "firstname" name = "firstname" value = {updatedInhabitant.firstname} onChange = {handleInputChange} />
            </div>
        </form>
    );
}
