import {mat4, vec3, vec4} from 'gl-matrix'
import {createProgram} from './createProgram'

type Color = [number, number, number, number]

class Painter {
	private readonly canvas: HTMLCanvasElement
	private readonly gl: WebGL2RenderingContext
	private readonly program: WebGLProgram
	private globalMatrix: mat4 = mat4.create()

	static async create(canvas: HTMLCanvasElement) {
		const gl = canvas.getContext('webgl2')
		const program = await createProgram(gl, '../../src/webgl/vertex.glsl', '../../src/webgl/fragment.glsl')

		return new Painter(canvas, gl, program)
	}

	private constructor(canvas: HTMLCanvasElement, gl: WebGL2RenderingContext, program: WebGLProgram) {
		this.canvas = canvas
		this.gl = gl
		this.program = program
		this.gl.useProgram(this.program)
	}

	public drawLine(x1: number, y1: number, x2: number, y2: number, color: Color = [0.1, 0.1, 0.1, 1]) {
		this.setColor(color)

		const positions = [
			x1, y1,
			x2, y2,
		]
		this.setPositions(positions)

		this.gl.drawArrays(this.gl.LINES, 0, 2)
	}

	public drawPoint(x: number, y: number, color: [number, number, number, number] = [0.1, 0.1, 0.1, 1]) {
		this.setColor(color)

		const positions = [x, y]
		this.setPositions(positions)

		this.gl.drawArrays(this.gl.POINTS, 0, 1)
	}

	public drawTriangle(points: [number, number, number, number, number, number], color: [number, number, number, number] = [0.1, 0.1, 0.1, 1]) {
		this.setColor(color)

		this.setPositions(points)

		this.gl.drawArrays(this.gl.TRIANGLES, 0, 3)
	}

	public drawRect(points: [number, number, number, number], color: [number, number, number, number] = [0.1, 0.1, 0.1, 1]) {
		this.drawTriangle([points[0], points[1], points[2], points[1], points[0], points[3]], color)
		this.drawTriangle([points[2], points[3], points[2], points[1], points[0], points[3]], color)
	}

	public clear() {
		this.gl.clearColor(1, 1, 1, 1)
		this.gl.clear(this.gl.COLOR_BUFFER_BIT)
	}

	public updateViewport() {
		const width = this.canvas.clientWidth
		const height = this.canvas.clientHeight

		this.canvas.width = width
		this.canvas.height = height
		this.gl.viewport(0, 0, width, height)

		mat4.ortho(this.globalMatrix, -1920, 1920, -961, 961, -1, 1)
		const scale = Math.min(this.canvas.width / 1920, this.canvas.height / 961)
		const scaleX = 1920 / this.canvas.width
		const scaleY = 961 / this.canvas.height
		mat4.scale(this.globalMatrix, this.globalMatrix, vec3.fromValues(scaleX * scale, scaleY * scale, 1))

		const matrixUniform = this.gl.getUniformLocation(this.program, 'u_matrix')
		this.gl.uniformMatrix4fv(matrixUniform, false, this.globalMatrix)

		return [width, height]
	}

	private setPositions(positions: Array<number>) {
		const positionBuffer = this.gl.createBuffer()
		this.gl.bindBuffer(this.gl.ARRAY_BUFFER, positionBuffer)
		this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(positions), this.gl.STATIC_DRAW)

		const positionAttribute = this.gl.getAttribLocation(this.program, 'a_position')
		this.gl.enableVertexAttribArray(positionAttribute)
		this.gl.vertexAttribPointer(positionAttribute, 2, this.gl.FLOAT, false, 0, 0)
	}

	private setColor(color: [number, number, number, number]) {
		const colorUniform = this.gl.getUniformLocation(this.program, 'u_color')
		this.gl.uniform4fv(colorUniform, color)
	}
}

export {
	Painter,
}