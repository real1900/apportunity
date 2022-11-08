
import { Box, Button, Modal, Typography } from "@material-ui/core";
import React, { useState, useContext, } from "react";
import { InlineWidget } from "react-calendly";
import { ThemeContext } from "../../contexts/ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import "./CalendarButton.css"

function CalendarButton({ title }) {

    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useContext(ThemeContext);
    const useStyles = makeStyles((t) => ({

        caledarModal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        modalContainer: {
            borderRadius: "30px",
            width: "80%",
            height: "95%",
            backgroundColor: "#f03939",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

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
        primaryColor: theme.primary,
        textColor: theme.secondary
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

        content = <Modal
            className={classes.caledarModal}
            onClose={() => {
                setIsOpen(false);
            }}
            open={isOpen}
            rootElement={document.getElementById("root")}
        >
            <Box className={classes.modalContainer}>

                <InlineWidget
                    styles={{ width: "97%", height: "97%" }}
                    url="https://calendly.com/apportunity"
                    pageSettings={pageSettings}
                // utm={utm}
                // prefill={prefill}
                ></InlineWidget>
            </Box>
        </Modal>
    }

    return <div>{content}</div>
}

export default CalendarButton;
