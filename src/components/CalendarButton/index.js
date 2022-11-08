
import { Button } from "@material-ui/core";
import React, { useState, useContext, } from "react";
import { PopupModal } from "react-calendly";
import { ThemeContext } from "../../contexts/ThemeContext";
import { makeStyles } from "@material-ui/core/styles";

//apportunity
function CalendarButton({ title }) {

    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({

        contactBtn: {
            backgroundColor: theme.primary,
            padding: "20px",
            color: theme.secondary,
            borderRadius: "30px",
            textColor: theme.secondary,
            textTransform: "inherit",
            textDecoration: "none",
            width: "auto",
            height: "50px",
            fontSize: "1rem",
            fontWeight: "500",
            fontFamily: "var(--primaryFont)",
            border: `3px solid ${theme.primary}`,
            transition: "100ms ease-out",
            "&:hover": {
                backgroundColor: theme.secondary,
                color: theme.tertiary,
                border: `3px solid ${theme.tertiary}`,
            },
        },
    }));
    const classes = useStyles();
    const pageSettings = {
        backgroundColor: theme.primaryColor,
        hideEventTypeDetails: false,
        hideLandingPageDetails: false,
        primaryColor: theme.secondary,
        textColor: theme.primaryColor
    }

    //     const utm = {
    //         utmCampaign: 'Spring Sale 2019',
    //         utmContent: 'Shoe and Shirts',
    //         utmMedium: 'Ad',
    //         utmSource: 'Facebook',
    //         utmTerm: 'Spring'
    // }

    // const prefill = {
    //     email: 'test@test.com',
    //     firstName: 'Jon',
    //     lastName: 'Snow',
    //     name: 'Jon Snow',
    //     guests: [
    //         'janedoe@example.com',
    //         'johndoe@example.com'
    //     ],
    //     customAnswers: {
    //         a1: 'a1',
    //         a2: 'a2',
    //         a3: 'a3',
    //         a4: 'a4',
    //         a5: 'a5',
    //         a6: 'a6',
    //         a7: 'a7',
    //         a8: 'a8',
    //         a9: 'a9',
    //         a10: 'a10'
    //     },
    //     date: new Date(Date.now() + 86400000)
    // }

    let content;
    if (!isOpen) {
        content = <Button
            className={classes.contactBtn}
            color={theme.secondary}
            onClick={() => {
                setIsOpen(true);
            }}
        >{title}</Button>
    } else {

        content = <PopupModal
            url="https://calendly.com/apportunity"
            pageSettings={pageSettings}
            // utm={utm}
            // prefill={prefill}
            onModalClose={() => {
                setIsOpen(false);
            }}
            open={isOpen}
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("root")}
        />
    }

    return <div>{content}</div>
}

export default CalendarButton;
