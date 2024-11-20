import { calcCylinderSurface } from './cylinder.js'

doc = {
  radiusInput: document.querySelector('#radius'),
  heightInput: document.querySelector('#height'),
  calcButton: document.querySelector('#calcButton'),
  surfaceInput: document.querySelector('#surface'),
  delButton: document.querySelector('#delButton')
}

doc.calcButton.addEventListener('click', () => {
  const radius = Number(doc.radiusInput.value)
  const height = Number(doc.heightInput.value)
  const surface = calcCylinderSurface(radius, height)
  doc.surfaceInput.value = surface.toFixed(2)
})

doc.delButton.addEventListener('click', () => {
  doc.radiusInput.value = '';
  doc.heightInput.value = '';
  doc.surfaceInput.value = '';
})