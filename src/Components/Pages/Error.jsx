import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BiSolidError } from "react-icons/bi";
import Error404 from "/404.jpg"

function Error() {

    return (
      <Container className=" error-container container-fluid">
            <div className="error-div">
              <img src={Error404} className="error-img img-fluid" alt="Page not found image"/>
              <div className="error-text">
              <div className="erro-404-alert">
                <BiSolidError className="text-danger error-icon"/> 
                <h1 className="fs-2">The requested page cannot be found</h1>
              </div>
              <p className="error-message fs-3 fst-italic text-secondary">It looks like you've searched for a page that does not exist or was removed or you may have misspelled a word when searching through our website. 
              Click 
                <Link to="/" className="text-primary"> here </Link>
                to go back home
              </p>
              </div>
            </div>
      </Container>
    )
  }
  
  export default Error
  