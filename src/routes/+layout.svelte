<script lang="ts">
    import { t } from '$lib/locale'

    const name = 'Eduardo Londero'
    const username = 'Nirewen'
    const description = $t('core.role')
    const theme = '#30a3e0'
</script>

<slot />

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="Content-Language" content="en" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />

    <meta content={description} property="og:description" />
    <meta content={username} property="og:title" />
    <meta content="https://nirewen.dev/images/avatar.png" property="og:image" />
    <meta content="image/png" property="og:image:type" />
    <meta content="150" property="og:image:width" />
    <meta content="150" property="og:image:height" />
    <meta content="https://nirewen.dev" property="og:url" />
    <meta content={name} property="og:site_name" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content="https://nirewen.dev" />
    <meta name="twitter:title" content={username} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="https://nirewen.dev/images/avatar.png" />
    <meta name="twitter:image:type" content="image/png" />
    <meta name="twitter:image:width" content="150" />
    <meta name="twitter:image:height" content="150" />
    <meta name="twitter:creator" content="@{username}" />
    <meta name="twitter:site" content="@{username}" />

    <meta name="description" content={description} />
    <meta name="title" content={username} />

    <meta name="subject" content={description} />
    <meta name="copyright" content={username} />
    <meta name="owner" content={username} />
    <meta name="revised" content="Sunday, July 2nd, 2023, 11:00 pm" />
    <meta name="rating" content="General" />

    <link rel="fluid-icon" type="image/png" href="https://nirewen.dev/images/avatar.png" />
    <link rel="canonical" href="https://nirewen.dev/index.html" />

    <link rel="apple-touch-icon" sizes="180x180" href="/images/meta/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/meta/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/meta/favicon-16x16.png" />
    <link rel="mask-icon" href="/images/meta/safari-pinned-tab.svg" color={theme} />
    <meta name="msapplication-TileColor" content={theme} />
    <meta name="theme-color" content={theme} />
    <link rel="manifest" href="/manifest.json" />
    <link rel="shortcut icon" href="/favicon.ico" />
</svelte:head>
