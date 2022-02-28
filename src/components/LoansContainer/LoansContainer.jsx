import { useQuery } from '@apollo/client'
import Loader from '../DumbComponents/Loader/Loader';
import LoansList from '../LoansList/LoansList';
import { GET_LOANS_QUERY } from './Queries';

const LoansContainer = ({ limit, offset, filters }) => {
  const { loading, error, data } = useQuery(GET_LOANS_QUERY, {
    variables: { limit, offset, filters }
  });

  if (loading) return <Loader />;
  if (error) return <p>Error!</p>;

  return (
      <>
        <h1 className='text-5xl font-bold'>Agriculture</h1>
        <p className='text-xl font-light my-6'>Farmers face many challenges like unpredictable weather and market prices, and are often forced to choose between investing in their crops and fulfilling basic needs for their families. Your support keeps their crops growing and their livelihoods stable. </p>
        <LoansList cards={data?.lend?.loans?.values} isLoading={loading} error={error} />
      </>
  );
}

export default LoansContainer;
