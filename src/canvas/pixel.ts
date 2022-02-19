function setPixel(ctx: CanvasRenderingContext2D, x: number, y: number, rgba = [0, 0, 0, 255]) {
	const data = ctx.getImageData(x, y, 1, 1).data
	data[0] = rgba[0]
	data[1] = rgba[1]
	data[2] = rgba[2]
	data[3] = rgba[3]
}

export {
	setPixel,
}