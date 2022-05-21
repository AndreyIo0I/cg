import {Color, Painter} from '../../src/webgl/Painter'

document.addEventListener('DOMContentLoaded', main)

async function main() {
	const canvas = document.createElement('canvas')
	document.body.append(canvas)
	await Painter.create(canvas, draw)
}

const red: Color = [0.8, 0.2, 0.5, 1]
const purple: Color = [0.3, 0.2, 0.4, 1]

function draw(painter: Painter) {
	painter.clear()

	// needles
	painter.drawTriangle(860, 220, 300, -100, 300, 500, purple)
	painter.drawTriangle(600, 660, 100, 500, 600, 300, purple)
	painter.drawTriangle(-860, 220, -300, -100, -300, 500, purple)
	painter.drawTriangle(-600, 660, -100, 500, -600, 300, purple)
	painter.drawTriangle(0, 800, 400, 400, -400, 400, purple)

	// legs
	painter.drawTriangle(160, -300, 20, -700, 260, -700, red)
	painter.drawTriangle(-160, -300, -20, -700, -260, -700, red)

	// arms
	painter.drawEllipse(500, -220, 60, 100, red)
	painter.drawEllipse(-500, -220, 60, 100, red)
	painter.drawCircle(500, -300, 100, red)
	painter.drawCircle(-500, -300, 100, red)

	// body
	painter.drawCircle(0, 0, 500, red)

	// nose
	painter.drawTriangle(0, -80, -80, 40, 80, 40, [0.7, 0.2, 0.3, 1])
	painter.drawTriangle(0, -180, -10, -60, 10, -60, [0.7, 0.2, 0.3, 1])

	// mouth
	painter.drawTriangle(0, -140, 0, -180, 100, -120, purple)
	painter.drawTriangle(0, -140, 0, -180, -100, -120, purple)

	// glasses
	painter.drawCircle(160, 160, 170, purple)
	painter.drawCircle(-160, 160, 170, purple)

	// eyes
	painter.drawCircle(160, 160, 120, [1, 1, 1, 1])
	painter.drawCircle(-160, 160, 120, [1, 1, 1, 1])
	painter.drawEllipse(80, 150, 30, 50, [0, 0, 0, 1])
	painter.drawEllipse(-80, 150, 30, 50, [0, 0, 0, 1])
	painter.drawEllipse(100, 170, 10, 20, [1, 1, 1, 1])
	painter.drawEllipse(-60, 170, 10, 20, [1, 1, 1, 1])

}

export {}