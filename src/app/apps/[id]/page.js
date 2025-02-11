'use client'
import { useRouter } from "next/router";

const AppDetails = ({params}) =>{
    // const router = useRouter();
    // const {id} = router.query;

    return (
        <div>
            <h1>App Details for {params.id} </h1>
        </div>
    )
};

export default AppDetails;
