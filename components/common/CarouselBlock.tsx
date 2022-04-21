import { ComponentCommonCarousel } from "graphql/types";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
type Props = {
  data: ComponentCommonCarousel;
};
const CarouselBlock = ({ data }: Props) => {
  console.log(data, 'cdada');
  return <Carousel>
   
    {
    
    data.Item.map((element, index)=>{

       return (<div key={index}> <img style={{"max-height" : 200}} src = { process.env.STRAPI_CMS_URL+element.Image.data.attributes.url}/><p className="legend">{element.Description}</p></div>)


    })}</Carousel>;
};

export default CarouselBlock;
