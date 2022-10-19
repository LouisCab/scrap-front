import { CompanyInformationProvider, CompanyInformation } from '../../services/company.service';
import { InformationRowProvider } from './InformationRowProvider';

export function InformationRowProviderWrapper({
  companyInformationsProviders: companyInformationsProvider,
}: {
  companyInformationsProviders: CompanyInformationProvider[];
}) {
  const record: Record<string, CompanyInformation[]> = {};

  for (const provider of companyInformationsProvider) {
    for (const [key, value] of provider.entries()) {
      record[key] = value;
    }
  }

  return (
    <div className="pb-12">
      {Object.keys(record).map((key) => {
        return (
          <InformationRowProvider key={key} providerName={key} companyInformations={record[key]} />
        );
      })}
    </div>
  );
}
