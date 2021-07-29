import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#ffffff33"
    },
    li:{
        fontFamily:"'Montserrat', sans-serif",
        fontWeight: "lighter",
        cursor:"pointer",
        color:"#ffffff",
        '&:hover': {
            color:"#35C9F2ee",
            '&::marker':{
                color:"#35C9F2ee"
            }
        }
    }

}));

export default function FileFormatTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Open Subtitles" {...a11yProps(0)} />
                    <Tab label="Closed Captions" {...a11yProps(1)} />
                    <Tab label="DVB Subtitles" {...a11yProps(2)} />
                    <Tab label="Images for DVD authoring and NLE system" {...a11yProps(3)} />
                    <Tab label="Text-only scripts for Authoring and NLE systems" {...a11yProps(4)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <div style={{"display":"flex","flexDirection":"row", "textAlign":"left"}}>
                        <div style={{"flex":"0 0 25%"}}>
                            <ul>
                                <li className={classes.li}>Compressed PAC (.pac)</li>
                                <li className={classes.li}>.890 files</li>
                                <li className={classes.li}>EBU (.STL)</li>
                                <li className={classes.li}>EBU (.STL) for ARTE</li>
                                <li className={classes.li}>Windows Media Player SAMI</li>
                                <li className={classes.li}>Plain ASCII text</li>
                                <li className={classes.li}>Rich Text Format (RTF) files</li>
                                <li className={classes.li}>XLS Excel Workbook file</li>
                                <li className={classes.li}>DLP Cinema™ Subtitle XML </li>
                                <li className={classes.li}>DLP Cinema™ Subtitle XML with quality images</li>
                            </ul>
                        </div>
                        <div style={{"flex":"0 0 25%"}}>
                            <ul>
                                <li className={classes.li}>DCDM SMPTE 428-7-2007 XML Subtitles</li>
                                <li className={classes.li}>QuickTime Text and .SMIL files</li>
                                <li className={classes.li}>SubRip (.srt) subtitles</li>
                                <li className={classes.li}>MicroDVD (.sub) subtitles</li>
                                <li className={classes.li}>WebVTT (.vtt) subtitles</li>
                                <li className={classes.li}>Videotron Lambda CAP (.cap)</li>
                                <li className={classes.li}>Unicode PAC (.fpc)</li>
                                <li className={classes.li}>Win2020 text files</li>
                                <li className={classes.li}>DAS</li>
                            </ul>
                        </div>
                        <div style={{"flex":"0 0 25%"}}>
                            <ul>
                                <li className={classes.li}>Softitler .TXT</li>
                                <li className={classes.li}>Avid® DS Nitris™ Subtitles Files</li>
                                <li className={classes.li}>OVR</li>
                                <li className={classes.li}>VDPC</li>
                                <li className={classes.li}>Timed Text (TTML XML)</li>
                                <li className={classes.li}>Ooyala Timed Text XML</li>
                                <li className={classes.li}>IMSC1 &amp; IMSC 1.1 XML</li>
                                <li className={classes.li}>Netflix Timed Text (NFLX-TT)</li>
                            </ul>
                        </div>
                        <div style={{"flex":"0 0 25%"}}>
                            <ul>
                                <li className={classes.li}>EBU Timed Text (EBU-TT and EBU-TT-D)</li>
                                <li className={classes.li}>EBU-TT and EBU-TT-D for BBC</li>
                                <li className={classes.li}>SMPTE-TT Subtitles</li>
                                <li className={classes.li}>Inscriber CG (.txt)</li>
                                <li className={classes.li}>Apple iTunes Timed Text (.itt)</li>
                                <li className={classes.li}>SubStation Alpha (.SSA, .ASS)</li>
                                <li className={classes.li}>Swift Interchange Format (.sif)</li>
                                <li className={classes.li}>Universal Subtitling Format (.usf)</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <div style={{"display":"flex","flexDirection":"row", "textAlign":"left"}}>
                        <div style={{"flex":"0 0 50%"}}>
                            <ul>
                                <li className={classes.li}>Scenarist Closed Caption Format (SCC)</li>
                                <li className={classes.li}>MCC CEA-708 captions (.mcc)</li>
                                <li className={classes.li}>CPC-715 Online Caption Format (.onl)</li>
                                <li className={classes.li}>Captions Inc. Files (.cin)</li>
                                <li className={classes.li}>Cheetah CAP</li>
                                <li className={classes.li}>Cheetah ASC</li>

                            </ul>
                        </div>
                        <div style={{"flex":"0 0 50%"}}>
                            <ul>
                                <li className={classes.li}>NCI caption files (.cap)</li>
                                <li className={classes.li}>Ultech caption files (.ult)</li>
                                <li className={classes.li}>TDS captions files</li>
                                <li className={classes.li}>ECF captions files</li>
                                <li className={classes.li}>ProCAP Closed Captions (.txt)</li>
                                <li className={classes.li}>NCI Timed Roll to Captions (.flc)</li>
                            </ul>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <div style={{"display":"flex","flexDirection":"row", "textAlign":"left"}}>
                        <div style={{"flex":"0 0 100%"}}>
                            <h5>Generates ETSI EN 300 743 compatible DVB subtitling elementary stream for muxing with ProMedia Carbon or Manzanita MP2TSME multiplexers. There is an option to export Generic DVB Elementary Stream as well.</h5>

                        </div>

                    </div>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <div style={{"display":"flex","flexDirection":"row", "textAlign":"left"}}>
                        <div style={{"flex":"0 0 50%"}}>
                            <ul>
                                <li className={classes.li}>Final Cut Pro® 7</li>
                                <li className={classes.li}>Final Cut Pro® X</li>
                                <li className={classes.li}>DaVinci Resolve</li>
                                <li className={classes.li}>Sonic Scenarist HDMV (Blu-ray)</li>
                                <li className={classes.li}>Sonic Scenarist Advanced Content (HD-DVD)</li>
                                <li className={classes.li}>Sonic Scenarist and Sonic Reel DVD</li>
                                <li className={classes.li}>Apple® DVD Studio Pro®</li>

                            </ul>
                        </div>
                        <div style={{"flex":"0 0 50%"}}>
                            <ul>
                                <li className={classes.li}>Adobe® Encore® DVD</li>
                                <li className={classes.li}>Spruce Technologies DVD Maestro</li>
                                <li className={classes.li}>DoStudio Authoring Suite</li>
                                <li className={classes.li}>Ultech DV2000/3000 .USF File Format and .yuc images</li>
                                <li className={classes.li}>Pinnacle Impression DVD</li>
                                <li className={classes.li}>Toshiba Authoring System</li>
                                <li className={classes.li}>Panasonic Blu-Ray Authoring SPI</li>

                            </ul>
                        </div>

                    </div>
                </TabPanel>
                <TabPanel value={value} index={4} dir={theme.direction}>
                    <div style={{"display":"flex","flexDirection":"row", "textAlign":"left"}}>
                        <div style={{"flex":"0 0 50%"}}>
                            <ul>
                                <li className={classes.li}>Final Cut Pro® 7</li>
                                <li className={classes.li}>Final Cut Pro® X</li>
                                <li className={classes.li}>DaVinci Resolve</li>
                                <li className={classes.li}>Sonic Scenarist HDMV (Blu-ray)</li>
                                <li className={classes.li}>Sonic Scenarist Advanced Content (HD-DVD)</li>
                                <li className={classes.li}>Sonic Scenarist and Sonic Reel DVD</li>
                                <li className={classes.li}>Apple® DVD Studio Pro®</li>

                            </ul>
                        </div>
                        <div style={{"flex":"0 0 50%"}}>
                            <ul>
                                <li className={classes.li}>Adobe® Encore® DVD</li>
                                <li className={classes.li}>Spruce Technologies DVD Maestro</li>
                                <li className={classes.li}>DoStudio Authoring Suite</li>
                                <li className={classes.li}>Ultech DV2000/3000 .USF File Format and .yuc images</li>
                                <li className={classes.li}>Pinnacle Impression DVD</li>
                                <li className={classes.li}>Toshiba Authoring System</li>
                                <li className={classes.li}>Panasonic Blu-Ray Authoring SPI</li>

                            </ul>
                        </div>

                    </div>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}