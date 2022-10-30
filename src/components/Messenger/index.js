import React, { useContext } from "react";
import { MessengerChat, showMessenger,
    //  hideMessenger, showDialog, hideDialog, setMessengerHeight 
    } from 'react-messenger-chat-plugin';
import { ThemeContext } from "../../contexts/ThemeContext";


function Messenger() {
    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <button onClick={() => { showMessenger(true) }}>show messenger</button>
            <MessengerChat
                pageId="118398932896752"
                language="en_US"
                themeColor={"green"}
                bottomSpacing={300}
                loggedInGreeting="loggedInGreeting"
                loggedOutGreeting="loggedOutGreeting" ry
                greetingDialogDisplay={"show"}
                debugMode={true}
                onMessengerShow={() => {
                    console.log("onMessengerShow");
                }}
                onMessengerHide={() => {
                    console.log("onMessengerHide");
                }}
                onMessengerDialogShow={() => {
                    console.log("onMessengerDialogShow");
                }}
                onMessengerDialogHide={() => {
                    console.log("onMessengerDialogHide");
                }}
                onMessengerMounted={() => {
                    console.log("onMessengerMounted");
                }}
                onMessengerLoad={() => {
                    console.log("onMessengerLoad");
                }}
            />
        </div>
    );
}

export default Messenger;
