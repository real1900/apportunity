
import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AiFillApple, AiFillAndroid, AiFillChrome, } from "react-icons/ai";
import { SiMacos } from "react-icons/si";
import { TbDeviceTvOld } from "react-icons/tb";
import { ThemeContext } from '../../contexts/ThemeContext';

function GetOSIcon(os) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            color: theme.secondary,
            // border: `3px solid ${theme.secondary}`,
            padding: 15,
            width: 44,
            height: 44,
            borderRadius: "25%",
            transition: "all 0.2s",
            "&:hover": {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: "scale(1.1)",
                border: `2px solid ${theme.secondary}`,
            },
        },
    }));

    const classes = useStyles();
    

    var className = classes.icon
    var style = { color: theme.secondary }

    var element
    switch (os) {
        case "Android":
            element = <AiFillAndroid
                className={className}
                style={style}
            />
            break;
        case "web":
            element = <AiFillChrome
                className={className}
                style={style}
            />
            break;
        case "tvOS":
            element = <TbDeviceTvOld
                className={className}
                style={style}
            />
            break;
        case "macOS":
            element = <SiMacos
                className={className}
                style={style}
            />
            break;
        default: //iOS
            element = <AiFillApple
                className={className}
                style={style}
            />
    }
    return element
}

export default GetOSIcon;

