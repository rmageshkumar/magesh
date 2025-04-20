import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Mageshkumar Rajendiran | Senior AEM Frontend Developer & UI Lead",
  description = "Senior AEM Frontend Developer and UI Lead with 14+ years of experience crafting digital solutions for enterprises like Lloyds Bank, Shell, and Visa.",
  canonicalUrl = "https://technoread.net/",
  ogImage = "/og-image.jpg"
}) => {
  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEO;