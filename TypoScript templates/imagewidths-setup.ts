tt_content.image.20 {
	maxW >
	maxWInText >
	maxW.cObject = CASE
	maxW.cObject {
		key.data = page:backend_layout
		# backend layout with id=1
		1 = CASE
		1 {
			key.field = colPos
			# colPos=0
			0 = TEXT
			0.value = 600
			1 = TEXT
			1.value = 200
		}
		# copy the values from backend layout 1
		2 < .1
		2 {
			# adjust where necessary
			1.value = 400
			2.value = 400
		}
	}

	# copy the same configuration to maxWInText; can be overridden afterwards
	maxWInText < .maxW
}
