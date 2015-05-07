# open graph meta tags for pages and tt_news
page.headerData.40 = COA
page.headerData.40 {

	# og:url
	10 = TEXT
	10 {
		typolink.parameter.data = TSFE:id
		typolink.forceAbsoluteUrl = 1
		typolink.returnLast = url
		wrap = <meta property="og:url" content="|">
	}

	# og:type
	20 = TEXT
	20.value = <meta property="og:type" content="{$og.type}">

	# og:title
	30 = TEXT
	30.field = subtitle // title
	30.wrap = <meta property="og:title" content="|&nbsp;&#124;&nbsp;{$og.titlesuffix}">

	# og:locale
	40 = TEXT
	40.value = <meta property="og:locale" content="{$og.locale}">

	# og:image
	50 = COA
	50 {
		10 = CONTENT
		10 {
			table = tt_content
			select {
				where = colPos=0
				orderBy = sorting
			}
			renderObj = COA
			renderObj {
				10 = FILES
				10 {
					sorting = sorting_foreign
					references {
						table = tt_content
						fieldName = image
					}
					renderObj = IMG_RESOURCE
					renderObj {
						file {
							treatIdAsReference = 1
							import.data = file:current:uid
							maxW = {$og.maxW}
							maxH = {$og.maxH}
						}
						stdWrap.wrap = <meta property="og:image" content="http://{$hostname}/|">
					}
				}
			}
		}
		20 = IMG_RESOURCE
		20 {
			file {
				treatIdAsReference = 1
				import.data = levelmedia:-1, slide
				import.listNum = 0
				maxW = {$og.maxW}
				maxH = {$og.maxH}
			}
			stdWrap.wrap = <meta property="og:image" content="http://{$hostname}/|">
		}
	}

	# og:description
	60 = TEXT
	60.field = description
	60.ifEmpty = {$og.description}
	60.wrap = <meta property="og:description" content="|">

	# og:updated_time
	70 = TEXT
	70 {
		data = register : SYS_LASTCHANGED
		wrap = <meta property="og:updated_time" content="|">
	}

}

# tt_news
[globalVar = GP:tx_ttnews|tt_news > 0]

	page.headerData.40 {

		# og:url
		10 = TEXT
		10 {
			typolink.parameter.data = TSFE:id
			typolink.forceAbsoluteUrl = 1
			typolink.returnLast = url
			typolink.additionalParams.cObject = COA
			typolink.additionalParams.cObject {
				10 = TEXT
				10.dataWrap = &tx_ttnews[tt_news]={GP:tx_ttnews|tt_news}
				10.if.isTrue.data = GP:tx_ttnews|tt_news
				20 = TEXT
				20.dataWrap = &tx_ttnews[cat]={GP:tx_ttnews|cat}
				20.if.isTrue.data = GP:tx_ttnews|cat
			}
			wrap = <meta property="og:url" content="|">
		}

		# og:title
		30 = RECORDS
		30 {
			source = {GP:tx_ttnews|tt_news}
			source.insertData = 1
			tables = tt_news
			conf.tt_news >
			conf.tt_news = TEXT
			conf.tt_news.field = title
		}

		# og:image
		50 = RECORDS
		50 {
			tables = tt_news
			source.data = GP:tx_ttnews|tt_news
			conf.tt_news = IMG_RESOURCE
			conf.tt_news {
				file {
					import = uploads/pics/
					import.field = image
					import.listNum = 0
				}
				stdWrap.required = 1
				stdWrap.wrap = <meta property="og:image" content="{TSFE:baseUrl}|">
				stdWrap.insertData = 1
			}
		}

		# og:description
		60.override.data = register:newsSubheader

		# og:updated_time
		70.override.cObject = RECORDS
		70.override.cObject {
			source = {GP:tx_ttnews|tt_news}
			source.insertData = 1
			tables = tt_news
			conf.tt_news = TEXT
			conf.tt_news.field = tstamp
		}

	}

[global]
