type Color = [number, number, number, number]

type Line = {
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	color: Color,
}

type Point = {
	x: number,
	y: number,
	color: Color,
}

class Painter {
	private readonly canvas: HTMLCanvasElement
	private readonly gl: WebGL2RenderingContext
	private readonly program: WebGLProgram
	private lines: Array<Line> = []
	private points: Array<Point> = []

	constructor(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext, program: WebGLProgram) {
		this.canvas = canvas
		this.gl = gl
		this.program = program
		this.gl.useProgram(this.program)
		this.gl.viewport(0, 0, 1920, 961)
	}

	public drawLine(x1: number, y1: number, x2: number, y2: number, color: Color = [0.1, 0.1, 0.1, 1]) {
		this.setColor(color)

		const positions = [
			x1, y1,
			x2, y2,
		]
		this.setPositions(positions)

		this.gl.drawArrays(this.gl.LINES, 0, 2)
		this.lines.push({x1, y1, x2, y2, color})
	}

	public drawPoint(x: number, y: number, color: [number, number, number, number] = [0.1, 0.1, 0.1, 1]) {
		this.setColor(color)

		const positions = [x, y]
		this.setPositions(positions)

		this.gl.drawArrays(this.gl.POINTS, 0, 1)
		this.points.push({x, y, color})
	}

	public render() {
		this.lines.forEach(line => this.drawLine(line.x1, line.y1, line.x2, line.y2, line.color))
		this.points.forEach(point => this.drawPoint(point.x, point.y, point.color))
	}

	public clear() {
		this.gl.clearColor(0, 0, 0, 0)
		this.gl.clear(this.gl.COLOR_BUFFER_BIT)
	}

	private setPositions(positions: number[]) {
		const positionBuffer = this.gl.createBuffer()
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer)
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW)

		const positionAttribute = this.gl.getAttribLocation(this.program, 'a_position')
		this.gl.enableVertexAttribArray(positionAttribute)
		this.gl.vertexAttribPointer(positionAttribute, 2, this.gl.FLOAT, false, 0, 0)

		const resolutionUniform = this.gl.getUniformLocation(this.program, 'u_resolution')
		this.gl.uniform2fv(resolutionUniform, [this.canvas.width, this.canvas.height])
	}

	private setColor(color: [number, number, number, number]) {
		const colorUniform = this.gl.getUniformLocation(this.program, 'u_color')
		this.gl.uniform4fv(colorUniform, color)
	}
}

export {
	Painter,
}