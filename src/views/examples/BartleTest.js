// reactstrap components
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Container, Row, Col, Label } from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import React, { useState } from "react";
import ProfileService from "services/ProfileService";
import authService from "services/authService";
import { Link, useHistory } from "react-router-dom";

const BartleTest = () => {
    const [answers, setAnswers] = useState({});
    const nav = useHistory();

    const handleOptionChange = (event, questionId) => {
        setAnswers({
            ...answers,
            [questionId]: +event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            let bartleResponses = [];
            let count = 0;

            for (let key in answers) {
                bartleResponses.push(questions[count].responseMatch[answers[key]]);
                count++;
            }
            console.log("Submitted answers:", answers);
            console.log("Submitted answers:", bartleResponses);

            const bartleTestData = {
                account_id: authService.getUserId().toString(),
                responses: bartleResponses,
            };

            const resp = ProfileService.createBartleTest(bartleTestData);
            console.log(resp);
            nav.push("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="order-xl-1">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Take The Bartle Test to determine your player style</h3>
                                    </Col>
                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={handleSubmit}>
                                    {questions.map((question) => (
                                        <FormGroup key={question.id} tag="fieldset">
                                            <legend className="heading-medium">{question.question}</legend>
                                            <Row>
                                                {question.options.map((option, index) => (
                                                    <Col sm={12} md={6} key={index}>
                                                        <FormGroup check>
                                                            <Label check className="heading-medium text-muted">
                                                                <Input
                                                                    type="radio"
                                                                    name={`question-${question.id}`}
                                                                    value={index}
                                                                    checked={answers[question.id] === index}
                                                                    onChange={(event) =>
                                                                        handleOptionChange(event, question.id)
                                                                    }
                                                                    required
                                                                />{" "}
                                                                {option}
                                                            </Label>
                                                        </FormGroup>
                                                    </Col>
                                                ))}
                                            </Row>
                                            <hr />
                                        </FormGroup>
                                    ))}
                                    <div className="text-center">
                                        <Button className="my-4" color="warning" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

// const questions = [
//     {
//         id: 1,
//         question: "Are you more comfortable, as a player in an online game:",
//         options: ["Talking with friends in a tavern", "Out hunting orcs by yourself"],
//     },
//     {
//         id: 2,
//         question: "Which do you enjoy more in quests?",
//         options: ["Getting involved in the storyline", "Getting the rewards at the end"],
//     },
//     {
//         id: 3,
//         question: "Would you rather be:",
//         options: ["Popular?", "Wealthy?"],
//     },
//     {
//         id: 4,
//         question: "Which do you enjoy more in an online game?",
//         options: ["Getting the latest gossip", "getting a new item"],
//     },
//     {
//         id: 5,
//         question: "Which would you rather have, as a player in an online game?",
//         options: [
//             "A private channel, over which you and your friends can communicate",
//             "Your own house, worth millions of gold coins",
//         ],
//     },
//     {
//         id: 6,
//         question: "Which would you enjoy more as an online game player?",
//         options: ["Running your own tavern?", "Making your own maps of the world, then selling them"],
//     },
//     {
//         id: 7,
//         question: "What's more important in an online game to you?",
//         options: ["The number of people", "The number of areas to explore"],
//     },
//     {
//         id: 8,
//         question: "What's more important to you?",
//         options: ["The Quality of roleplayinf in an online game", "The uniqueness of the features, and game mechanic"],
//     },
//     {
//         id: 9,
//         question: "You are being chased by a monster in an online game. Do you:",
//         options: ["Ask a friend for help in killing it", "Hide somewhere you know the monster won't follow?"],
//     },
//     {
//         id: 10,
//         question:
//             "You're a player in an online game, and about to go into an unknown dungeon. You have your choice of one more person for your party. Do you bring:",
//         options: [
//             "A bard, who's a good friend of yours and who's great for entertaining you and your friends",
//             "A wizard, to identify the items that you find there?",
//         ],
//     },
//     {
//         id: 11,
//         question: "Would you rather",
//         options: ["Vanquish your enemies", "convince your enemies to work for you, not against you?"],
//     },
//     {
//         id: 12,
//         question: "Which is more exciting?",
//         options: ["A well-roleplayed scenario", "A deadly battle"],
//     },
//     {
//         id: 13,
//         question: "Which would you enjoy more?",
//         options: ["Winning a duel with another player", "Getting accepted by a clan (a group of other players)"],
//     },
//     {
//         id: 14,
//         question: "What's worse:",
//         options: ["To be without power", "To be without friends?"],
//     },
//     {
//         id: 15,
//         question: "Would you rather:",
//         options: ["Hear what someone has to say", "Show them the sharp blade of your axe?"],
//     },
//     {
//         id: 16,
//         question: "In an online game, a new area opens up. Which do you look forward to more?",
//         options: [
//             "Exploring the new area, and finding out its history",
//             "Being the first to get the new equipment from the area",
//         ],
//     },
//     {
//         id: 17,
//         question: "In an online game, would you rather be known as:",
//         options: [
//             "Someone who can run from any two points in the world, and really knows their way around",
//             "The person with the best, most unique equipment in the game?",
//         ],
//     },
//     {
//         id: 18,
//         question: "Would you rather:",
//         options: ["Become a hero faster than your friends", "Know more secrets than your friends?"],
//     },
//     {
//         id: 19,
//         question: "Would you rather:",
//         options: ["Know where to find things", "Know how to get things?"],
//     },
//     {
//         id: 20,
//         question: "Which would you rather do:",
//         options: [
//             "Solve a riddle no one else has solved",
//             "Getting to a certain experience level faster than anyone else?",
//         ],
//     },
//     {
//         id: 21,
//         question: "In an online game, would rather join a clan of:",
//         options: ["Scholars", "Assassins?"],
//     },
//     {
//         id: 22,
//         question: "Would you rather win:",
//         options: ["A trivia contest", "An arena battle?"],
//     },
//     {
//         id: 23,
//         question: "If you're alone in an area, do you think:",
//         options: ["It's safe to explore", "You'll have to look elsewhere for prey?"],
//     },
//     {
//         id: 24,
//         question: "You learn that another player is planning your demise. Do you:",
//         options: [
//             "Go to an area your opponent is unfamiliar with and prepare there",
//             "Attack them before they attack you?",
//         ],
//     },
//     {
//         id: 25,
//         question: "You meet a new player. Do you think of them as:",
//         options: ["Someone who can appreciate your knowledge of the game", "As potential prey?"],
//     },
//     {
//         id: 26,
//         question: "In an online game, would you rather:",
//         options: ["Have a sword twice as powerful as any other in the game", "Be the most feared person in the game?"],
//     },
//     {
//         id: 27,
//         question: "In an online game, would you be more prone to brag about:",
//         options: ["How many other players you've killed", "Your equipment?"],
//     },
//     {
//         id: 28,
//         question: "Would you rather have:",
//         options: [
//             "A spell to damage other players",
//             "A spell that increases the rate at which you gain experience points?",
//         ],
//     },
//     {
//         id: 29,
//         question: "Would you rather receive as a quest reward:",
//         options: [
//             "Experience points",
//             "A wand with 3 charges of spell that lets you control other players, against their will?",
//         ],
//     },
//     {
//         id: 30,
//         question: "When playing a video game, is it more fun to:",
//         options: ["Have the highest score on the list", "Beat your best friend one-on-one?"],
//     },

//     // Add more questions here
// ];
const questions = [
    {
        id: 1,
        question: "Are you more comfortable, as a player on a MUD?",
        options: ["Talking with friends in a tavern?", "Out hunting orcs by yourself for experience?"],
        responseMatch: ["S", "A"],
    },
    {
        id: 2,
        question: "Which is more enjoyable to you?",
        options: ["Killing a big monster", "Bragging about it to your friends?"],
        responseMatch: ["A", "S"],
    },
    {
        id: 3,
        question: "Which do you enjoy more in MUD quests:",
        options: ["Getting involved in the storyline", "Getting the rewards at the end?"],
        responseMatch: ["S", "A"],
    },
    {
        id: 4,
        question: "Which would you rather be noticed for on a MUD?:",
        options: ["Your equipment", "Your personality"],
        responseMatch: ["A", "S"],
    },
    {
        id: 5,
        question: "Would you rather be:",
        options: ["Popular", "Wealthy"],
        responseMatch: ["S", "A"],
    },
    {
        id: 6,
        question: "Which do you enjoy more on a MUD?:",
        options: ["Getting the latest gossip", "Getting a new item"],
        responseMatch: ["S", "A"],
    },
    {
        id: 7,
        question: "Which would you rather have, as a player on a MUD?:",
        options: [
            "A private channel, over which you and your friends can communicate",
            "Your own house, worth millions of gold coins",
        ],
        responseMatch: ["S", "A"],
    },
    {
        id: 8,
        question: "Which would you enjoy more as a MUD player?",
        options: ["Running your own tavern?", "Making your own maps of the world, then selling them?"],
        responseMatch: ["S", "E"],
    },
    {
        id: 9,
        question: "What's more important in a MUD to you?",
        options: ["The number of people", "The number of areas to explore"],
        responseMatch: ["S", "E"],
    },
    {
        id: 10,
        question: "What's more important to you:",
        options: ["The quality of roleplaying in a mud", "The uniqueness of the features, and game mechanic"],
        responseMatch: ["S", "E"],
    },
    {
        id: 11,
        question: "You are being chased by a monster on a MUD. Do you:",
        options: ["Ask a friend for help in killing it", "Hide somewhere you know the monster won't follow"],
        responseMatch: ["S", "E"],
    },
    {
        id: 12,
        question:
            "You're a player on a mud, and you want to fight a really tough dragon. How would you approach this problem?",
        options: [
            "Get a big group of players to kill it.",
            "Try a variety of weapons and magic against it, until you find its weakness.",
        ],
        responseMatch: ["S", "E"],
    },
    {
        id: 13,
        question:
            "You're a player on a mud, and about to go into an unknown dungeon.You have your choice of one more person for your party.Do you bring:",
        options: [
            "A bard, who's a good friend of yours and who's great for entertaining you and your friends",
            "A wizard, to identify the items that you find there",
        ],
        responseMatch: ["S", "E"],
    },
    {
        id: 14,
        question: "Is it better to be:",
        options: ["Feared", "Loved"],
        responseMatch: ["K", "S"],
    },
    {
        id: 15,
        question: "Someone has PK'ed you. Do you want to:",
        options: ["Find out why, and try to convince them not to do it again", "Plot your revenge"],
        responseMatch: ["S", "K"],
    },
    {
        id: 16,
        question: "Which is more exciting?",
        options: ["A well-roleplayed scenario", "A deadly battle"],
        responseMatch: ["S", "K"],
    },
    {
        id: 17,
        question: "Which would you enjoy more?",
        options: ["Winning a duel with another player", "Getting accepted by a clan"],
        responseMatch: ["K", "S"],
    },
    {
        id: 18,
        question: "Would you rather:",
        options: ["Vanquish your enemies", "Convince your enemies to work for you, not against you"],
        responseMatch: ["K", "A"],
    },
    {
        id: 19,
        question: "What's worse:",
        options: ["To be without power", "To be without friends"],
        responseMatch: ["K", "S"],
    },
    {
        id: 20,
        question: "Would you rather:",
        options: ["Hear what someone has to say", "Show them the sharp blade of your axe"],
        responseMatch: ["S", "K"],
    },
    {
        id: 21,
        question: "On a MUD, a new area opens up. Which do you look forward to more?",
        options: [
            "Exploring the new area, and finding out its history",
            "Being the first to get the new equipment from the area",
        ],
        responseMatch: ["E", "A"],
    },
    {
        id: 22,
        question: "On a MUD, would you rather be known as:",
        options: [
            "Someone who can run from any two points in the world, and really knows their way around.",
            "The person with the best, most unique equipment in the game",
        ],
        responseMatch: ["E", "A"],
    },
    {
        id: 23,
        question: "Would you rather:",
        options: ["Become a hero faster than your friends", "Know more secrets than your friends?"],
        responseMatch: ["E", "A"],
    },
    {
        id: 24,
        question: "Would you rather:",
        options: ["Know where to find things", "YKnow how to get things?"],
        responseMatch: ["E", "A"],
    },
    {
        id: 25,
        question: "Which would you rather do:",
        options: [
            "Solve a riddle no one else has gotten",
            "Getting to a certain experience level faster than anyone else",
        ],
        responseMatch: ["E", "A"],
    },
    {
        id: 26,
        question: "Do you tend to:",
        options: ["Know things no one else does", "Have items no one else does"],
        responseMatch: ["E", "A"],
    },
    {
        id: 27,
        question: "On a MUD, would rather join a clan of:",
        options: ["Scholars", "Assassins"],
        responseMatch: ["E", "K"],
    },
    {
        id: 28,
        question: "Would you rather win:",
        options: ["A trivia contest", "An arena battle"],
        responseMatch: ["E", "K"],
    },
    {
        id: 29,
        question: "If you're alone in an area, do you think:",
        options: ["It's safe to explore", "You'll have to look elsewhere for prey"],
        responseMatch: ["E", "K"],
    },
    {
        id: 30,
        question: "On a MUD, would rather be known for",
        options: ["Knowledge", "Power"],
        responseMatch: ["E", "K"],
    },
    {
        id: 31,
        question: "Would you rather:",
        options: ["Defeat an enemy", "Explore a new area"],
        responseMatch: ["K", "E"],
    },
    {
        id: 32,
        question: "On a MUD, would rather be known for",
        options: ["Knowledge", "Power"],
        responseMatch: ["E", "K"],
    },
    {
        id: 33,
        question: "You learn that another player is planning your demise.Do you:",
        options: [
            "Go to an area your opponent is unfamiliar with and prepare there",
            "Attack him before he attacks you",
        ],
        responseMatch: ["E", "K"],
    },
    {
        id: 34,
        question: "You meet a new player. Do you think of him as:",
        options: ["Someone who can appreciate your knowledge of the game", "As potential prey"],
        responseMatch: ["E", "K"],
    },
    {
        id: 35,
        question: "On a mud, would you rather:",
        options: ["Have a sword twice as powerful as any other in the game", "Be the most feared person in the game"],
        responseMatch: ["A", "K"],
    },
    {
        id: 36,
        question: "On a mud, would you be more prone to brag about:",
        options: ["How may other players you've killed", "Your equipment"],
        responseMatch: ["K", "A"],
    },
    {
        id: 37,
        question: "Would you rather have:",
        options: [
            "A spell to damage other players",
            "A spell that increases the rate at which you gain experience points?",
        ],
        responseMatch: ["K", "A"],
    },
    {
        id: 38,
        question: "Would you rather have:",
        options: [
            "Two levels of experience",
            "An amulet that increases the damage you do against other players by 10%.",
        ],
        responseMatch: ["A", "K"],
    },
    {
        id: 39,
        question: "Would you rather receive as a quest reward:",
        options: [
            "Experience points",
            "A wand with 3 charges of a spell that lets you control other players, against their will. (charm person)",
        ],
        responseMatch: ["A", "K"],
    },
    {
        id: 40,
        question: "When playing a video game, is it more fun to:",
        options: ["Have the highest score on the list?", "Beat your best friend one-on-one?"],
        responseMatch: ["A", "K"],
    },

    // Add more questions here
];

export default BartleTest;
