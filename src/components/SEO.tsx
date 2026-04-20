import { Helmet } from "react-helmet-async";

const BASE_URL = "https://fraudshift.com";
const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9d0b6aa9-3f98-4688-9780-df4e2a58490e/id-preview-22d486ec--555130c1-f276-4d23-9bbb-0f88031f9a5f.lovable.app-1773931642444.png";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const SEO = ({ title, description, path, ogImage = DEFAULT_OG_IMAGE }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;
