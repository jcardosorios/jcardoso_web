import { rng } from './rng';

export interface Layer {
  base: number; // altura media de la cordillera (y en el viewBox)
  amp: number; // cuánto suben y bajan los cerros
  freq: number; // cuántos cerros caben a lo ancho
  seed: number; // semilla: cambia la forma sin cambiar el estilo
  color: string;
}

// cada cordillera suma 4 ondas: forma general, lomas, cerros y detalle [frecuencia, peso]
const OCTAVES: [number, number][] = [
  [1, 1],
  [2.3, 0.45],
  [5.1, 0.22],
  [11.7, 0.1],
];

const stepFor = (W: number) => Math.max(4, Math.round(W / 120));

function heights({ base, amp, freq, seed }: Layer, W: number) {
  const rand = rng(seed);
  const phases = OCTAVES.map(() => rand() * Math.PI * 2);
  const step = stepFor(W);
  const ys: number[] = [];
  for (let x = 0; x <= W; x += step) {
    let y = base;
    OCTAVES.forEach(([f, weight], i) => {
      y -= amp * weight * Math.sin((x / W) * Math.PI * 2 * freq * f + phases[i]);
    });
    ys.push(y);
  }
  return ys;
}

// silueta cerrada hasta el borde inferior, lista para el atributo d de un <path>
export function ridgePath(layer: Layer, W: number, H: number) {
  const step = stepFor(W);
  let d = `M0 ${H}`;
  heights(layer, W).forEach((y, i) => (d += ` L${i * step} ${y.toFixed(1)}`));
  return `${d} L${W} ${H} Z`;
}

// altura (y) de la cordillera en un x dado: para apoyar cosas encima, como una fogata
export function ridgeY(layer: Layer, x: number, W: number) {
  return heights(layer, W)[Math.round(x / stepFor(W))];
}
