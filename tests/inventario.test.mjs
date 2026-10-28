import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

test('Estructura obligatoria de ficheros existe', () => {
  assert.ok(fs.existsSync('site/index.html'), 'Falta site/index.html');
  assert.ok(fs.existsSync('site/js/config.js'), 'Falta site/js/config.js');
  assert.ok(fs.existsSync('site/js/inventario.js'), 'Falta site/js/inventario.js');
  assert.ok(fs.existsSync('README.md'), 'Falta README.md');
});

test('Seguridad: credenciales_locales.txt está excluido en .gitignore', () => {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  assert.ok(gitignore.includes('credenciales_locales.txt'), 'PELIGRO: credenciales_locales.txt no está en .gitignore');
});

test('HTML válido: idioma español y rutas relativas', () => {
  const html = fs.readFileSync('site/index.html', 'utf8');
  assert.ok(html.includes('lang="es"'), 'El documento HTML debe tener lang="es"');
  assert.ok(!html.includes('src="/') && !html.includes('href="/'), 'Las rutas en index.html deben ser relativas, nunca empezar por /');
});

test('Inventario contiene al menos 5 equipos registrados', () => {
  const inv = fs.readFileSync('site/js/inventario.js', 'utf8');
  const ocurrencias = inv.match(/\{\s*codigo:/g) || [];
  assert.ok(ocurrencias.length >= 5, `Se esperaban al menos 5 equipos en inventario.js, pero hay ${ocurrencias.length}`);
});