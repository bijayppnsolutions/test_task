import HomePageSections  from "components/HomePageSections";
import { Container } from "@mui/material";
import {
  HomePageDocument,
  HomePageQuery,
  useHomePageQuery,
} from "graphql/cms/homepage.generated";

import {
  APOLLO_STRAPI_STATE_PROP_NAME,
  initializeStrapiApollo,
} from "lib/apollo/cms-client";
import type { GetStaticProps, NextPage } from "next";


const Home: NextPage = () => {
  const { data } = useHomePageQuery();
  let allData = data.homePage.data.attributes.sections;
  console.log();
  return (
    <>
      <Container>
        {
          allData.map((block, ind)=>{
           return(<HomePageSections data={block} key={ind}/>)
          }
          )
        }
            
      </Container>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const client = await initializeStrapiApollo();
  await client.query<HomePageQuery>({
    query: HomePageDocument,
  });

  return {
    props: {
      [APOLLO_STRAPI_STATE_PROP_NAME]: client.cache.extract(),
    },
  };
};
