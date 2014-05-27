/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 *
 * Editiert durch
 * @autor Jaeger Mathias / http://jaegermathias.de
 */

/* @param kameraObjekt = Kamera der Szene
 * @ aktiveFlaeche
 */

OrbitControls=function(kameraObjekt, aktiveFlaeche) {

	this.kameraObjekt = kameraObjekt;

	this.aktiveFlaeche = (aktiveFlaeche !== undefined ) ? aktiveFlaeche : document;

	// API
	this.enabled = true;

	this.Mittelpunkt = new THREE.Vector3(0, 0, 0);

	this.userZoom = true;
	this.userZoomSpeed = 1.0;

	this.userRotate = true;
	this.userRotateSpeed = 1.0;

	this.autoRotate = false;
	this.autoRotateSpeed = 2.0;
	// 30 seconds per round when fps is 60

	this.minPolarAngle = 0;
	// radians
	this.maxPolarAngle = Math.PI;
	// radians

	this.minDistance = 0;
	this.maxDistance = Infinity;

	// Intern verwendete Variablen
	var scope = this;

	var EPS = 0.000001;
	var PIXELS_PER_ROUND = 1800;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var zoomStart = new THREE.Vector2();
	var zoomEnd = new THREE.Vector2();
	var zoomDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;

	document.addEventListener('mousemove', onMouseMove, false);

	// events

	var changeEvent = {
		type : 'change'
	};

	var lastPosition = new THREE.Vector3(0, 0, 0);

	this.rotateLeft = function(angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateRight = function(angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		thetaDelta += angle;

	};

	this.rotateUp = function(angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	this.rotateDown = function(angle) {

		if (angle === undefined) {

			angle = getAutoRotationAngle();

		}

		phiDelta += angle;

	};

	this.zoomIn = function(zoomScale) {

		if (zoomScale === undefined) {

			zoomScale = getZoomScale();

		}

		scale /= zoomScale;

	};

	this.zoomOut = function(zoomScale) {

		if (zoomScale === undefined) {

			zoomScale = getZoomScale();

		}

		scale *= zoomScale;

	};

	this.update = function() {

		var position = this.kameraObjekt.position;
		var offset = position.clone().sub(this.Mittelpunkt);

		// angle from z-axis around y-axis

		var theta = Math.atan2(offset.x, offset.z);

		// angle from y-axis

		var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

		if (this.autoRotate) {
			this.rotateLeft(getAutoRotationAngle());
		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));

		offset.x = radius * Math.sin(phi) * Math.sin(theta);
		offset.y = radius * Math.cos(phi);
		offset.z = radius * Math.sin(phi) * Math.cos(theta);

		position.copy(this.Mittelpunkt).add(offset);

		this.kameraObjekt.lookAt(this.Mittelpunkt);

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;

		zielPosition = this.kameraObjekt.position;

		if (lastPosition.distanceTo(this.kameraObjekt.position) > 0) {

			this.dispatchEvent(changeEvent);

			lastPosition.copy(this.kameraObjekt.position);

		}

	};
	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow(0.95, scope.userZoomSpeed);

	}

	function onMouseMove(event) {

		if (scope.enabled === false)
			return;

		event.preventDefault();

		if (game.state === game.modus.orbitrotation) {

			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart);

			scope.rotateLeft(2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed);
			scope.rotateUp(2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed);

			rotateStart.copy(rotateEnd);

		}// ZOOM aktualierien
		else if (game.state === game.modus.zoom) {

			zoomEnd.set(event.clientX, event.clientY);
			zoomDelta.subVectors(zoomEnd, zoomStart);

			if (zoomDelta.y > 0) {

				scope.zoomIn();

			} else {

				scope.zoomOut();

			}

			zoomStart.copy(zoomEnd);

		} 
		// else if (game.state === game.modus.pan) {
// 
			// var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			// var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
// 
			// scope.pan(new THREE.Vector3(-movementX, movementY, 0));
// 
		// }

	}

	function onMouseWheel(event) {

		if (scope.enabled === false)
			return;
		if (scope.userZoom === false)
			return;

		var delta = 0;

		if (event.wheelDelta) {// WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if (event.detail) {// Firefox

			delta = -event.detail;

		}

		if (delta > 0) {

			scope.zoomOut();

		} else {

			scope.zoomIn();

		}

	}

	function onMouseDown(event) {

		switch(event.keyCode) {
			case 0:
				if (game.state === game.modus.orbitrotation) {
					game.state = game.modus.statisch;
		game.queue._physijs.collision_flags = 1;
					break;
				}
				if (game.state === game.modus.statisch) {
					game.state = game.modus.orbitrotation;
				}
				break;
		}
	}


	this.aktiveFlaeche.addEventListener('contextmenu', function(event) {
		// Standardverhalten ausschalten
		event.preventDefault();
	}, false);
	this.aktiveFlaeche.addEventListener('mousedown', onMouseDown, false);
	this.aktiveFlaeche.addEventListener('mousewheel', onMouseWheel, false);
	this.aktiveFlaeche.addEventListener('DOMMouseScroll', onMouseWheel, false);

};

OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
