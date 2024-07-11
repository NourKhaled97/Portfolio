import { FC } from 'react';

// const styles = {
//     tab: {
        
//         // backgroundColor: "#f1f1f1",
//         // width: "100%",

//         // padding: "10px",
//         // color: "red",
//     },
// };

interface HeaderTabProps {
    title: string;
    url?: string;
}

const HeaderTab: FC<HeaderTabProps> = ({ title, url }) => {
    // const classes = styles;

    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return (<a style={{cursor:'pointer', fontSize:'18px',color:'blue'}}>{title}</a>)
};

export default HeaderTab;