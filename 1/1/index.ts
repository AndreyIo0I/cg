document.addEventListener('DOMContentLoaded', () => {
	start()
})

function start() {
	const canvas = document.getElementsByTagName('canvas')[0]
	const ctx = canvas.getContext('2d')

	let y1, y2, y3
	const y1Generator = UAMGenerator(400, -4, 0.1)
	const y2Generator = freezeUAMGenerator(UAMGenerator(400, -4, 0.1), 8)
	const y3Generator = freezeUAMGenerator(UAMGenerator(400, -4, 0.1), 16)

	const a1 = createA('red')
	const a2 = createA('green')
	const a3 = createA('blue')

	requestAnimationFrame(animate)

	function animate() {
		ctx.clearRect(0, 0, 1200, 800)

		y1 = y1Generator.next().value
		y2 = y2Generator.next().value
		y3 = y3Generator.next().value

		ctx.drawImage(a1, 500, Math.floor(y1))
		ctx.drawImage(a2, 600, Math.floor(y2))
		ctx.drawImage(a3, 700, Math.floor(y3))

		requestAnimationFrame(animate)
	}
}

function* freezeUAMGenerator(generator: Generator<number>, n: number): Generator<number> {
	const frozenValue = generator.next().value

	for (let i = 0; i <= n; ++i) {
		yield frozenValue
	}

	while (true) {
		yield generator.next().value
	}
}

function* UAMGenerator(x0: number, vx0: number, ax: number): Generator<number> {
	let x = x0
	let vx = vx0

	while (true) {
		x += vx
		vx += ax

		if (x >= x0) {
			x = x0
			vx = vx0
		}

		yield x
	}
}

function createA(color: string = 'blue'): HTMLCanvasElement {
	const canvas = document.createElement('canvas')
	canvas.width = 60
	canvas.height = 100
	const ctx = canvas.getContext('2d')

	drawA(ctx, 0, 0, color)

	return canvas
}

function drawA(ctx: CanvasRenderingContext2D, x: number, y: number, color: string = 'blue'): void {
	const a = new Path2D()

	a.moveTo(x, y + 100)
	a.lineTo(x + 25, y)
	a.lineTo(x + 35, y)
	a.lineTo(x + 60, y + 100)

	a.lineTo(x + 50, y + 100)
	a.lineTo(x + 35, y + 34)
	a.lineTo(x + 25, y + 34)
	a.lineTo(x + 10, y + 100)
	a.lineTo(x, y + 100)

	ctx.fillStyle = color
	ctx.fill(a)

	ctx.fillRect(x + 15, y + 70, 30, 10)
}