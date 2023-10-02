import React from "react";
import { Box, Text } from "@chakra-ui/react";
// import Lawyer from "../Components/Lawyer"; // Import the Lawyer interface
import ProfileCard from "./Cards/ProfileCard";
import SmallProfileCard from "./Cards/ProfileCardFilter";
import FlexRow from "../_ui/flex/FlexRow";

interface Props {
  filteredLawyers: Lawyer[]; // Type filteredLawyers as an array of Lawyer objects
  firstRender?: boolean;
}
interface Lawyer {
  _id: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;
  rating: string;
  image: File;
  experience: string;
  languages: string[];
  specializations: string[];
  description: string;
}

function LawyerList({ filteredLawyers, firstRender }: Props) {
  return (
    <FlexRow>
      {filteredLawyers.length > 0 ? (
        filteredLawyers.map((lawyer) => (
          //   <Box key={lawyer._id} p={2} border="1px solid #ccc" mt={2}>
          //     <Text>Name: {lawyer.firstName} {lawyer.lastName}</Text>
          //     <Text>City: {lawyer.city}</Text>
          //     <Text>Language: {lawyer.languages}</Text>
          //     {/* Add more lawyer details as needed */}
          //   </Box>
          <SmallProfileCard
            key={lawyer._id}
            specializations={lawyer.specializations}
            description={lawyer.description}
            firstName={lawyer.firstName}
            lastName={lawyer.lastName}
            img={lawyer.image}
            city={lawyer.city}
            state={lawyer.state}
            languages={lawyer.languages}
            experience={lawyer.experience}
          />
        ))
      ) : firstRender ? (
        <Text marginLeft="2.5rem">No lawyers found.</Text>
      ) : (
        ""
      )}
    </FlexRow>
  );
}

export default LawyerList;
