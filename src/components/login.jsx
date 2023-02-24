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
        <Container style={{ "height": "100vh" }}>
            <Row className="align-items-center justify-content-center text-center p-5" style={{
                "height": "100%"
            }} >
                <Col xs={5}>
                    <div style={{ "backgroundColor": "rgba(55, 207, 181, 0.60)", "borderRadius": "1.5em", "box - shadow": "0px 0px 1px 2px lightgrey" }}>
                        < h2 className="text-white pt-5">API University</h2>
                        <Button variant="secondary mb-5" href={AUTH_URL}>Login!</Button>

                    </div>

                </Col>
            </Row >
        </Container >
    )
}

export default Login;