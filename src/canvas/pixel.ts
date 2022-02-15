const PIXEL = document.createElement('canvas').getContext('2d').createImageData(1, 1)
const d = PIXEL.data
d[0] = 0
d[1] = 0
d[2] = 0
d[3] = 255

export {
	PIXEL,
}