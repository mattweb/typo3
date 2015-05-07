# set title and description
[globalVar = GP:tx_ttnews|tt_news > 0]

	page.headerData.1 = RECORDS
	page.headerData.1 {
		source = {GP:tx_ttnews|tt_news}
		source.insertData = 1
		tables = tt_news
		conf.tt_news >
		conf.tt_news = TEXT
		conf.tt_news.field = title
	}

	page.meta.description.override.data = register:newsSubheader

[global]
