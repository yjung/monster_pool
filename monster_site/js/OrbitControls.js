OrbitControls = function(object, domElement) {

	game.controlls = {};
	game.controlls.linkeTasteUnten = false;
	game.controlls.rechteTasteUnten = false;
	game.controlls.stossKontrolle = false;
	game.controlls.stossRichtung = new THREE.Vector3(0,0,0);


	this.object = object;
	this.domElement = (domElement !== undefined ) ? domElement : document;

	// API

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the control orbits around
	// and where it pans with respect to.
	this.target = new THREE.Vector3();

	// center is old, deprecated; use "target" instead
	this.center = this.target;

	// This option actually enables dollying in and out; left as "zoom" for
	// backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;

	// Limits to how far you can dolly in and out
	this.minDistance = 5;
	this.maxDistance = 40;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;
	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0;
	// 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 1.0;
	// radians
	this.maxPolarAngle = (Math.PI / 2) - 0.25;
	// radians

	// Set to true to disable use of the keys
	this.noKeys = false;

	// The four arrow keys
	this.keys = {
		LEFT : 37,
		UP : 38,
		RIGHT : 39,
		BOTTOM : 40
	};

	this.queueFixierung = true;

	////////////
	// internals

	var scope = this;

	var EPS = 0.000001;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();
	var panOffset = new THREE.Vector3();

	var offset = new THREE.Vector3();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;
	var pan = new THREE.Vector3();

	var lastPosition = new THREE.Vector3();

	var STATE = {
		NONE : -1,
		ROTATE : 0,
		DOLLY : 1,
		PAN : 2,
		TOUCH_ROTATE : 3,
		TOUCH_DOLLY : 4,
		TOUCH_PAN : 5
	};

	var state = STATE.NONE;

	// for reset

	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();

	// so camera.up is the orbit axis

	var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
	var quatInverse = quat.clone().inverse();

	// events

	var changeEvent = {
		type : 'change'
	};
	var startEvent = {
		type : 'start'
	};
	var endEvent = {
		type : 'end'
	};

	this.updateQueueRotation = function() {
		game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;
		this.target.copy(game.whiteBall.position);
		// Mittelpunkt der Orbitrotation auf der Kugel
		game.queue.__dirtyPosition = true;
		game.queue.__dirtyRotation = true;

		game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;
		game.kamera.position.y -= 1;
		game.queue.lookAt(game.kamera.position);
		game.kamera.position.y += 1;
		game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;

		/* Lokale Variablen zur Positionsberechnung initialisieren*/
		var richtungCam = new THREE.Vector3();
		// Vektor fuer Richtung initialisieren
		var positionBall = new THREE.Vector3();
		// Vektor Position Kugel initialisieren
		var positionCam = new THREE.Vector3();
		// Vektor Position Kamera initialisieren
		var positionQueue = new THREE.Vector3();
		// Vektor Position Queue initialisieren

		/* Positionen der Objekte in Vektorvariablen sichern.*/
		positionCam.copy(game.kamera.position);
		// Position Kamera sichern
		positionBall.copy(game.whiteBall.position);
		// Position Kugel sichern

		/* Richtungsvektor fuer Queuepositionierung bestimmen*/
		richtungCam.subVectors(positionCam, positionBall);
		// Richtung zur Kamera berrechnen
		richtungCam.normalize();
		// Richtung zur Kamera normalisiert

		/* Einschub: Stosskraft in Debug-GUI ueberfuehren */
		// paramControls.stosskraftX += richtungCam.x;
		// In Debug-GUI uebertragen

		/* Sicherheitsabstand zur Kugel*/
		richtungCam.multiplyScalar(10);
		// Verlaengerung des Normalisierten Richtungsvektors

		game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;
		positionQueue.addVectors(positionBall, richtungCam);
		// Addition Richtungsvektor und Position in Welt
		positionQueue.addVectors(positionBall, richtungCam);
		game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;

		game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;
		game.queue.position.copy(positionQueue);
		// Zuweisung der berrechneten Position an den Queue
		game.queue.__dirtyRotation = true;
		game.queue.__dirtyPosition = true;

	};

	this.rotateLeft = function(angle) {
		if (angle === undefined) {
			angle = getAutoRotationAngle();
		}
		thetaDelta -= angle;

		/* Lokale Variablen zur Positionsberechnung initialisieren*/
		var richtungCam = new THREE.Vector3();
		// Vektor fuer Richtung initialisieren
		var positionBall = new THREE.Vector3();
		var positionCam = new THREE.Vector3();
		// Vektor Position Kamera initialisieren

		/* Positionen der Objekte in Vektorvariablen sichern.*/
		positionCam.copy(game.kamera.position);
		// Position Kamera sichern
		positionBall.copy(game.whiteBall.position);
		// Position Kugel sichern

		/* Richtungsvektor fuer Queuepositionierung bestimmen*/
		richtungCam.subVectors(positionBall, positionCam);
		// Richtung zur Kamera berrechnen
		richtungCam.normalize();
		// Richtung zur Kamera normalisiert

		paramControls.stosskraftX = richtungCam.x * 1000;
		paramControls.stosskraftY = richtungCam.Y * 1000;
		paramControls.stosskraftZ = richtungCam.z * 1000;
		/* Einschub: Stosskraft in Debug-GUI ueberfuehren */
		// paramControls.stosskraftX += richtungCam.x;
		// In Debug-GUI uebertragen
	};

	this.rotateUp = function(angle) {
		if (angle === undefined) {
			angle = getAutoRotationAngle();
		}
		phiDelta -= angle;
	};

	// pass in distance in world space to move left
	this.panLeft = function(distance) {

		var te = this.object.matrix.elements;

		// get X column of matrix
		panOffset.set(te[0], te[1], te[2]);
		panOffset.multiplyScalar(-distance);

		pan.add(panOffset);

		paramControls.offsetX += panOffset.x;
		// In Debug-GUI uebertragen
		if (paramControls.offsetX < -1)
			paramControls.offsetX = -1;
		if (paramControls.offsetX > 1)
			paramControls.offsetX = 1;
	};

	// pass in distance in world space to move up
	this.panUp = function(distance) {

		var te = this.object.matrix.elements;

		// get Y column of matrix
		panOffset.set(te[4], te[5], te[6]);
		panOffset.multiplyScalar(distance);

		pan.add(panOffset);

		paramControls.offsetY += panOffset.y;
		// In Debug-GUI uebertragen
		if (paramControls.offsetY < -1)
			paramControls.offsetY = -1;
		if (paramControls.offsetY > 1)
			paramControls.offsetY = 1;

	};

	// pass in x,y of change desired in pixel space,
	// right and down are positive
	this.pan = function(deltaX, deltaY) {

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if (scope.object.fov !== undefined) {

			// perspective
			var position = scope.object.position;
			var offset = position.clone().sub(scope.target);
			var targetDistance = offset.length();

			// half of the fov is center to top of screen
			targetDistance *= Math.tan((scope.object.fov / 2 ) * Math.PI / 180.0);

			// we actually don't use screenWidth, since perspective camera is fixed to screen height
			scope.panLeft(2 * deltaX * targetDistance / element.clientHeight);
			scope.panUp(2 * deltaY * targetDistance / element.clientHeight);

		} else if (scope.object.top !== undefined) {

			// orthographic
			scope.panLeft(deltaX * (scope.object.right - scope.object.left) / element.clientWidth);
			scope.panUp(deltaY * (scope.object.top - scope.object.bottom) / element.clientHeight);

		} else {

			// camera neither orthographic or perspective
			console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');

		}

	};

	this.dollyIn = function(dollyScale) {

		if (dollyScale === undefined) {

			dollyScale = getZoomScale();

		}

		scale /= dollyScale;

	};

	this.dollyOut = function(dollyScale) {

		if (dollyScale === undefined) {

			dollyScale = getZoomScale();

		}

		scale *= dollyScale;

	};

	this.update = function() {
		if (!game.controlls.stossKontrolle && !game.whiteBall.inBewegung) {
			this.updateQueueRotation();

			var position = this.object.position;

			offset.copy(position).sub(this.target);

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion(quat);

			// angle from z-axis around y-axis
			var theta = Math.atan2(offset.x, offset.z);

			// angle from y-axis
			var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);

			if (this.autoRotate) {
				this.rotateLeft(getAutoRotationAngle());
			}

			theta += thetaDelta;
			phi += phiDelta;

			if (game.motionBlur) {
				game.motionBlur.DeltaX = thetaDelta;
				game.motionBlur.DeltaY = phiDelta;
				// console.log(game.motionBlur.DeltaX );
			}

			// restrict phi to be between desired limits
			phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));

			// restrict phi to be betwee EPS and PI-EPS
			phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));

			var radius = offset.length() * scale;

			// restrict radius to be between desired limits
			radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));

			// move target to panned location
			// this.target.add(pan);
			var normalPan = new THREE.Vector3(pan.x, pan.y, pan.z);
			// normalPan.normalize(0.05);
			normalPan.multiplyScalar(0.5);
			normalPan.clampScalar(-0.5, 0.5);

			if(!game.controlls.stossKontrolle){

			game.queue.position.sub(normalPan);

			offset.x = radius * Math.sin(phi) * Math.sin(theta);
			offset.y = radius * Math.cos(phi);
			offset.z = radius * Math.sin(phi) * Math.cos(theta);

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion(quatInverse);
			game.queue.__dirtyRotation = true;
			game.queue.__dirtyPosition = true;
			position.copy(this.target).add(offset);
			game.queue.__dirtyRotation = true;
			game.queue.__dirtyPosition = true;
			}
			
			if (state != 2) {
				this.object.lookAt(this.target);
			}

			thetaDelta = 0;
			phiDelta = 0;
			scale = 1;
			// pan.set(0, 0, 0);

			if (lastPosition.distanceToSquared(this.object.position) > EPS) {
				this.dispatchEvent(changeEvent);
				lastPosition.copy(this.object.position);

			}
		}
	};

	this.reset = function() {

		state = STATE.NONE;

		this.target.copy(this.target0);
		this.object.position.copy(this.position0);

		this.update();

	};

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow(0.95, scope.zoomSpeed);

	}

	function onMouseDown(event) {

		if (scope.enabled === false)
			return;
		// event.preventDefault();

		if (event.button === 0) {
			if (scope.noRotate === true)
				return;

			state = STATE.ROTATE;

			rotateStart.set(event.clientX, event.clientY);

		} else if (event.button === 1) {
			queueFixierung = false;
			if (scope.noZoom === true)
				return;

			state = STATE.DOLLY;

			dollyStart.set(event.clientX, event.clientY);

		} else if (event.button === 2) {
			if (scope.noPan === true)
				return;
			state = STATE.PAN;
			panStart.set(event.clientX, event.clientY);
		}

		scope.domElement.addEventListener('mousemove', onMouseMove, false);
		scope.domElement.addEventListener('mouseup', onMouseUp, false);
		scope.dispatchEvent(startEvent);

	}

	function onMouseMove(event) {

		if (scope.enabled === false)
			return;

		event.preventDefault();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if (state === STATE.ROTATE) {

			if (scope.noRotate === true)
				return;

			rotateEnd.set(event.clientX, event.clientY);
			rotateDelta.subVectors(rotateEnd, rotateStart);

			// rotating across whole screen goes 360 degrees around
			scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

			rotateStart.copy(rotateEnd);

		} else if (state === STATE.DOLLY) {

			if (scope.noZoom === true)
				return;

			dollyEnd.set(event.clientX, event.clientY);
			dollyDelta.subVectors(dollyEnd, dollyStart);

			if (dollyDelta.y > 0) {

				scope.dollyIn();

			} else {

				scope.dollyOut();

			}

			dollyStart.copy(dollyEnd);

		} else if (state === STATE.PAN) {

			if (scope.noPan === true)
				return;

			panEnd.set(event.clientX, event.clientY);
			panDelta.subVectors(panEnd, panStart);

			scope.pan(panDelta.x, panDelta.y);

			panStart.copy(panEnd);

		}

		scope.update();

	}

	function onMouseUp(/* event */ ) {

		if (scope.enabled === false)
			return;

		scope.domElement.removeEventListener('mousemove', onMouseMove, false);
		scope.domElement.removeEventListener('mouseup', onMouseUp, false);
		scope.dispatchEvent(endEvent);
		state = STATE.NONE;

	}

	function onMouseWheel(event) {

		if (scope.enabled === false || scope.noZoom === true)
			return;

		event.preventDefault();
		event.stopPropagation();

		var delta = 0;

		if (event.wheelDelta !== undefined) {// WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if (event.detail !== undefined) {// Firefox

			delta = -event.detail;

		}

		if (delta > 0) {

			scope.dollyOut();

		} else {

			scope.dollyIn();

		}

		// updateQueueTranslation(delta);
		scope.update();
		scope.dispatchEvent(startEvent);
		scope.dispatchEvent(endEvent);

	}

	function onKeyDown(event) {

		if (scope.enabled === false || scope.noKeys === true || scope.noPan === true)
			return;

		switch ( event.keyCode ) {

			case scope.keys.UP:
				scope.pan(0, scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.BOTTOM:
				scope.pan(0, -scope.keyPanSpeed);
				scope.update();
				break;

			case scope.keys.LEFT:
				scope.pan(scope.keyPanSpeed, 0);
				scope.update();
				break;

			case scope.keys.RIGHT:
				scope.pan(-scope.keyPanSpeed, 0);
				scope.update();
				break;

		}

	}

	function touchstart(event) {

		if (scope.enabled === false)
			return;

		switch ( event.touches.length ) {

			case 1:
				// one-fingered touch: rotate

				if (scope.noRotate === true)
					return;

				state = STATE.TOUCH_ROTATE;

				rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
				break;

			case 2:
				// two-fingered touch: dolly

				if (scope.noZoom === true)
					return;

				state = STATE.TOUCH_DOLLY;

				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				var distance = Math.sqrt(dx * dx + dy * dy);
				dollyStart.set(0, distance);
				break;

			case 3:
				// three-fingered touch: pan

				if (scope.noPan === true)
					return;

				state = STATE.TOUCH_PAN;

				panStart.set(event.touches[0].pageX, event.touches[0].pageY);
				break;

			default:

				state = STATE.NONE;

		}

		scope.dispatchEvent(startEvent);

	}

	function touchmove(event) {

		if (scope.enabled === false)
			return;

		event.preventDefault();
		event.stopPropagation();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		switch ( event.touches.length ) {

			case 1:
				// one-fingered touch: rotate

				if (scope.noRotate === true)
					return;
				if (state !== STATE.TOUCH_ROTATE)
					return;

				rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
				rotateDelta.subVectors(rotateEnd, rotateStart);

				// rotating across whole screen goes 360 degrees around
				scope.rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);
				// rotating up and down along whole screen attempts to go 360, but limited to 180
				scope.rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

				rotateStart.copy(rotateEnd);

				scope.update();
				break;

			case 2:
				// two-fingered touch: dolly

				if (scope.noZoom === true)
					return;
				if (state !== STATE.TOUCH_DOLLY)
					return;

				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;
				var distance = Math.sqrt(dx * dx + dy * dy);

				dollyEnd.set(0, distance);
				dollyDelta.subVectors(dollyEnd, dollyStart);

				if (dollyDelta.y > 0) {

					scope.dollyOut();

				} else {

					scope.dollyIn();

				}

				dollyStart.copy(dollyEnd);

				scope.update();
				break;

			case 3:
				// three-fingered touch: pan

				if (scope.noPan === true)
					return;
				if (state !== STATE.TOUCH_PAN)
					return;

				panEnd.set(event.touches[0].pageX, event.touches[0].pageY);
				panDelta.subVectors(panEnd, panStart);

				scope.pan(panDelta.x, panDelta.y);

				panStart.copy(panEnd);

				scope.update();
				break;

			default:

				state = STATE.NONE;

		}

	}

	function touchend(/* event */ ) {

		if (scope.enabled === false)
			return;

		scope.dispatchEvent(endEvent);
		state = STATE.NONE;

	}


	this.domElement.addEventListener('contextmenu', function(event) {
		event.preventDefault();
	}, false);
	this.domElement.addEventListener('mousedown', onMouseDown, false);
	this.domElement.addEventListener('mousewheel', onMouseWheel, false);
	this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false);
	// firefox

	this.domElement.addEventListener('touchstart', touchstart, false);
	this.domElement.addEventListener('touchend', touchend, false);
	this.domElement.addEventListener('touchmove', touchmove, false);

	window.addEventListener('keydown', onKeyDown, false);

	// force an update at start
	this.update();

};

OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);
