import React from "react";
import { Helmet } from "react-helmet";

const HomeMeta = () => {
  const title = "Trinity Metals Limited – Leading Mining Company in Rwanda";
  const description = "Trinity Metals Limited is a leading mining company in Rwanda, specializing in tin, tungsten, and tantalum with responsible mining practices and strong community engagement.";
  const keywords = "Trinity Metals, Mining Rwanda, Tin, Tungsten, Tantalum, Responsible Mining, Trinity Musha Mines, Nyakabingo Mine, Rutongo Mines";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Trinity Metals Limited" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="https://contents.trinity-metals.com/wp-content/uploads/2025/02/site-logo1.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://contents.trinity-metals.com/wp-content/uploads/2025/02/site-logo1.png" />
    </Helmet>
  );
};

export default HomeMeta;
