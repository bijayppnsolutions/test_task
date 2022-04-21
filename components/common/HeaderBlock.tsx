import { ComponentCommonHeader } from "graphql/types";
import {
  Container, Row, Col,  Navbar, Nav
} from 'reactstrap';
type Props = {
  data: ComponentCommonHeader;
};
const HeaderBlock = ({ data }: Props) => {
  console.log(data, 'data');
  return <Navbar>
  
    <Container>
      <Row noGutters className="position-relative w-100 align-items-center">
      
        
          <Nav className="mrx-auto" navbar>
          {data.Text}
            
          </Nav>
        
        
        <Col className="d-none d-lg-flex justify-content-center">
          
            <a  href={data.ButtonLink}  color="info" >Search</a>
          
        </Col>
        
      </Row>
    </Container>
    
  </Navbar>
  
 
};

export default HeaderBlock;
