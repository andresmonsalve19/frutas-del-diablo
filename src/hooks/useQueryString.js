import { useParams } from "react-router-dom";

export const useQueryString = ({id}) => {
    const {id} = useParams()

    return (
        id
    );
}; 
