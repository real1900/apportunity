
import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AiFillApple, AiFillAndroid, AiFillChrome, } from "react-icons/ai";
import { SiMacos } from "react-icons/si";
import { TbDeviceTvOld } from "react-icons/tb";
import { ThemeContext } from '../../contexts/ThemeContext';

function GetStoreLink(os, url, size, enterpriseApp) {
    const { theme } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
        iconBtn: {
            color: theme.secondary,
            // border: `3px solid ${theme.secondary}`,
            margin: size / 3,
            width: 44,
            height: 44,
            borderRadius: "25%",
            transition: "all 0.2s",
            "&:hover": {
                // backgroundColor: theme.primary,
                color: theme.secondary,
                transform: "scale(1.5)",
                // border: `2px solid ${theme.secondary}`,
            },
        },
    }));

    const classes = useStyles();
    var style = { color: theme.tertiary, }
    var element
    switch (os) {
        case "Android":
            element = <AiFillAndroid
                style={style}
                size={size}
            />
            break;
        case "web":
            element = <AiFillChrome
                style={style}
                size={size}
            />
            break;
        case "tvOS":
            element = <TbDeviceTvOld
                style={style}
                size={size}
            />
            break;
        case "macOS":
            element = <SiMacos
                style={style}
                size={size}
            />
            break;
        default: //iOS
            element = <AiFillApple
                style={style}
                size={size}
            />
    }

    if (enterpriseApp) {
        return <div key={os} style={{ paddingBottom: 10 }}>
            {element}
            <p style={{ color: theme.tertiary }}>ENTERPRISE APP</p>
        </div>
    } else {
        return <a key={os}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={classes.iconBtn}
        >{element}</a>
    }


}

export default GetStoreLink;

