# http://www.it-weblog.de/2012/02/typo3-snippet-open-graph/

# Temp Stuff
temp.canonical = COA
temp.canonical.wrap = <link rel="canonical" href="|">
temp.canonical.1 = TEXT
temp.canonical.1 {
	value = {$canonicalbase}
	wrap = |
}
temp.canonical.2 = TEXT
temp.canonical.2 {
	typolink {
		parameter.data = TSFE:id
		returnLast = url
		addQueryString = 0
		addQueryString.method = GET
	}
}
# Canonical
page.headerData.15 < temp.canonical
# OpenGraph Data
page.headerData.30 = TEXT
page.headerData.30.value (
<meta property="og:image" content="{$baseurl}{$og.logo}">
<meta property="og:locale" content="{$og.locale}">
<meta property="og:type" content="{$og.type}">
)
page.headerData.31 = TEXT
page.headerData.31.field = title
page.headerData.31.wrap = <meta property="og:title" content="|, {$og.titlesuffix}">
page.headerData.32 = TEXT
page.headerData.32.field = description
page.headerData.32.ifEmpty = {$og.description}
page.headerData.32.wrap = <meta property="og:description" content="|">
page.headerData.33 < temp.canonical
page.headerData.33.wrap = <meta property="og:url" content="|">
page.headerData.34 = TEXT
page.headerData.34 {
	data = register : SYS_LASTCHANGED
	wrap = <meta property="og:updated_time" content="|">
}
page.headerData.35 = TEXT
page.headerData.35 {
	data = register : SYS_LASTCHANGED
	strftime = {$timeformat}
	wrap = <meta property="human_updated_time" content="|">
}
