
const Loading: React.FC = () => {

    return (
        <div className='loading-container'>
            <div className='spinner-border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </div>
            <h5>Welcome to our website.</h5>
            <h5>Please wait a second.</h5>
            <h5>We hope you enjoy your trip.</h5>
        </div>
    );
};

export default Loading;