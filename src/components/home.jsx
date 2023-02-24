import useTopSongs from "../utilities/useTopSongs";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SongCard = ({ song }) => {
    return (
        <iframe title={song.id} src={`https://open.spotify.com/embed/track/${song.id}?utm_source=generator`} width="100%" height="152"></iframe>
    );
}
const Home = () => {
    const [topSongs, isTopSongsReady] = useTopSongs();
    return (
        isTopSongsReady ?
            <Container width="100%">
                <Stack>
                    <Row className="justify-content-center"><Col><h3 className="text-center pt-3">Your</h3></Col></Row>
                    <Row className="justify-content-center"><Col><h1 className="text-center">Top 10</h1></Col></Row>
                    <Row className="justify-content-center"><Col><h3 className="text-center p-1">Spotify Songs</h3></Col></Row>
                    <Row className="justify-content-center"><Col xs={8}> <hr className="hr" /></Col></Row>
                    <Row className="justify-content-center"><Col xs={8}>{topSongs.items.map(song => <SongCard key={song.id} song={song} />)}</Col></Row>
                </Stack>
            </Container>
            : null
    );
}

export default Home;