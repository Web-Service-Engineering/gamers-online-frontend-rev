import { useState, useEffect } from "react";
import ProfileService from "services/ProfileService";
import authService from "services/authService";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
//import Chart from "chart.js";
// react plugin used to create charts
//import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import { chartOptions, parseOptions, chartExample1, chartExample2 } from "variables/charts.js";
import ModalAddFriendSuccess from "components/Modals/ModalAddFriendSuccess";

import Header from "components/Headers/Header.js";

const Index = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [likePlayers, setLikePlayers] = useState([]);
    const [friendId, setFriendId] = useState(-1);
    const [successMessage, setSuccessMessage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [background, setBackground] = useState("danger");

    // if (window.Chart) {
    //     parseOptions(Chart, chartOptions());
    // }

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const addFriendHandler = (id) => {
        const dataForFriendship = {
            current_account_id: authService.getUserId(),
            friend_account_id: +id,
        };

        //console.log(dataForFriendship)

        ProfileService.addFriend(dataForFriendship).then((response) => {
            //console.log(response.data);
            if (response.data.status === "success") {
                setSuccessMessage(response.data.message);
                setBackground("success");
                const newPlayers = likePlayers.filter((player) => player.account_id !== id);
                setLikePlayers((previousPlayers) => {
                    return [...newPlayers];
                });
            }
        });
    };

    const convertPercentage = (numberInString) => {
        const number = parseFloat(numberInString) * 100;
        return number.toFixed(2);
    };

    useEffect(() => {
        const responseAccount = ProfileService.getLikeMindedPlayers(authService.getUserId()).then((response) => {
            // console.log(response.data);
            setLikePlayers([...response.data]);
        });
    }, []);
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Like Minded Players</h3>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Player Username</th>
                                        <th scope="col">Achiever</th>
                                        <th scope="col">Explorer </th>
                                        <th scope="col">Killer</th>
                                        <th scope="col">Socializer</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {likePlayers
                                        .filter(
                                            (player) =>
                                                player.account_id.toString() !== authService.getUserId().toString()
                                        )
                                        .map((player) => (
                                            <tr key={player.account_id}>
                                                <th scope="row">{player.friendly_name}</th>
                                                <td>{convertPercentage(player.achiever_pct)}%</td>
                                                <td>{convertPercentage(player.explorer_pct)}%</td>
                                                <td>{convertPercentage(player.killer_pct)}%</td>
                                                <td>{convertPercentage(player.socializer_pct)}%</td>
                                                <td>
                                                    <Button
                                                        color="warning"
                                                        href="#pablo"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            //setFriendId(player.account_id);
                                                            addFriendHandler(player.account_id);
                                                            toggleModal();
                                                        }}
                                                        size="sm">
                                                        Add Friend
                                                    </Button>
                                                    {/* <Button
                                                    color="danger"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    size="sm">
                                                    Remove Friend
                                                </Button> */}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
                <ModalAddFriendSuccess
                    isOpen={modalOpen}
                    toggleModal={toggleModal}
                    message={successMessage}
                    background={background}
                />
            </Container>
        </>
    );
};

export default Index;
