import { PageSwitcher } from "../PageSwitcher/PageSwitcher";
import { AppProvider, Card, Page, Link } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";
import * as translations from "./translations/en.json";

export function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Page title={translations.title} subtitle={translations.subtitle}>
        <PageSwitcher />
        <Card sectioned>
          <p>
            {translations.footer}A
            <Link url="http://kylemathewson.com"> Ky</Link>
            <Link url="http://korymathewson.com">Kor</Link>
            <Link url="http://keyfer.ca">Key </Link>
            Production.
            <Link url="https://github.com/kylemath/EEGEdu/">
              {" "}
              Github source code{" "}
            </Link>
          </p>
        </Card>
      </Page>
    </AppProvider>
  );
}
