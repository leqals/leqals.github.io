import { useLocation } from 'react-router-dom';

export function SetPage(pageName) {
    const location = useLocation();
    const result = location.state.page === pageName ? true : false

    return result
}