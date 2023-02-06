

export const ErrorAlert = ({ message, show }) => {

    if (!show) return;

    return (
        <h5 className='category-exists-alert'>{message}</h5>
    );

};


