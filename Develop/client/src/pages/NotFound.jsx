import { useLocation } from 'react-router-dom';

function NotFound() {
    let location = useLocation();
    return (
        <div className="card bg-white card-rounded w-50">
            <div data-book-name-name="card-header bg-dark text-center">
                <h1>
                    No match for <code>{location.pathname}</code>
                </h1>
            </div>
        </div>
    );
}

export default NotFound;
