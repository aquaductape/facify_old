/**
 * Create a Base64 Image URL, with rotation applied to compensate for EXIF orientation, if needed.
 *
 * Optionally resize to a smaller maximum width - to improve performance for larger image thumbnails.
 * 
 * Slower but is able to render front facing camera correctly
 */
function getDataUrl(file, callback2) {
	var callback = function(srcOrientation) {
		var reader2 = new FileReader();
		reader2.onload = function(e) {
			var srcBase64 = e.target.result;
			var img = new Image();

			img.onload = function() {
				var width = img.width,
					height = img.height,
					canvas = document.createElement('canvas'),
					ctx = canvas.getContext('2d');

				// set proper canvas dimensions before transform & export
				if (4 < srcOrientation && srcOrientation < 9) {
					canvas.width = height;
					canvas.height = width;
				} else {
					canvas.width = width;
					canvas.height = height;
				}

				// transform context before drawing image
				switch (srcOrientation) {
					case 2:
						ctx.transform(-1, 0, 0, 1, width, 0);
						break;
					case 3:
						ctx.transform(-1, 0, 0, -1, width, height);
						break;
					case 4:
						ctx.transform(1, 0, 0, -1, 0, height);
						break;
					case 5:
						ctx.transform(0, 1, 1, 0, 0, 0);
						break;
					case 6:
						ctx.transform(0, 1, -1, 0, height, 0);
						break;
					case 7:
						ctx.transform(0, -1, -1, 0, height, width);
						break;
					case 8:
						ctx.transform(0, -1, 1, 0, 0, width);
						break;
					default:
						break;
				}

				// draw image
				ctx.drawImage(img, 0, 0);

				// export base64
				callback2(canvas.toDataURL());
			};

			img.src = srcBase64;
		};

		reader2.readAsDataURL(file);
	};

	var reader = new FileReader();
	reader.onload = function(e) {
		var view = new DataView(e.target.result);
		if (view.getUint16(0, false) !== 0xffd8) return callback(-2);
		var length = view.byteLength,
			offset = 2;
		while (offset < length) {
			var marker = view.getUint16(offset, false);
			offset += 2;
			if (marker === 0xffe1) {
				if (view.getUint32((offset += 2), false) !== 0x45786966) return callback(-1);
				var little = view.getUint16((offset += 6), false) === 0x4949;
				offset += view.getUint32(offset + 4, little);
				var tags = view.getUint16(offset, little);
				offset += 2;
				for (var i = 0; i < tags; i++)
					if (view.getUint16(offset + i * 12, little) === 0x0112)
						return callback(view.getUint16(offset + i * 12 + 8, little));
			} else if ((marker & 0xff00) !== 0xff00) break;
			else offset += view.getUint16(offset, false);
		}
		return callback(-1);
	};
	reader.readAsArrayBuffer(file);
}

export default getDataUrl;
