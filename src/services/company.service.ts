import axios from 'axios';

export type CompanyInformation = { [key: string]: string };
export type CompanyInformationProvider = Map<string, CompanyInformation[]>;

export const BASE_URL = ' http://localhost:3000/company/getCompanyInformations/';
export const getCompanyInformations = async (
  companyName: string
): Promise<CompanyInformationProvider[]> => {
  const providers = [];
  const res = await axios.get(BASE_URL + companyName);

  for (const [provider, informations] of Object.entries(res.data.informations)) {
    providers.push(new Map([[provider, informations]]));
  }
  return providers as CompanyInformationProvider[];
};
