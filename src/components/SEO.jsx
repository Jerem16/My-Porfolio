import { Helmet } from "react-helmet";

function SEO({ title, description, canonical, image, url }) {
    return (
        <Helmet>
            {/* Title & meta */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={url || canonical} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image || "/profile-4k.webp"} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:site_name" content="Jérémy Lemaignent" />

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image || "/profile-4k.webp"} />
            <meta name="twitter:creator" content="@JLem707" />
            <meta name="twitter:site" content="@JLem707" />
        </Helmet>
    );
}

export default SEO;
