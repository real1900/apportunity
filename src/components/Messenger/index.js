import React, { useContext } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import { ThemeContext } from "../../contexts/ThemeContext";

function Messenger() {
    const { theme } = useContext(ThemeContext);
    return (
            <MessengerCustomerChat
                themeColor={theme.primary}
                pageId="118398932896752"
                appId="872759943882027"
            />
    );
}

export default Messenger;
