// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Col,
    Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import authService from "services/authService";
import ProfileService from "services/ProfileService";
import { useState, useEffect } from "react";
import ModalAddFriendSuccess from "components/Modals/ModalAddFriendSuccess";
import { Link, useHistory } from "react-router-dom";

const Tables = () => {
    const [friends, setFriends] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [background, setBackground] = useState("danger");
    const [selectedFriend, setSelectedFriend] = useState("");
    const nav = useHistory();

    // if (window.Chart) {
    //     parseOptions(Chart, chartOptions());
    // }

    const startChat = (friendUsername) => {
        nav.push({
            pathname: "/admin/chat",
            state: { friendUsername },
        });
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const removeFriendHandler = (id) => {
        const dataForFriendship = {
            current_account_id: authService.getUserId(),
            friend_account_id: +id,
        };

        //console.log(dataForFriendship)

        ProfileService.removeFriend(dataForFriendship).then((response) => {
            //console.log(response.data);
            if (response.data.status === "success") {
                setSuccessMessage(response.data.message);
                const newFriends = friends.filter((friend) => friend.account_id !== id);
                setFriends(newFriends);
            }
        });
    };

    useEffect(() => {
        const responseAccount = ProfileService.getProfileFriendsById(authService.getUserId()).then((response) => {
            console.log(response.data);
            setFriends([...response.data]);
        });
    }, []);
    return (
        <>
            <Header />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <Col>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <h3 className="mb-0">Your Friends</h3>
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Username</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Remove</th>
                                            <th scope="col">Chat</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {friends.map((friend) => (
                                            <tr key={friend.account_id}>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <Media>
                                                            <span className="mb-0 text-sm">{friend.friendly_name}</span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>
                                                    <Badge color="" className="badge-dot mr-4">
                                                        <i className="bg-warning" />
                                                        You are friends
                                                    </Badge>
                                                </td>
                                                <td>
                                                    <Button
                                                        color="danger"
                                                        href="#pablo"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            //setFriendId(player.account_id);
                                                            removeFriendHandler(friend.account_id);
                                                            toggleModal();
                                                        }}
                                                        size="sm">
                                                        Remove friend
                                                    </Button>
                                                    {/* <Button
                                                    color="danger"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    size="sm">
                                                    Remove Friend
                                                </Button> */}
                                                </td>
                                                <td>
                                                    <Button
                                                        color="success"
                                                        href="#pablo"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            //setSelectedFriend(friend.friendly_name);
                                                            startChat(friend.friendly_name);
                                                            //nav.push("/chat", { selectedFriend });
                                                        }}
                                                        size="sm">
                                                        Chat
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </Card>
                        </div>
                    </Col>
                </Row>
                {/* Dark table */}
                <Row className="mt-5"></Row>
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

export default Tables;
