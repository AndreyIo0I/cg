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
	element.style.position = 'relative'
	element.style.left = '0'
	element.style.top = '0'

	element.addEventListener('mousedown', downEvent => {
		downEvent.preventDefault()
		const startX = downEvent.x - parseInt(element.style.left)
		const startY = downEvent.y - parseInt(element.style.top)
		const onMove = (event: MouseEvent) => {
			element.style.left = event.x - startX + 'px'
			element.style.top = event.y - startY + 'px'
		}

		element.parentElement.addEventListener('mousemove', onMove)
		window.addEventListener('mouseup', () => {
			element.parentElement.removeEventListener('mousemove', onMove)
		})
	})
}

function initDialog(button: HTMLElement, dialog: HTMLElement) {
	button.addEventListener('click', () => dialog.classList.toggle('hide'))
}
