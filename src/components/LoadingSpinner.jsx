export const LoadingSpinner = ({ isLoading }) => {
    if (!isLoading) return;

    return (
        <>
            <div className='loading-container'>
                <div className="spinner-container">
                    <div className="loading-spinner">
                    </div>
                </div>
                <h2>Loading...</h2>
            </div>
        </>
    );
}