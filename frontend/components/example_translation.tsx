import { useTranslation } from 'next-i18next';

export const Example = () => {

  const { t } = useTranslation('example');

  return (
      <p>
        {t("example of a component with translation")}
      </p>
  );
};