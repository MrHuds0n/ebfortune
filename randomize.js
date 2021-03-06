
function getRandomSong(songList) {
	const index = Math.floor(Math.random() * songList.length)
	return songList[index]
}

function findRandomLines(lyrics, limit=100) {
	const lyricsArray = lyrics.split('\n').filter(line => line.length > 0)

	const startingPointIndex = Math.floor(Math.random() * lyricsArray.length)
	const startingPoint = lyricsArray[startingPointIndex]

	let result = startingPoint
	let forwardCounter = 1
	let reverseCounter = 1
	do {
		const nextLine = lyricsArray[startingPointIndex + forwardCounter]
		if (nextLine) {
			result = `${result}\n${nextLine}`
			forwardCounter++
		} else {
			const previousLine = lyricsArray[startingPointIndex - reverseCounter]
			result = `${previousLine}\n${result}`
			reverseCounter++
		}
	} while (result.length < limit)

	return result
}

function formatSong(song, limit) {
	const fragment = findRandomLines(song.lyrics, limit)

	return `"${fragment}"
	-- ${song.artist}, "${song.title}"`
}

function getRandomSongAndFormat(songList, limit) {
	return formatSong(getRandomSong(songList), limit)
}

module.exports = {
	getRandomSongAndFormat,
}
