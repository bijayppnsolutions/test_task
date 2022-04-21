import { ComponentCommonTwoColumnBlock } from "graphql/types";
import {Row
} from 'reactstrap';
type Props = {
  data: ComponentCommonTwoColumnBlock;
};
const TwoColumnBlock = (props: Props) => {
  console.log(props,props.ImagePosition, 'props');
  return <Row >
    
    { props.ImagePosition == 'Left' && <div className="col-6">
            <img src={process.env.STRAPI_CMS_URL+props.Image.data.attributes.url}></img>
          </div>
}
    
    
        
  
  
  <div className="col-6 mt-5">
    <h4>{props.TitleText}</h4>
    <p>{props.Description}</p>
    <a href={props.ButtonUrl} color="info" >{props.ButtonText}</a>
  </div>

{ props.ImagePosition == 'Right' && <div className="col-6">
<img src={process.env.STRAPI_CMS_URL+props.Image.data.attributes.url}></img>
</div>
}

  
  
</Row>
  
  // <div><div> {props.TitleText}  </div><div>{props.Description}</div><a href={props.ButtonUrl}>{props.ButtonText}</a></div>;
};

export default TwoColumnBlock;
