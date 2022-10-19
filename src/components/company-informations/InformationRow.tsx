import { useTranslation } from 'react-i18next';
import { CompanyInformation } from '../../services/company.service';

export function InformationRow({ property, value }: CompanyInformation) {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="mx-3 text-xl text-center">{t(property)}</h3>
      <p className="px-6 mb-2 text-center text-slate-600">{value}</p>
    </div>
  );
}
