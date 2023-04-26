// reactstrap components
import styles from "./chat.module.css";

import React, { useState, useEffect } from "react";
import authService from "services/authService";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";


import ProfileService from "services/ProfileService";
import createOrUpdateChatEngineUser from "services/chatEngineService";
import Header from "components/Headers/Header";
import { useLocation } from "react-router-dom";

//const CHAT_ENGINE_API_BASE_URL = "https://api.chatengine.io";
const PROJECT_ID = "9a49e386-12b3-4e5c-8f2f-63c741ba08a5";
//const PROJECT_SECRET = "5b8e1c78-518e-44e3-abc8-e32580dc88ab";

const Chats = (props) => {
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const location = useLocation();
    

    const createNewChat = async (friendUsername) => {
        const newChatConfig = {
            headers: {
                "Project-ID": PROJECT_ID,
                "User-Name": userName,
                "User-Secret": email,
            },
        };

        const data = {
            usernames: [userName, friendUsername],
            is_direct_chat: true,
        };

        const resp = getOrCreateChat({ is_direct_chat: true, usernames: [friendUsername] });

        console.log(resp);
        console.log(newChatConfig.headers);

        // try {
        //     const response = await axios.post(`${CHAT_ENGINE_API_BASE_URL}/chats`, data, newChatConfig);

        //     if (response.status === 201) {
        //         console.log("New chat created:", response.data);
        //     }
        // } catch (error) {
        //     console.error("Error creating new chat:", error);
        // }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const friendUsername = location.state && location.state.friendUsername;
        if (friendUsername) {
            createNewChat(friendUsername);
        }
        const fetchProfileData = async () => {
            try {
                setIsLoading(true);
                const responseProfile = await ProfileService.getProfileById(authService.getUserId()).then(
                    (response) => {
                        setUsername(response.data.friendly_name);
                    }
                );
                const responseAccount = await ProfileService.getAccountById(authService.getUserId()).then(
                    (response) => {
                        setEmail(response.data.email);
                    }
                );

                await createOrUpdateChatEngineUser(userName, email);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        };

        fetchProfileData();
    }, []);

    return (
        <>
            <Header />
            {/*  {!isLoading && (<PrettyChatWindow
                projectId={PROJECT_ID}
                username={userName}
                secret={email}
                style={{ height: "100%" }})}
            /> */}
            <div className={styles.chatContainer}>
                {" "}
                {!isLoading && (
                    <ChatEngine
                        projectID={PROJECT_ID}
                        userName={userName}
                        userSecret={email}
                        style={{ height: "100%" }}
                    />
                )}
            </div>
        </>
    );
};

export default Chats;
