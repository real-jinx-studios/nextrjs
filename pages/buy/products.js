import styles from "../../styles/products.module.css";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import SubscriptionCards from "../../components/subscriptionCards";
import Router from "next/router";


export default function Products(){
    const [active,setActive]=useState()
    const [activeOption,Option]=useState()
    const [billing, setBilling]=useState('yearly')
    const [type, setType]=useState('organization')
    // const product_name=Router.query
    const handleClick=(e)=>{
        if(e.target.parentNode.nodeName=='LI') {
            e.target.parentNode.parentNode.childNodes.forEach(x => x.classList.remove(styles.active))
            e.target.parentNode.classList.add(styles.active)
            setType(e.target.parentNode.dataset.type)

        }
    }
    const handleClickOption=(e)=>{
        if(e.target.parentNode.nodeName=='LI') {
            e.target.parentNode.parentNode.childNodes.forEach(x => x.classList.remove(styles.active_offer))
            e.target.parentNode.classList.add(styles.active_offer)
            setBilling(e.target.parentNode.dataset.billing)
        }
    }


    async function getProduct() {
        try {
            const res = await fetch('/api/get_products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    key:product_name
                }),
            })
            const json = await res.json()
            if (!res.ok) throw Error(json.message)

        } catch (e) {
            throw Error(e.message)
        }
    }

