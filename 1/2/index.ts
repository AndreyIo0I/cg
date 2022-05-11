import {useDnd} from '../../src/dnd'

// todo вынести из обработчика загрузки, разбить на функции
document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementsByTagName('canvas')[0]
	canvas.width = 220
	canvas.height = 140
	useDnd(canvas)

	const ctx = canvas.getContext('2d')

	ctx.fillStyle = 'rgb(186,237,239)'
	ctx.fillRect(0, 0, canvas.width, 110)

	ctx.fillStyle = 'rgb(103,159,109)'
	ctx.fillRect(0, 110, canvas.width, 30)

	ctx.fillStyle = 'rgb(192,154,110)'
	ctx.fillRect(60, 60, 100, 60)

	ctx.fillStyle = 'rgb(168,133,93)'
	ctx.fillRect(90, 120, 40, 3)

	ctx.fillStyle = 'rgb(175,80,67)'
	ctx.fillRect(140, 0, 20, 50)

	const roof = new Path2D()
	roof.moveTo(40, 60)
	roof.lineTo(110, 10)
	roof.lineTo(180, 60)
	roof.lineTo(40, 60)
	ctx.fillStyle = 'rgb(114,91,72)'
	ctx.fill(roof)

	drawWindow(ctx, 65, 70)
	drawWindow(ctx, 125, 70)

	ctx.fillStyle = 'rgb(114,91,72)'
	ctx.fillRect(100, 90, 20, 30)

	ctx.beginPath()
	ctx.arc(103, 108, 2, 0, Math.PI * 2, true)
	ctx.fillStyle = 'rgb(161,127,100)'
	ctx.fill()

	for (let i = 0; i < 5; ++i) {
		drawPlank(ctx, i * 15, 90)
		drawPlank(ctx, 150 + i * 15, 90)
	}
})

function drawPlank(ctx: CanvasRenderingContext2D, x: number, y: number) {
	ctx.fillStyle = 'rgb(110,99,86)'
	ctx.fillRect(x, y, 10, 50)
}

function drawWindow(ctx: CanvasRenderingContext2D, x: number, y: number) {
	ctx.fillStyle = 'rgb(159,213,215)'
	ctx.fillRect(x, y, 30, 30)

	ctx.strokeStyle = 'black'
	ctx.strokeRect(x, y, 30, 30)
	ctx.beginPath()
	ctx.moveTo(x, y + 15)
	ctx.lineTo(x + 30, y + 15)
	ctx.moveTo(x + 15, y)
	ctx.lineTo(x + 15, y + 30)
	ctx.stroke()
}