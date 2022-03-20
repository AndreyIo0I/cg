document.addEventListener('DOMContentLoaded', () => {
	initFileDialog()
})

function initFileDialog() {
	initDialog(document.getElementById('file-button'), document.getElementById('file-dialog'))
	const openFileButton = document.getElementById('file-open')
	openFileButton.addEventListener('click', () => {
		const input = document.createElement('input')
		input.type = 'file'
		input.accept = '.png, .jpg, .jpeg, .bmp'
		input.click()
		input.addEventListener('change', async () => {
			const file = input.files[0]
			const img = document.createElement('img')
			img.src = URL.createObjectURL(file)
			document.getElementById('img-container').append(img)
			useDnd(img)
		})
	})
}

function useDnd(element: HTMLElement) {
	let dnd = {
		x: 0,
		y: 0,
	}

	element.style.position = 'relative'

	function onMove(event: MouseEvent) {
		element.style.left = event.x - dnd.x + 'px'
		element.style.top = event.y - dnd.y + 'px'
	}

	element.addEventListener('mousedown', event => {
		event.preventDefault()
		dnd = {
			x: event.x,
			y: event.y,
		}
		element.parentElement.addEventListener('mousemove', onMove)
	})
	window.addEventListener('mouseup', event => {
		element.parentElement.removeEventListener('mousemove', onMove)
	})
}

function initDialog(button: HTMLElement, dialog: HTMLElement) {
	button.addEventListener('click', () => dialog.classList.toggle('hide'))
}
