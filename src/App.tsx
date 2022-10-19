import { useState, FormEvent } from 'react';
import { InformationRowProviderWrapper } from './components/company-informations/InformationRowWrapper';
import Spinner from './components/spinner/spinner';
import './index.css';
import { CompanyInformationProvider, getCompanyInformations } from './services/company.service';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyInformationsProviders, setCompanyInformationsProviders] = useState<
    CompanyInformationProvider[]
  >([]);

  const resetState = () => {
    setErr('');
    setCompanyInformationsProviders([]);
  };
  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    resetState();
    setCompanyName(event.currentTarget.value);
  };

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const companyInformations = await getCompanyInformations(companyName);
      setCompanyInformationsProviders(companyInformations);
    } catch (err: any) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='"'>
      <div className=" bg-gray-100 max-w-2xl item-center shadow-2xl rounded-md">
        <div className="p-5">
          <h1 className="text-2xl">Company Information Fetcher</h1>
          {err && <h2>{err}</h2>}
        </div>
        <div className="pr-5 pl-5 pb-5">
          <input
            type="text"
            className="outline-none border border-gray-300 shadow-inner rounded-l-md py-2 px-3 text-gray-700 focus:border-gray-400"
            onChange={handleChange}
          />
          <button
            className="bg-purple-100 rounded-r-md border border-gray-300 py-2 px-3 outline-none focus:border-gray-400"
            onClick={handleClick}
          >
            Fetch data
          </button>
        </div>
        {isLoading && <Spinner />}

        {companyInformationsProviders.length > 0 && (
          <InformationRowProviderWrapper
            companyInformationsProviders={companyInformationsProviders}
          />
        )}
      </div>
    </div>
  );
};

export default App;