//FOR ORGANIZATIONS
    const options=[{
        url:'/images/icons/eztitles-icon.svg',
        name:'EZTitles',
        price:'79.99/mo',
        type:'ESSENTIAL',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/ezconvert-icon.svg',
        name:'EZConvert',
        price:'286.98/mo',
        type:'Professional',
        description:'Includes conversion tool for almost any known file format.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)"]
    },{
        url:'/images/icons/3dtitles-icon.svg',
        name:'3DTitles',
        price:'78.90/mo',
        type:'Ver. 5',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/eztplugins-icon.svg',
        name:'Cambria Convert',
        price:'32.99/mo',
        type:'Plug-in',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/eztplugins-icon.svg',
        name:'ProMedia Carbon',
        price:'32.99/mo',
        type:'Plug-in',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    }]



    const options1=[{
        url:'/images/icons/eztitles-icon-1.png',
        name:'Plug-in for ProMedia Carbon',
        price:'32.99/mo',
        type:'for EZTitles',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/eztitles-icon-2.png',
        name:'EZTitles',
        price:'99.99/mo',
        type:'STANDARD',
        description:'Includes conversion tool for almost any known file format.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)"]
    },{
        url:'/images/icons/eztitles-icon-3.png',
        name:'EZTitles',
        price:'109.99/mo',
        type:'ULTIMATE',
        description:'Breakthrough module for Closed Captioning.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)", "DVD (HD) formats", "Sonic Scenarist", "Sonic Scenarist HDVM Authoring", "Sonic Scenarist Advanced Content", "Sonic Reel DVD", "Spruce DVD Maestro", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Pinnacle Impression DVD", "Toshiba Authoring System", "Ultech DV2000/3000", "DoStudio Authoring Suite", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Spruce Technologies DVD Maestro STL text script", "Sony DVD Architect subtitle script", "Roxio DVDIt Pro subtitle script", "Panasonic Blu-Ray Authoring SPI", "DVB subtitles - The DVB option package enables output of DVB subtitles stream compliant with the ETSI EN 300 743 standard. The output DVB subtitles stream is modified for use by ProMedia Carbon or Manzanita MP2TSME multiplexers only."]

    }]
    const options2=[{
        url:'/images/icons/eztitles-icon-1.png',
        name:'EZTitles',
        price:'1720.00',
        type:'ESSENTIALS',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/eztitles-icon-2.png',
        name:'EZTitles',
        price:'1940.00',
        type:'STANDARD',
        description:'Includes conversion tool for almost any known file format.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)"]
    },{
        url:'/images/icons/eztitles-icon-3.png',
        name:'EZTitles',
        price:'2380.00',
        type:'ULTIMATE',
        description:'Breakthrough module for Closed Captioning.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)", "DVD (HD) formats", "Sonic Scenarist", "Sonic Scenarist HDVM Authoring", "Sonic Scenarist Advanced Content", "Sonic Reel DVD", "Spruce DVD Maestro", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Pinnacle Impression DVD", "Toshiba Authoring System", "Ultech DV2000/3000", "DoStudio Authoring Suite", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Spruce Technologies DVD Maestro STL text script", "Sony DVD Architect subtitle script", "Roxio DVDIt Pro subtitle script", "Panasonic Blu-Ray Authoring SPI", "DVB subtitles - The DVB option package enables output of DVB subtitles stream compliant with the ETSI EN 300 743 standard. The output DVB subtitles stream is modified for use by ProMedia Carbon or Manzanita MP2TSME multiplexers only."]

    }]

    //FOR INDIVIDUALS
    const options3=[{
        url:'/images/icons/eztitles-icon-1.png',
        name:'EZTitles',
        price:'59.89/mo',
        type:'ULTIMATE',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/eztitles-icon-2.png',
        name:'EZConvert',
        price:'268.89/mo',
        type:'Professional',
        description:'Includes conversion tool for almost any known file format.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)"]
    },{
        url:'/images/icons/eztitles-icon-3.png',
        name:'3DConvert',
        price:'78.68/mo',
        type:'Ver. 5',
        description:'Breakthrough module for Closed Captioning.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)", "DVD (HD) formats", "Sonic Scenarist", "Sonic Scenarist HDVM Authoring", "Sonic Scenarist Advanced Content", "Sonic Reel DVD", "Spruce DVD Maestro", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Pinnacle Impression DVD", "Toshiba Authoring System", "Ultech DV2000/3000", "DoStudio Authoring Suite", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Spruce Technologies DVD Maestro STL text script", "Sony DVD Architect subtitle script", "Roxio DVDIt Pro subtitle script", "Panasonic Blu-Ray Authoring SPI", "DVB subtitles - The DVB option package enables output of DVB subtitles stream compliant with the ETSI EN 300 743 standard. The output DVB subtitles stream is modified for use by ProMedia Carbon or Manzanita MP2TSME multiplexers only."]

    }]
    const options4=[{
        url:'/images/icons/eztitles-icon-1.png',
        name:'EZTitles',
        price:'67.98/mo',
        type:'ESSENTIALS',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/eztitles-icon-2.png',
        name:'EZTitles',
        price:'88.99/mo',
        type:'STANDARD',
        description:'Includes conversion tool for almost any known file format.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)"]
    },{
        url:'/images/icons/eztitles-icon-3.png',
        name:'EZTitles',
        price:'96.89/mo',
        type:'ULTIMATE',
        description:'Breakthrough module for Closed Captioning.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)", "DVD (HD) formats", "Sonic Scenarist", "Sonic Scenarist HDVM Authoring", "Sonic Scenarist Advanced Content", "Sonic Reel DVD", "Spruce DVD Maestro", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Pinnacle Impression DVD", "Toshiba Authoring System", "Ultech DV2000/3000", "DoStudio Authoring Suite", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Spruce Technologies DVD Maestro STL text script", "Sony DVD Architect subtitle script", "Roxio DVDIt Pro subtitle script", "Panasonic Blu-Ray Authoring SPI", "DVB subtitles - The DVB option package enables output of DVB subtitles stream compliant with the ETSI EN 300 743 standard. The output DVB subtitles stream is modified for use by ProMedia Carbon or Manzanita MP2TSME multiplexers only."]

    }]
    const options5=[{
        url:'/images/icons/eztitles-icon-1.png',
        name:'EZTitles',
        price:'1200.00',
        type:'ESSENTIALS',
        description:'Subtitle preparation software. And more.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats"]
    },{
        url:'/images/icons/eztitles-icon-2.png',
        name:'EZTitles',
        price:'1600.00',
        type:'STANDARD',
        description:'Includes conversion tool for almost any known file format.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)"]
    },{
        url:'/images/icons/eztitles-icon-3.png',
        name:'EZTitles',
        price:'2020.00',
        type:'ULTIMATE',
        description:'Breakthrough module for Closed Captioning.',
        formats:["EZT", "EBU (.STL)", "EBU (.STL) for ARTE", "Windows Media Player SAMI", "Plain ASCII text", "Rich Text Format (RTF) files", "XLS Excel Workbook files", "DLP Cinema™ Subtitle XML with quality images", "DCDM SMPTE 428-7-2007 XML Subtitles", "QuickTime Text and .SMIL files", "SubRip (.srt) subtitles", "MicroDVD (.sub) subtitles", "WebVTT (.vtt) subtitles", "Custom Text Formats", "TV formats", "PAC files", "890 files", "Win 2020 text files", "DAS", "Softitler .TXT", "Avid® DS Nitris™ Subtitles Files", "OVR", "VDPC", "Timed Text (TTML XML)", "Netflix Timed Text (NFLX-TT)", "Inscriber CG (.txt)", "Apple iTunes Timed Text (.itt)", "SubStation Alpha (.SSA, .ASS)", "SUB", "Closed Captions formats", "SMPTE-TT captions (.xml)", "Scenarist Closed Caption Format (SCC)", "CPC-715 Online Caption Format (.onl)", "Captions Inc. Files (.cin)", "Cheetah CAP", "Cheetah ASC", "NCI caption files (.cap)", "Ultech caption files (.ult)", "TDS captions files", "ECF captions files", "ProCAP Closed Captions (.txt)", "NCI Timed Roll to Captions (.flc)", "MCC CEA-708 captions (.mcc)", "DVD (HD) formats", "Sonic Scenarist", "Sonic Scenarist HDVM Authoring", "Sonic Scenarist Advanced Content", "Sonic Reel DVD", "Spruce DVD Maestro", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Pinnacle Impression DVD", "Toshiba Authoring System", "Ultech DV2000/3000", "DoStudio Authoring Suite", "Adobe Encore DVD", "Apple DVD Studio Pro", "Final Cut Pro XML Interchange Format", "Spruce Technologies DVD Maestro STL text script", "Sony DVD Architect subtitle script", "Roxio DVDIt Pro subtitle script", "Panasonic Blu-Ray Authoring SPI", "DVB subtitles - The DVB option package enables output of DVB subtitles stream compliant with the ETSI EN 300 743 standard. The output DVB subtitles stream is modified for use by ProMedia Carbon or Manzanita MP2TSME multiplexers only."]

    }]

    let cards=[]

    if (type=='organization') {
        if (billing == 'yearly') {
            cards = options.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                             type={x.type} formats={x.formats}/>)

        } else if (billing == 'monthly') {
            cards = options1.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                              type={x.type} formats={x.formats}/>)

        } else {
            cards = options2.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                              type={x.type} formats={x.formats}/>)

        }
    } else if(type=='personal'){
        if (billing == 'yearly') {
            cards = options3.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                             type={x.type} formats={x.formats}/>)

        } else if (billing == 'monthly') {
            cards = options4.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                              type={x.type} formats={x.formats}/>)

        } else {
            cards = options5.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                              type={x.type} formats={x.formats}/>)

        }
    }else{
        if (billing == 'yearly') {
            cards = options3.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                              type={x.type} formats={x.formats}/>)

        } else if (billing == 'monthly') {
            cards = options4.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                              type={x.type} formats={x.formats}/>)

        } else {
            cards = options5.map((x, i) => <SubscriptionCards url={x.url} title={x.name} description={x.description} price={x.price}
                                                              type={x.type} formats={x.formats}/>)

        }
    }
    return(
        <motion.div exit={{opacity:0}} initial='initial' animate='animate'>
            <div className={styles.main_wrapper}>
                <div className={styles.main_inner}>
                    <h2>Subscription options & Pricing</h2>
                    <nav>
                        <ul className={styles.ul_menu}>
                            <li onClick={handleClick} className={styles.active} data-type='organization'><p>For Organizations</p></li>
                            <li onClick={handleClick} data-type='personal'><p>For Individuals</p></li>
                            <li onClick={handleClick} data-type='education'><p>For Education</p></li>
                            <li onClick={handleClick} data-type='other'><p>More Options</p></li>
                        </ul>
                    </nav>
                    <div className={styles.offers}>
<div className={styles.offers_inner}>
    <div className={styles.offers_nav_wrapper}>
                            <nav className={styles.nav_sub_menu}>
                                <ul className={styles.ul_sub_menu}>
                                    <li onClick={handleClickOption} className={`${styles.offers_offer} ${styles.active_offer}`} data-billing="yearly"><p>Yearly billing</p></li>
                                    <li onClick={handleClickOption} className={styles.offers_offer} data-billing="monthly"><p>Monthly billing</p></li>
                                    <li onClick={handleClickOption} className={styles.offers_offer} data-billing="lifetime"><p>Lifetime License</p></li>

                                </ul>
                            </nav>
    </div>

                        <div className={styles.offers_options_wrapper}>
                            {cards}

                        </div>

    <div className={styles.offers_bottom_disclamer}><h5>Taxes may still be added. The tax rate depends on your country tax rules,<br />entered tax identification number (e.g. VAT ID), and selected purchase method <strong>at checkout.</strong></h5></div>

</div>


                    </div>
                </div>
            </div>
        </motion.div>
    )
}
