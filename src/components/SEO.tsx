import { Helmet } from "react-helmet-async";

const BASE_URL = "https://fraudshift.com";

interface SEOProps {
  title: string;
  description: string;
  path: string;
}

const SEO = ({ title, description, path }: SEOProps) => {
  const url = `${BASE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
