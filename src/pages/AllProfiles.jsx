import { Container } from "@mui/material";
import { PageTitle, SearchBar } from "../components";
import { ProfilesCreator } from "../components/allProfilesComponents/ProfilesCreator";
import { profiles } from "../Data/profiles";
import { useArrayFilter } from "../hooks";

export const AllProfiles = () => {
    const {arrayFiltered, setTextFilter} = useArrayFilter(profiles, "username")

    return (
        <Container maxWidth="xl">
            <PageTitle title="Perfiles" variant="h2" />
            <SearchBar filtering={setTextFilter}/>
            <ProfilesCreator profiles={arrayFiltered} />
        </Container>
    );
}; 
