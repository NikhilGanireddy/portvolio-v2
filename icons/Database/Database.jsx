function Database(props) {
    return (
        <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            {...props}
        >
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M20 6 A8 3 0 0 1 12 9 A8 3 0 0 1 4 6 A8 3 0 0 1 20 6 z"/>
            <path d="M4 6v6a8 3 0 0016 0V6"/>
            <path d="M4 12v6a8 3 0 0016 0v-6"/>
        </svg>
    );
}

export default Database;
