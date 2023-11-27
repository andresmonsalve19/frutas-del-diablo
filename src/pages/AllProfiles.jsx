import { Container } from "@mui/material";
import { PageTitle, SearchBar } from "../components";
import { ProfilesCreator } from "../components/allProfilesComponents/ProfilesCreator";
import { profiles } from "../Data/profiles";
import { useArrayFilter } from "../hooks";
import { DataContext } from "../context/DataContext";
import { useContext } from 'react'

export const AllProfiles = () => {
    const { allProfiles } = useContext(DataContext)
    const { arrayFiltered, setTextFilter } = useArrayFilter(allProfiles, "username")

    return (
        <Container maxWidth="xl">
            <PageTitle title="Perfiles" variant="h2" />
            <SearchBar filtering={setTextFilter} />
            <ProfilesCreator profiles={arrayFiltered} />
        </Container>
    );
}; 
