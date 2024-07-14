import { FC } from "react";

const styles: Record<string, React.CSSProperties> = {
    tab: {
        cursor: "pointer",
        fontSize: "22px",
        // color: " #4184a9",
        color: "white",
        textDecoration: "none",
        // '&:hover': {
        //     backgroundColor: 'blue',
        // },
        // &:hover: {
        //     background: "#efefef"
        // },
    },
};

interface HeaderTabProps {
    title: string;
    url: string;
}

const HeaderTab: FC<HeaderTabProps> = ({ title, url }) => {
    const classes = styles;

    return (
        <a
            href={`#${url}`}
            style={classes.tab}
            className="no-underline text-cyan-100 hover:text-rose-500"
            onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${url}`)?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }}
        >
            {title}
        </a>
    );
};

export default HeaderTab;
