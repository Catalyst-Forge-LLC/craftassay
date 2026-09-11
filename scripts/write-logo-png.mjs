#!/usr/bin/env node
/**
 * Write a 128×128 PNG that matches site/static/logo.svg (dark tile, gold stand).
 */
import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const size = 128;
const bg = [0x1c, 0x19, 0x16, 0xff];
const gold = [0xc9, 0xa2, 0x27, 0xff];
const pale = [0xe8, 0xd5, 0xa3, 0xff];

const pixels = Buffer.alloc(size * size * 4);
for (let i = 0; i < size * size; i++) pixels.set(bg, i * 4);

function setPx(x, y, rgba) {
	if (x < 0 || y < 0 || x >= size || y >= size) return;
	pixels.set(rgba, (y * size + x) * 4);
}

function fillCircleOutline(cx, cy, r, w, rgba) {
	const r0 = r - w / 2;
	const r1 = r + w / 2;
	for (let y = Math.floor(cy - r1); y <= Math.ceil(cy + r1); y++) {
		for (let x = Math.floor(cx - r1); x <= Math.ceil(cx + r1); x++) {
			const d = Math.hypot(x - cx, y - cy);
			if (d >= r0 && d <= r1) setPx(x, y, rgba);
		}
	}
}

function thickLine(x0, y0, x1, y1, w, rgba) {
	const steps = Math.ceil(Math.hypot(x1 - x0, y1 - y0) * 2);
	for (let i = 0; i <= steps; i++) {
		const t = i / steps;
		const cx = x0 + (x1 - x0) * t;
		const cy = y0 + (y1 - y0) * t;
		const hw = w / 2;
		for (let y = Math.floor(cy - hw); y <= Math.ceil(cy + hw); y++) {
			for (let x = Math.floor(cx - hw); x <= Math.ceil(cx + hw); x++) {
				if (Math.hypot(x - cx, y - cy) <= hw) setPx(x, y, rgba);
			}
		}
	}
}

function roundedMask(x, y) {
	const r = 28;
	if (x < r && y < r) return Math.hypot(x - r, y - r) <= r;
	if (x >= size - r && y < r) return Math.hypot(x - (size - 1 - r), y - r) <= r;
	if (x < r && y >= size - r) return Math.hypot(x - r, y - (size - 1 - r)) <= r;
	if (x >= size - r && y >= size - r) {
		return Math.hypot(x - (size - 1 - r), y - (size - 1 - r)) <= r;
	}
	return true;
}

fillCircleOutline(64, 48, 18, 7, gold);
thickLine(64, 66, 64, 92, 7, gold);
thickLine(48, 92, 80, 92, 7, gold);
thickLine(40, 40, 52, 52, 5, pale);

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
		if (!roundedMask(x, y)) setPx(x, y, [0, 0, 0, 0]);
	}
}

const raw = Buffer.alloc(size * (1 + size * 4));
for (let y = 0; y < size; y++) {
	raw[y * (1 + size * 4)] = 0;
	pixels.copy(raw, y * (1 + size * 4) + 1, y * size * 4, (y + 1) * size * 4);
}

function crc32(buf) {
	let c = 0xffffffff;
	for (let i = 0; i < buf.length; i++) {
		c ^= buf[i];
		for (let j = 0; j < 8; j++) c = (c >>> 1) ^ (c & 1 ? 0xedb88320 : 0);
	}
	return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
	const typeBuf = Buffer.from(type);
	const len = Buffer.alloc(4);
	len.writeUInt32BE(data.length);
	const crc = Buffer.alloc(4);
	crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
	return Buffer.concat([len, typeBuf, data, crc]);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(size, 0);
ihdr.writeUInt32BE(size, 4);
ihdr[8] = 8;
ihdr[9] = 6;
const png = Buffer.concat([
	Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
	chunk("IHDR", ihdr),
	chunk("IDAT", deflateSync(raw)),
	chunk("IEND", Buffer.alloc(0)),
]);

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
writeFileSync(join(root, "site", "static", "logo.png"), png);
writeFileSync(join(root, "site", "static", "favicon.png"), png);
console.log("wrote logo.png and favicon.png");
