import { CLIENT_ID } from "../developer/secrets";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const REDIRECT_URI = "http://localhost:3000/";
const ENCODED_REDIRECT_URI = encodeURIComponent(REDIRECT_URI);
const SCOPES = ['user-read-private', 'user-read-email', 'user-top-read'];
const AUTH_URL =
    `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${ENCODED_REDIRECT_URI}&scope=${SCOPES.join('%20')}`;

const Login = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>API University</h1>
                    <Button variant="secondary" href={AUTH_URL}>Login!</Button>
                </Col>
            </Row>
        </Container >
    )
}

export default Login;