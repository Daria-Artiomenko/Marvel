import { Helmet } from "react-helmet";
import ComicsList from "../comicsList/ComicsList";
import AppBanner from '../appBanner/AppBanner';
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
    return (
        <>
        <Helmet>
            <meta
                name="description"
                content="Page with list of Marvel comics"
            />
            <title>Comics Page</title>
        </Helmet>
            <ErrorBoundary>
                <AppBanner/>
            </ErrorBoundary>
            <ErrorBoundary>
                <ComicsList/>
            </ErrorBoundary>
        </>
    )
}

export default ComicsPage;