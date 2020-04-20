const styles = {
    root: {
        width: '20%',
        height: '25%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover svg': {
            color: 'white',
            transform: 'scale(1.5)',
        },
    },
    boxContent: {
        width: '100%',
        position: 'absolute',
        bottom: '0',
        left: '0',
        padding: '10px',
        color: 'rgba(0,0,0,0.5)',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    deleteIcon: {
        transition: 'all 0.3s ease-in-out',
    },
};

export default styles;