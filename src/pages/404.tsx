import { FC } from 'react';

import PageDefinition from '../components/PageDefinition';
import SEO from '../components/SEO';

const NotFoundPage: FC = () => (
  <PageDefinition>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageDefinition>
);

export default NotFoundPage;
