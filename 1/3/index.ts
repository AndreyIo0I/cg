import {PIXEL} from '../../src/canvas/pixel'

const PADDING = 100

document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementsByTagName('canvas')[0]
	const ctx = canvas.getContext('2d')

	ctx.strokeStyle = 'red'
	ctx.lineWidth = 1
	ctx.strokeRect(PADDING, PADDING, canvas.width - PADDING * 2, canvas.height - PADDING * 2)

	const form = document.getElementsByTagName('form')[0]
	form.addEventListener('submit', event => {
		event.preventDefault()
		const formData = new FormData(form)
		const x = parseInt(formData.get('x').toString()) || 0
		const y = parseInt(formData.get('y').toString()) || 0
		const r = parseInt(formData.get('r').toString()) || 0
		drawCircle(ctx, x, y, r)
	})
	form.getElementsByTagName('button')[0].click()
})

function drawCircle(ctx: CanvasRenderingContext2D, x0: number, y0: number, r: number) {
	let x = 0
	let y = r
	let radiusError = 0
	let nextRadiusError1, nextRadiusError2
	while (y >= x) {
		setMirroredPixels(ctx, x0, x, y0, y)
		nextRadiusError1 = radiusError + 2 * x + 1
		nextRadiusError2 = radiusError + 2 * (x - y + 1)
		x++
		if (Math.abs(nextRadiusError1) < Math.abs(nextRadiusError2)) {
			radiusError += 2 * x + 1
		}
		else {
			--y
			radiusError += 2 * (x - y + 1)
		}
	}
}

function setMirroredPixels(ctx: CanvasRenderingContext2D, x0: number, x: number, y0: number, y: number) {
	setPixel(ctx, x0 + x, y0 + y)
	setPixel(ctx, x0 + x, y0 - y)
	setPixel(ctx, x0 - x, y0 + y)
	setPixel(ctx, x0 - x, y0 - y)
	setPixel(ctx, x0 + y, y0 + x)
	setPixel(ctx, x0 + y, y0 - x)
	setPixel(ctx, x0 - y, y0 + x)
	setPixel(ctx, x0 - y, y0 - x)
}


function setPixel(ctx: CanvasRenderingContext2D, x: number, y: number) {
	if (x > PADDING && y > PADDING && x < ctx.canvas.width - PADDING && y < ctx.canvas.height - PADDING)
		ctx.putImageData(PIXEL, x, y)
}
