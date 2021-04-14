import Head from 'next/head'
import ResultsHeader from '../components/ResultsHeader'
import SearchResults from '../components/SearchResults'
import { useRouter } from 'next/router'

const { REACT_APP_API_KEY, REACT_APP_CONTEXT_KEY } = process.env;

const Search = ({ results }) => {
    const router = useRouter();
    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.q} - Search Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ResultsHeader />
            <SearchResults results={results} />
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const startIndex = context.query.start || "0";
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${ REACT_APP_API_KEY}&cx=${REACT_APP_CONTEXT_KEY}&q=${context.query.q}&start=${startIndex }`).then((response) => response.json());
    
    return {
        props: {
            results: data
        }
    }
}

export default Search
