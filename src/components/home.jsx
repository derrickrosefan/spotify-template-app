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
            <Container>
                <Stack gap={2}>
                    <Row className="justify-content-center text-center pt-3">
                        <Col xs={8} style={{ "backgroundColor": "rgba(55, 207, 181, 0.60)", "borderRadius": "1.5em", "boxShadow": "0px 0px 1px 2px lightgrey" }} >
                            <h3 className="pt-5 text-white">Your</h3>
                            <h1 className="text-white">Top 10</h1>
                            <h3 className="text-white">Spotify Songs</h3>
                            <p className="pb-3 text-white">@derrickrosefan and @alison-park</p>
                            <hr className="hr" />
                            {topSongs.items.map(song => <SongCard key={song.id} song={song} />)}
                        </Col>
                    </Row>
                </Stack >
            </Container >
            : null
    );
}

export default Home;