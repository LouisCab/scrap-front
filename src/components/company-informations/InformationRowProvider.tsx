import { useTranslation } from 'react-i18next';
import { CompanyInformation } from '../../services/company.service';
import { InformationRow } from './InformationRow';

export function InformationRowProvider({
  companyInformations,
  providerName,
}: {
  companyInformations: CompanyInformation[];
  providerName: string;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center ">
      <h2 className="m-4 text-xl text-center font-bold">{t(providerName)}</h2>
      {companyInformations.map((info, index) => {
        return (
          <InformationRow property={info.property} value={info.content} key={index.toString()} />
        );
      })}
    </div>
  );
}
