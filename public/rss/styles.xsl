<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE xml>
<xsl:stylesheet
    version="3.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:atom="http://www.w3.org/2005/Atom"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd"
> 
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="pt-BR">
            <head>
                <title><xsl:value-of select="/rss/channel/title" /> Web Feed</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <style type="text/css">
/* Font Website: https://www.recursive.design/ */

/* recursive-latin-400-normal */
@font-face {
    font-family: 'Recursive';
    font-style: normal;
    font-display: swap;
    font-weight: 400;
    src:
        url(https://cdn.jsdelivr.net/fontsource/fonts/recursive@latest/latin-400-normal.woff2) format('woff2'),
        url(https://cdn.jsdelivr.net/fontsource/fonts/recursive@latest/latin-400-normal.woff) format('woff');
    unicode-range:
        U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F,
        U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* recursive-latin-600-normal */
@font-face {
    font-family: 'Recursive';
    font-style: normal;
    font-display: swap;
    font-weight: 600;
    src:
        url(https://cdn.jsdelivr.net/fontsource/fonts/recursive@latest/latin-600-normal.woff2) format('woff2'),
        url(https://cdn.jsdelivr.net/fontsource/fonts/recursive@latest/latin-600-normal.woff) format('woff');
    unicode-range:
        U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F,
        U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* recursive-latin-700-normal */
@font-face {
    font-family: 'Recursive';
    font-style: normal;
    font-display: swap;
    font-weight: 700;
    src:
        url(https://cdn.jsdelivr.net/fontsource/fonts/recursive@latest/latin-700-normal.woff2) format('woff2'),
        url(https://cdn.jsdelivr.net/fontsource/fonts/recursive@latest/latin-700-normal.woff) format('woff');
    unicode-range:
        U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F,
        U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

:root {
    --link: #f43f5e;
    --foreground: #1f2937;
    --background: #ffffff;
}

*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    min-height: 100vh;
    position: relative;

    tab-size: 4;
    line-height: 1.5;
    font-size: 1rem;
    font-family: 'Recursive', monospace;

    word-wrap: break-word;
    overflow-wrap: break-word;

    color: var(--foreground);
    background-color: var(--background);
}

.container {
    width: 100%;
    min-height: 100vh;
    max-width: 70ch;

    margin: 0 auto;
    padding: 3rem 1rem;
}

p {
    margin-top: 0.65rem;
    margin-bottom: 0.65rem;
}

b,
strong {
    font-weight: bold;
}

small {
    font-size: 80%;
}

a {
    color: var(--link);
    text-underline-offset: 0.2ex;
    text-decoration-thickness: 0.2ex;
}

h1,
h2,
h3 {
    color: inherit;
    margin-top: 0.85rem;
    margin-bottom: 0.85rem;
    font-weight: 700;
}

h1 {
    font-size: 1.75rem;
}

h2 {
    font-size: 1.5rem;
}

h3 {
    font-size: 1.25rem;
}

.date {
    display: flex;
    flex-direction: column;
}
                </style>
            </head>
            <body>
                <div class="container">
                    <nav>
                        <p>
                            <strong>Este é um feed da web</strong>, também conhecido como feed RSS. 
                            <strong>Inscreva-se</strong> copiando o URL da barra de endereços para o 
                            seu leitor de notícias.
                        </p>
                        <p>
                            Visite <a href="https://aboutfeeds.com">About Feeds</a> 
                            para começar a usar leitores de notícias e se inscrever. É gratuito. 
                        </p>
                    </nav>
                <header>
                    <h1>🛜 Web Feed Preview</h1>
                    <h2>  
                        <xsl:value-of select="rss/channel/title" />
                    </h2> 
                                <p>
                        <xsl:value-of select="rss/channel/description" />
                    </p>
                     <a class="head_link" target="_blank">
                    <xsl:attribute name="href">
                        <xsl:value-of select="/rss/channel/link" />
                    </xsl:attribute>Visite o Website &#x2192;</a>
                </header>
                <h2>Postagens Recentes:</h2>
                <xsl:for-each select="/rss/channel/item">
                    <h3>
                        <a target="_blank">
                            <xsl:attribute name="href">
                                <xsl:value-of select="link" />
                            </xsl:attribute>
                            <xsl:value-of select="title" />
                        </a>
                    </h3>
                    <div class="date">
                        <small class="text-gray"> 
                            <b>Publicado em: </b> 
                            <xsl:value-of select="pubDate" />
                        </small>
                        <xsl:if test="updated != ''">
                            <small class="text-gray"> 
                                <b>Atualizado em: </b> 
                                <xsl:value-of select="updated" />
                            </small>
                        </xsl:if>
                    </div>
                    <p>
                        <xsl:value-of select="description" />
                    </p>
                </xsl:for-each>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
