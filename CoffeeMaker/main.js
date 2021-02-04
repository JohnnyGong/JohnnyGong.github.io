// In this version, automatic time-out of the LED or light is not yet programmed. Users need to push button or knob to confirm each task.

//The whole interactive interface
var background = document.getElementById("black-background");
//"End" sound
var endSound = document.getElementById("end-sound");
//"Hold" sound
var holdSound = document.getElementById("hold-sound");
//Machine running sound
var machineRunnigSound = document.getElementById("machine-running-sound");
//The complete still interface
var complete = document.getElementById("complete");

//The whole seg display
var display = document.getElementById("display");

//Time
//Time display
var timeDisplay = document.getElementById("time-display");
//Time display on/off
var timeDisplayOn = 0;
//Time in real time
var time;
var hour = 11;
var min = 59;
//Time shift display on/off
var timeShiftDisplayOn = 0;
//Time shift display
var timeShiftDisplay = document.getElementById("time-shift-display");
//AM shift display on/off
var amDisplayOn = 0;
//AM shift display
var amDisplay = document.getElementById("AM-display");
//PM shift display on/off
var pmDisplayOn = 1;
//PM shift display
var pmDisplay = document.getElementById("PM-display");

//Counting down display
var countDownDisplay = document.getElementById("count-down-display");
//Counting down display on/off
var countDownDisplayOn = 0;
//Counting down number
var countDown = 3;

//Programmed time
//Programmed time display
var progTimeDisplay = document.getElementById("prog-time-display");
//Programmed time display on/off
var progTimeDisplayOn = 0;
//Programmed time
var progTime;
var progHour = 12;
var progMin = 0;
//Programmed time hour display
var progTimeHourDisplay = document.getElementById("prog-time-hour-display");
//Programmed time minute display
var progTimeMinuteDisplay = document.getElementById("prog-time-minute-display");
//Programmed time shift display on/off
var progTimeShiftDisplayOn = 0;
//Time shift display
var progTimeShiftDisplay = document.getElementById("prog-time-shift-display");
//Programmed AM shift display
var progamDisplay = document.getElementById("prog-AM-display");
//Programmed AM shift display on/off
var progamDisplayOn = 0;
//Programmed AM shift selected/unselected
var progamDisplaySel = 1;
//Programmed PM shift display
var progpmDisplay = document.getElementById("prog-PM-display");
//Programmed PM shift display on/off
var progpmDisplayOn = 0;
//Programmed PM shift selected/unselected
var progpmDisplaySel = 0;
//First time program
var progFirstTime = 0;

//Clock time
//Clock time display
var clockTimeDisplay = document.getElementById("clock-time-display");
//Clock time display on/off
var clockTimeDisplayOn = 0;
//Clock time
var clockTime, clockHour, clockMin;
//Clock time hour display
var clockTimeHourDisplay = document.getElementById("clock-time-hour-display");
//Clock time minute display
var clockTimeMinuteDisplay = document.getElementById("clock-time-minute-display");
//Clock time shift display on/off
var clockTimeShiftDisplayOn = 0;
//Clock time shift display
var clockTimeShiftDisplay = document.getElementById("clock-time-shift-display");
//Clock AM shift display
var clockamDisplay = document.getElementById("clock-AM-display");
//Clock AM shift display hidden/unhidden
var clockamDisplayOn = 0;
//Clock AM shift display selected/deselected
var clockamDisplaySel = 1;
//Clock PM shift display
var clockpmDisplay = document.getElementById("clock-PM-display");
//Clock PM shift display hidden/unhidden
var clockpmDisplayOn = 0;
//Clock PM shift display selected/deselected
var clockpmDisplaySel = 0;

//Size display
var sizeDisplay = document.getElementById("size-display");
//Size display on/off
var sizeDisplayOn = 0;
//Size
var size = 9;

//Programmed size display
var progSizeDisplay = document.getElementById("prog-size-display");
//Programmed size display on/off
var progSizeDisplayOn = 0;
//Programmed size
var progSize = 9;

//Temperature display
var tempDisplay = document.getElementById("temp-display");
//Temperature display on/off
var tempDisplayOn = 0;
//Temperature
var temp = 190;

//Programmed temperature display
var progTempDisplay = document.getElementById("prog-temp-display");
//Programmed temperature display on/off
var progTempDisplayOn = 0;
//Programmed temperature
var progTemp = 190;


//Temperature unit display on/off
var tempUnitDisplayOn = 0;
//Temperature unit display
var tempUnitDisplay = document.getElementById("temperature-unit-display");
//Centigrade unit display on/off
var ceTempDisplayOn = 0;
//Centigrade unit display
var ceTempDisplay = document.getElementById("Ce");
//Fahrenheit unit display on/off
var faTempDisplayOn = 0;
//Fahrenheit unit display
var faTempDisplay = document.getElementById("Fa");

//Tags
//Wifi tag on/off
var wifiTagOn = 0;
//Wifi tag
var wifiTag = document.getElementById("wifi");
//Descale tag on/off
var descaleTagOn = 0;
//Descale tag
var descaleTag = document.getElementById("descale");
//Cups tag on/off
var cupsTagOn = 0;
//Cups tag
var cupsTag = document.getElementById("cups");
//Gold tag on/off
var goldTagOn = 0;
//Gold tag
var goldTag = document.getElementById("gold");
//Light tag on/off
var lightTagOn = 0;
//Light tag
var lightTag = document.getElementById("light");
//Medium tag on/off
var mediumTagOn = 0;
//Medium tag
var mediumTag = document.getElementById("medium");
//Bold tag on/off
var boldTagOn = 0;
//Bold tag
var boldTag = document.getElementById("bold");
//Temp tag on/off
var tempTagOn = 0;
//Temp tag
var tempTag = document.getElementById("temp");
//Auto On tag on/off
var autoTagOn = 0;
//Auto On tag
var autoTag = document.getElementById("autoon");
//Clock tag on/off
var clockTagOn = 0;
//Clock tag
var clockTag = document.getElementById("clock");

//Strength tag selector, 0 = Gold, 1 = light, 2 = medium, 3 = bold
var strSelector = 0;
//Programmed strength tag selector, 0 = Gold, 1 = light, 2 = medium, 3 = bold
var progStrSelector = 0;

//Tags in programmed brew
//Prog-Wifi tag on/off
var progWifiTagOn = 0;
//Prog-Wifi tag
var progWifiTag = document.getElementById("prog-wifi");
//Prog-Descale tag on/off
var progDescaleTagOn = 0;
//Prog-Descale tag
var progDescaleTag = document.getElementById("prog-descale");
//Prog-Cups tag on/off
var cupsTagOn = 0;
//Prog-Cups tag
var progCupsTag = document.getElementById("prog-cups");
//Prog-Gold tag on/off
var goldTagOn = 0;
//Prog-Cups tag
var progGoldTag = document.getElementById("prog-gold");
//Prog-Light tag on/off
var lightTagOn = 0;
//Prog-Light tag
var progLightTag = document.getElementById("prog-light");
//Prog-Medium tag on/off
var mediumTagOn = 0;
//Prog-Medium tag
var progMediumTag = document.getElementById("prog-medium");
//Prog-Bold tag on/off
var boldTagOn = 0;
//Prog-Bold tag
var progBoldTag = document.getElementById("prog-bold");
//Prog-Temp tag on/off
var tempTagOn = 0;
//Prog-Temp tag
var progTempTag = document.getElementById("prog-temp");
//Prog-Auto On tag on/off
var autoTagOn = 0;
//Prog-Auto On tag
var progAutoTag = document.getElementById("prog-autoon");
//Prog-Clock tag on/off
var clockTagOn = 0;
//Prog-Clock tag
var progClockTag = document.getElementById("prog-clock");

//Clock setting steps
var clockStep = 0;
//Program setting steps
var progStep = 0;
//Descale steps: 
var descaleCycle = 0;
//Brew steps: from ready to brew to brew complete
var brewCycle = 0;
//Ready to brew
var ready = 0;

//Strength menu on/off
var strMenuOn = 0;
//Descale on/off
var descaleOn = 0;
//Temperature menu on/off
var tempMenuOn = 0;
//Clock on/off
var clockOn = 0;
//Auto On menu on/off(Can be on/off anytime)
var autoOn = 0;
//Program on/off
var progOn = 0;
//Cups menu on/off
var cupsMenuOn = 0;
//Brew on
var brewOn = 0;
//Complete on
var completeOn = 0;

//Strength button
var strButton = document.getElementById("str-button");
//Temperature button
var tempButton = document.getElementById("temp-button");
//Auto On button
var autoButton = document.getElementById("auto-button");
//Knob
var knob = document.getElementById("knob");

//Strength button LED
var strLight = document.getElementById("str-LED");
//Temperature button LED
var tempLight = document.getElementById("temp-LED");
//Auto On button LED
var autoLight = document.getElementById("auto-LED");
//Dancing knob
var dancingKnob = document.getElementById("dancing-knob");

//timer
var timer = 0;

//<----------------------------------------------------------------------------------------------->

//Long press "Strength" menu to descale
strButton.addEventListener("mousedown", holdStrDown);
strButton.addEventListener("mouseup", holdStrUp);

//Long press "Temperature" to set clock
tempButton.addEventListener("mousedown", holdTempDown);
tempButton.addEventListener("mouseup", holdTempUp);

//Long press "Auto-on" to program
autoButton.addEventListener("mousedown", holdAutoDown);
autoButton.addEventListener("mouseup", holdAutoUp);

//Long press the knob to cancel
knob.addEventListener("mousedown", holdKnobDown);
knob.addEventListener("mouseup", holdKnobUp);

//Get the timestamp for the current moment
function getTimeNow(){
	var now = new Date();
	return now.getTime();
}

//The start/end time of holding a button, and each moment during the hold
var holdTimeStart, holdTimeEnd, holdTime;

//When hold the strength button
function holdStrDown(){

	//Get the time
	holdTimeStart = getTimeNow();

	holdTime = setInterval(function() {
		holdTimeEnd = getTimeNow();
		//After 500ms, enter long-press counting down
		if (holdTimeEnd - holdTimeStart > 500){
			exitSize();
			//Realtime display shuts down
			timeDisplayOn = 0;
			timeDisplay.style.display = "none";
			//Timeshift display hidden
			timeShiftDisplayOn = 0;
			timeShiftDisplay.style.opacity = "0";
			//Temperature unit display hidden
			tempUnitDisplayOn = 0;
			tempUnitDisplay.style.opacity = "0";
			//Counting down display turns on
			countDownDisplayOn = 1;
			countDownDisplay.style.display = "block";
			//Reset the counting down to 3
			var countDown = 3;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;

		}
		//After 1.5s, display "02"
		if (holdTimeEnd - holdTimeStart > 1500) {
			//Counts down to 2
			var countDown = 2;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;
		}
		//After 2.5s, display "01"
		if (holdTimeEnd - holdTimeStart > 2500) {
			//Counts down to 1
			var countDown = 1;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;
		}
		//After 3s, start descaling
		if (holdTimeEnd - holdTimeStart > 3500){
			clearInterval(holdTime);
			//Descale starts
			descaleOn = 1;
			//Counting down display shuts offs
			countDownDisplayOn = 0;
			countDownDisplay.style.display = "none";
			//Time display pops out but hidden
			timeDisplay.style.display = "block";
			timeDisplay.style.opacity = "0";
			//Descaling tag turns on
			descaleTagOn = 1;
			descaleTag.style.opacity = "1";
			//Dancing knob
			dancingKnob.style.opacity = "1";
			//Descale complete ⭕
			machineRunnigSound.play();
		}
	}, 100)
};

//When remove your finger from the strength button
function holdStrUp(){

	clearInterval(holdTime);
	//Within 500ms, clicks
	if (holdTimeEnd - holdTimeStart < 500) {

		//If the maching is not brewing
		if (brewOn != 1 && descaleOn != 1){

			//If menu is off, turn it on. At the same time, exit other already-on sub-menu
			if (clockOn == 0 && progOn == 0 && strMenuOn == 0) {
				//Exit temp sub-menu
				exitTemperature();
				//Exit cups sub-menu
				exitSize();

				//Time display still on, just hidden (opacity = 0)
				display.style.opacity = "0";

				//Turn on strength menu
				strMenuOn = 1;
				//Stength menu LED lights up
				strLight.style.opacity = "1";
				//Stength tags lit up
				goldTagOn = 1;
				goldTag.style.opacity = "1";
				lightTagOn = 1;
				lightTag.style.opacity = "1";
				mediumTagOn = 1;
				mediumTag.style.opacity = "1";
				boldTagOn = 1;
				boldTag.style.opacity = "1";

				//Selected tag blinks
				if (strSelector == 0) {
					gold.classList.add("blink");
					light.classList.remove("blink");
					medium.classList.remove("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 1) {
					gold.classList.remove("blink");
					light.classList.add("blink");
					medium.classList.remove("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 2) {
					gold.classList.remove("blink");
					light.classList.remove("blink");
					medium.classList.add("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 3) {
					gold.classList.remove("blink");
					light.classList.remove("blink");
					medium.classList.remove("blink");
					bold.classList.add("blink");
				}
			}

			//If menu is on, turn it off.
			else if (clockOn == 0 && progOn == 0 && strMenuOn == 1) {
				exitStrength();
			}
		}
	}

	//Hold after 500ms and before 3.5s
	if (holdTimeEnd - holdTimeStart > 500 & holdTimeEnd - holdTimeStart < 3500) {
		//Realtime display turns on
		timeDisplayOn = 1;
		timeDisplay.style.display = "block";
		//Timeshift display hidden
		timeShiftDisplayOn = 1;
		timeShiftDisplay.style.opacity = "1";
		//Counting down display turns off
		countDownDisplayOn = 0;
		countDownDisplay.style.display = "none";
	}
};

//When hold the Temperature button
function holdTempDown(){

	//Get the time
	holdTimeStart = getTimeNow();

	holdTime = setInterval(function() {
		holdTimeEnd = getTimeNow();
		//After 500ms, enter long-press counting down
		if (holdTimeEnd - holdTimeStart > 500){
			exitSize();
			//Realtime display shuts down
			timeDisplayOn = 0;
			timeDisplay.style.display = "none";
			//Timeshift display hidden
			timeShiftDisplayOn = 0;
			timeShiftDisplay.style.opacity = "0";
			//Temperature unit display hidden
			tempUnitDisplayOn = 0;
			tempUnitDisplay.style.opacity = "0";
			//Counting down display turns on
			countDownDisplayOn = 1;
			countDownDisplay.style.display = "block";
			//Reset the counting down to 3
			var countDown = 3;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;

		}
		//After 1.5s, display "02"
		if (holdTimeEnd - holdTimeStart > 1500) {
			
			//Counts down to 2
			var countDown = 2;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;
		}
		//After 2.5s, display "01"
		if (holdTimeEnd - holdTimeStart > 2500) {
			
			//Counts down to 1
			var countDown = 1;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;
		}
		//After 3s, enter clock setting
		if (holdTimeEnd - holdTimeStart > 3500){
			
			clearInterval(holdTime);
			//Counting down display shuts off
			countDownDisplayOn = 0;
			countDownDisplay.style.display = "none";
			//Timeshift display shuts off
			timeShiftDisplayOn = 0;
			timeShiftDisplay.style.display = "none";
			//Clock time shift display turns on
			clockTimeShiftDisplayOn = 1;
			clockTimeShiftDisplay.style.display = "block";
			//Clock time display turns on
			clockTimeDisplayOn = 1;
			clockTimeDisplay.style.display = "block";
			//Clock time shift display AM/PM unhidden
			clockamDisplayOn = 1;
			clockamDisplay.style.opacity = "1";
			clockpmDisplayOn = 1;
			clockpmDisplay.style.opacity = "1";
			
			//Read the current time
			clockHour = hour;
			clockMin = min;
			//Corresponding time shift display blinks
			if (amDisplayOn == 1) {
				clockamDisplay.classList.add("blink");
				clockamDisplaySel = 1;
				clockpmDisplaySel = 0;
			}
			else {
				clockpmDisplay.classList.add("blink");
				clockpmDisplaySel = 1;
				clockamDisplaySel = 0;
			}

			//Display the current time in the clock time display
			displayClockTime();
			//Clock tag on
			clockTagOn = 1;
			clockTag.style.opacity = "1";

			clockOn = 1;
		}
	}, 100)

};

//When remove your finger from the strength button
function holdTempUp(){

	clearInterval(holdTime);
	//Within 500ms, clicks
	if (holdTimeEnd - holdTimeStart < 500) {

		//If the maching is not running
		if (brewOn != 1 && descaleOn != 1){
			//If menu is off, turn it on. At the same time, exit other already-on sub-menu
			if (clockOn == 0 && progOn == 0 && tempMenuOn == 0) {
				//Exit strength sub-menu
				exitStrength();

				//Exit cups sub-menu 
				exitSize();

				//Time display shuts off
				timeDisplayOn = 0;
				timeDisplay.style.display = "none";
				//Time shift display hidden
				timeShiftDisplayOn = 0;
				timeShiftDisplay.style.opacity = "0";

				//Turn on temp menu
				tempMenuOn = 1;
				//Temp menu LED lights up
				tempLight.style.opacity = "1";
				//Temp display lights up
				tempDisplayOn = 1;
				tempDisplay.style.display = "block";
				//Temp unit display lights up
				tempUnitDisplayOn = 1;
				tempUnitDisplay.style.opacity = "1";
				faTempDisplayOn = 1;
				faTempDisplay.style.opacity = "1";
			}

			//If menu is on, turn it off.
			else if (clockOn == 0 && progOn == 0 && tempMenuOn == 1) {
				exitTemperature();
			}
		}
	}

	//Hold after 500ms and before 3.5s
	if (holdTimeEnd - holdTimeStart > 500 & holdTimeEnd - holdTimeStart < 3500) {
		//Realtime display turns on
		timeDisplayOn = 1;
		timeDisplay.style.display = "block";
		//Timeshift display hidden
		timeShiftDisplayOn = 1;
		timeShiftDisplay.style.opacity = "1";
		//Counting down display turns off
		countDownDisplayOn = 0;
		countDownDisplay.style.display = "none";
	}
};

//When hold the Auto Brew button
function holdAutoDown(){
	//Get the time
	holdTimeStart = getTimeNow();

	holdTime = setInterval(function() {
		holdTimeEnd = getTimeNow();
		//After 500ms, enter long-press counting down
		if (holdTimeEnd - holdTimeStart > 500){
			exitSize();
			//Realtime display shuts down
			timeDisplayOn = 0;
			timeDisplay.style.display = "none";
			//Timeshift display hidden
			timeShiftDisplayOn = 0;
			timeShiftDisplay.style.opacity = "0";
			//Temperature unit display hidden
			tempUnitDisplayOn = 0;
			tempUnitDisplay.style.opacity = "0";
			//Counting down display turns on
			countDownDisplayOn = 1;
			countDownDisplay.style.display = "block";
			//Reset the counting down to 3
			var countDown = 3;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;

		}
		//After 1.5s, display "02"
		if (holdTimeEnd - holdTimeStart > 1500) {
			//Counts down to 2
			var countDown = 2;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;
		}
		//After 2.5s, display "01"
		if (holdTimeEnd - holdTimeStart > 2500) {
			//Counts down to 1
			var countDown = 1;
			//Display counting down number
			countDownDisplay.innerText = "0" + countDown;
			countDownDisplay.textContent = "0" + countDown;
		}
		//After 3s, enter prog setting
		if (holdTimeEnd - holdTimeStart > 3500){
			clearInterval(holdTime);

			//Time shift display unhidden
			timeShiftDisplay.style.opacity = "1";
			//Counting down display shuts off
			countDownDisplayOn = 0;
			countDownDisplay.style.display = "none";
			//Timeshift display shuts off
			timeShiftDisplayOn = 0;
			timeShiftDisplay.style.display = "none";
			//Prog time shift display turns on
			progTimeShiftDisplayOn = 1;
			progTimeShiftDisplay.style.display = "block";
			//prog time display turns on
			progTimeDisplayOn = 1;
			progTimeDisplay.style.display = "block";
			//prog time shift display AM/PM unhidden
			progamDisplayOn = 1;
			progamDisplay.style.opacity = "1";
			progpmDisplayOn = 1;
			progpmDisplay.style.opacity = "1";

			//Auto brew LED lights up
			autoLight.style.opacity = "1";

			//Corresponding time shift display blinks
			if (progamDisplaySel == 1) {
				progamDisplay.classList.add("blink");
				progamDisplaySel = 1;
			}
			else {
				progpmDisplay.classList.add("blink");
				progpmDisplaySel = 1;
			}

			//Display the current time in the clock time display
			displayProgTime();
			//Clock tag on
			autoTagOn = 1;
			autoTag.style.opacity = "1";

			progOn = 1;
			progStep = 0;
		}
	}, 100)

};

//When remove your finger from the Auto Brew button
function holdAutoUp(){
	clearInterval(holdTime);
	//Within 500ms, clicks
	if (holdTimeEnd - holdTimeStart < 500) {

		if (progFirstTime == 0) {
			//Don't do anything if it's in one of the following situations: 1. descale, 2. clock, 3, program
			if (descaleOn != 1 && clockOn != 1 && progOn != 1) {
				//exit the current sub-menu, three situation: 1. idle, 2. strength, 3. temperature, 4.size
				if (strMenuOn == 1) {
					exitStrength();
				}
				else if (tempMenuOn == 1) {
					exitTemperature();
				}
				else if (ready == 1){
					exitSize();
				}

				//Hide the display area
				timeDisplayOn = 0;
				timeDisplay.style.opacity = "0";
				timeShiftDisplayOn = 0;
				timeShiftDisplay.style.opacity = "0";

				//"Hold" shows up in the segment
				background.style.background = "url('pic/background_hold.png')";
				background.style.backgroundSize = "100%";
				//Alert for "Hold" 🈲
				holdSound.play();

				//After 3s ❓(is 3s too long?) or whenever the user hold for 3 secs ❓ back to normal background
				setTimeout(function(){
					//Unhide the time display and the timeshif display
					timeDisplayOn = 1;
					timeDisplay.style.opacity = "1";
					timeShiftDisplayOn = 1;
					timeShiftDisplay.style.opacity = "1";
					//"Hold" disappears
					background.style.background = "url('pic/background.png')";
					background.style.backgroundSize = "100%";
				},2000)
			}
		}
		else {
			//If the maching is not running
			if (autoOn != 1){
				//Auto On is on ⭕
				autoOn = 1;
				//Temp menu LED lights up
				autoLight.style.opacity = "1";
				//Auto On tag is on
				autoTagOn = 1;
				autoTag.style.opacity = "1";
			}
			//If menu is on, turn it off.
			else {
				//Auto On is off ⭕
				autoOn = 0;
				//Temp menu LED shuts down
				autoLight.style.opacity = "0.1";
				//Auto On tag is on
				autoTagOn = 0;
				autoTag.style.opacity = "0";
			}
		}
	}

	//Hold after 500ms and before 3.5s
	if (holdTimeEnd - holdTimeStart > 500 & holdTimeEnd - holdTimeStart < 3500) {
		//Realtime display turns on
		timeDisplayOn = 1;
		timeDisplay.style.display = "block";
		//Timeshift display hidden
		timeShiftDisplayOn = 1;
		timeShiftDisplay.style.opacity = "1";
		//Counting down display turns off
		countDownDisplayOn = 0;
		countDownDisplay.style.display = "none";
	}
};

//When hold the knob
function holdKnobDown(){
	if (descaleOn == 1) {
		//Get the time
		holdTimeStart = getTimeNow();

		holdTime = setInterval(function() {
			holdTimeEnd = getTimeNow();
			//After 500ms, enter long-press counting down
			if (holdTimeEnd - holdTimeStart > 500){
				//When it's descaling
				timeDisplayOn = 0;
				timeDisplay.style.display = "none";
				//When it's in clock setting ⭕
				
				//When it's brewing ⭕

				//Counting down display turns on
				countDownDisplayOn = 1;
				countDownDisplay.style.display = "block";
				//Reset the counting down to 3
				var countDown = 3;
				//Display counting down number
				countDownDisplay.innerText = "0" + countDown;
				countDownDisplay.textContent = "0" + countDown;
			}
			//After 1.5s, display "02"
			if (holdTimeEnd - holdTimeStart > 1500) {
				//Counts down to 2
				var countDown = 2;
				//Display counting down number
				countDownDisplay.innerText = "0" + countDown;
				countDownDisplay.textContent = "0" + countDown;
			}
			//After 2.5s, display "01"
			if (holdTimeEnd - holdTimeStart > 2500) {
				//Counts down to 1
				var countDown = 1;
				//Display counting down number
				countDownDisplay.innerText = "0" + countDown;
				countDownDisplay.textContent = "0" + countDown;
			}
			//After 3.5s, cancel the current operation and back to idle state
			if (holdTimeEnd - holdTimeStart > 3500){
				clearInterval(holdTime);

				//Counting down display shuts off
				countDownDisplayOn = 0;
				countDownDisplay.style.display = "none";

				//When it's descaling
				if (descaleOn == 1) {
					//Exit descale
					descaleOn = 0;
					descaleTagOn = 0;
					descaleTag.style.opacity = 0;
					//Dancingknob stops
					dancingKnob.style.opacity = "0";
					machineRunnigSound.pause();
				}
				//When it's in clock setting ⭕
				//When it's brewing ⭕
				//When it's in program ⭕

				//Back to idle, time display shows up
				timeDisplayOn = 1;
				timeDisplay.style.opacity = "1";
				timeDisplay.style.display = "block";
				//Time shift display unhidden
				timeShiftDisplayOn = 1;
				timeShiftDisplay.style.opacity = "1";
			}
		}, 100)
	}
};

//When remove your finger from the knob
function holdKnobUp(){
	if (descaleOn == 1) {
		clearInterval(holdTime);
		//Within 500ms, clicks
		if (holdTimeEnd - holdTimeStart < 500) {

			if (progFirstTime == 0) {
				//Don't do anything if it's in one of the following situations: 1. descale, 2. clock, 3, program
				if (descaleOn != 1 && clockOn != 1 && progOn != 1) {
					//exit the current sub-menu, three situation: 1. idle, 2. strength, 3. temperature, 4.size
					if (strMenuOn == 1) {
						exitStrength();
					}
					else if (tempMenuOn == 1) {
						exitTemperature();
					}
					else if (ready == 1){
						exitSize();
					}

					//Hide the display area
					timeDisplayOn = 0;
					timeDisplay.style.opacity = "0";
					timeShiftDisplayOn = 0;
					timeShiftDisplay.style.opacity = "0";

					//"Hold" shows up in the segment
					background.style.background = "url('pic/background_hold.png')";
					background.style.backgroundSize = "100%";
					//Alert for "Hold" 🈲
					holdSound.play();

					//After 3s ❓(is 3s too long?) or whenever the user hold for 3 secs ❓ back to normal background
					setTimeout(function(){
						//Unhide the time display and the timeshif display
						timeDisplayOn = 1;
						timeDisplay.style.opacity = "1";
						timeShiftDisplayOn = 1;
						timeShiftDisplay.style.opacity = "1";
						//"Hold" disappears
						background.style.background = "url('pic/background.png')";
						background.style.backgroundSize = "100%";
					},2000)
				}
			}
			else {
				//If the maching is not running
				if (autoOn != 1){
					//Auto On is on ⭕
					autoOn = 1;
					//Temp menu LED lights up
					autoLight.style.opacity = "1";
					//Auto On tag is on
					autoTagOn = 1;
					autoTag.style.opacity = "1";
				}
				//If menu is on, turn it off.
				else {
					//Auto On is off ⭕
					autoOn = 0;
					//Temp menu LED shuts down
					autoLight.style.opacity = "0.1";
					//Auto On tag is on
					autoTagOn = 0;
					autoTag.style.opacity = "0";
				}
			}
		}

		//Hold after 500ms and before 3.5s
		if (holdTimeEnd - holdTimeStart > 500 & holdTimeEnd - holdTimeStart < 3500) {

			//Counting down display turns off
			countDownDisplayOn = 0;
			countDownDisplay.style.display = "none";

			//When it's descaling
			if (descaleOn == 1) {}
			//When it's in clock setting
			else if (clockOn == 1) {}
			//When it's brewing
			else if (brewOn == 1) {}
			//When it's in program
			else if (progOn == 1) {}
		}
	}
};

//Rotating/Pressing the knob
document.onkeydown=function(event){

    	var e = event || window.event || arguments.callee.caller.arguments[0];

    	//Rotate counterclockwise (equivalent to input keyboard A)
    	if (e && e.keyCode == 65) {

     		//When in "Strength" menu, switches between different strength settings from right to left
    		if (strMenuOn == 1) {

    			strSelector -= 1;

    			if (strSelector < 0) {
    				strSelector = 3;
    			}

    			//Selected tag blinks
				if (strSelector == 0) {
					gold.classList.add("blink");
					light.classList.remove("blink");
					medium.classList.remove("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 1) {
					gold.classList.remove("blink");
					light.classList.add("blink");
					medium.classList.remove("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 2) {
					gold.classList.remove("blink");
					light.classList.remove("blink");
					medium.classList.add("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 3) {
					gold.classList.remove("blink");
					light.classList.remove("blink");
					medium.classList.remove("blink");
					bold.classList.add("blink");
				}
    		}

    		//When in "Temperature" menu, decrease temperature
    		else if (tempMenuOn == 1) {

    			if (temp > 0 && temp < 280) {
    				temp -= 1;
    				displayTemp();
    			}
    		}

    		//When in program
    		if (progOn == 1) {

    			//Change programmed time
	    		if (progStep == 0) {
	    			if (progamDisplaySel == 1) {
	    				progamDisplaySel = 0;
	    				progamDisplay.classList.remove("blink");
	    				progpmDisplayOn = 1;
	    				progpmDisplay.classList.add("blink");
	    			}
	    			else {
	    				progpmDisplaySel = 0;
	    				progpmDisplay.classList.remove("blink");
	    				progamDisplaySel = 1;
	    				progamDisplay.classList.add("blink");
	    			}
	    		}

    			//Decrease programmed hour
    			if (progStep == 1) {

    				if (progHour == 1) {
	    				progHour = 12;
	    			} else progHour -= 1;

	    			displayProgTime();
    			}

    			//Decrease programmed minutes
    			if (progStep == 2) {
    				if (progMin == 0) {
	    				progMin = 59;
	    			} else progMin -= 1;

	    			displayProgTime();
    			}

	    		//When in auto on setting "Auto On" tag: decrease cups
	    		if (progStep == 3) {
	    			if (progSize > 1) {
		    			progSize -= 1;
		    			displayProgSize();
		    		}
	    		}

	    		//When in auto on setting "Auto On" tag: switch between different strength settings from right to left
	    		if (progStep == 4) {
	    			progStrSelector -= 1;

	    			if (progStrSelector < 0) {
	    				progStrSelector = 3;
	    			}

	    			//Selected tag blinks
					if (progStrSelector == 0) {
						gold.classList.add("blink");
						light.classList.remove("blink");
						medium.classList.remove("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 1) {
						gold.classList.remove("blink");
						light.classList.add("blink");
						medium.classList.remove("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 2) {
						gold.classList.remove("blink");
						light.classList.remove("blink");
						medium.classList.add("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 3) {
						gold.classList.remove("blink");
						light.classList.remove("blink");
						medium.classList.remove("blink");
						bold.classList.add("blink");
					}
	    		}

	    		//When in auto on setting "Auto On" tag: decrease temperature
	    		if (progStep == 5) {
	    			if (progTemp > 0 && progTemp < 280) {
	    				progTemp -= 1;
	    				displayProgTemp();
	    			}
	    		}
	    	}

	    	//When in clock
	    	if (clockOn == 1) {

	    		//Switch between "AM"/"PM"
	    		if (clockStep == 0) {
	    			if (clockamDisplaySel == 1) {
	    				clockamDisplaySel = 0;
	    				clockamDisplay.classList.remove("blink");
	    				clockpmDisplayOn = 1;
	    				clockpmDisplay.classList.add("blink");
	    				console.log("A switched to PM");
	    			}
	    			else {
	    				clockpmDisplaySel = 0;
	    				clockpmDisplay.classList.remove("blink");
	    				clockamDisplaySel = 1;
	    				clockamDisplay.classList.add("blink");
	    				console.log("A switched to AM");
	    			}
	    		}

	    		//decrease hour
	    		else if (clockStep == 1) {

	    			if (clockHour == 1) {
	    				clockHour = 12;
	    			} else clockHour -= 1;

	    			displayClockTime();
	    		}

	    		//decrease minute
	    		else if (clockStep ==2) {

	    			if (clockMin == 0) {
	    				clockMin = 59;
	    			} else clockMin -= 1;

	    			displayClockTime();
	    		}
	    	}

	    	//When in idle state, size display pops up and awaits press to brew
	    	if (cupsMenuOn == 1) {
	    		if (size > 1) {
	    			size -= 1;
	    			displaySize();
	    		}
	    	}
    	}

    	//Rotate clockwise (equivalent to input keyboard B)
    	if (e && e.keyCode == 66){

    		console.log("1");

    		//When in "Strength" menu, switches between different strength settings from left to right
    		if (strMenuOn == 1) {
    			console.log("2");

    			strSelector += 1;

    			if (strSelector > 3) {
    				strSelector = 0;
    			}

    			//Selected tag blinks
				if (strSelector == 0) {
					gold.classList.add("blink");
					light.classList.remove("blink");
					medium.classList.remove("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 1) {
					gold.classList.remove("blink");
					light.classList.add("blink");
					medium.classList.remove("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 2) {
					gold.classList.remove("blink");
					light.classList.remove("blink");
					medium.classList.add("blink");
					bold.classList.remove("blink");
				}
				else if (strSelector == 3) {
					gold.classList.remove("blink");
					light.classList.remove("blink");
					medium.classList.remove("blink");
					bold.classList.add("blink");
				}
    		}

    		//When in "Temperature" menu, increase temperature
    		else if (tempMenuOn == 1) {
    			console.log("3");

    			if (temp > 0 && temp < 280) {
    				temp += 1;
    				displayTemp();
    			}
    		}

    		//When in program
    		if (progOn == 1) {
    			console.log(progStep);

    			//Change programmed time shift
	    		if (progStep == 0) {
	    			if (progamDisplaySel == 1) {
	    				progamDisplaySel = 0;
	    				progamDisplay.classList.remove("blink");
	    				progpmDisplaySel = 1;
	    				progpmDisplay.classList.add("blink");
	    			}
	    			else {
	    				progpmDisplaySel = 0;
	    				progpmDisplay.classList.remove("blink");
	    				progamDisplaySel = 1;
	    				progamDisplay.classList.add("blink");
	    			}
	    		}

    			//Increase programmed hour
    			else if (progStep == 1) {

	    			if (progHour == 12) {
	    				progHour = 1;
	    			} else progHour += 1;

	    			displayProgTime();
    			}

    			//Increase programmed minutes
    			else if (progStep == 2) {
    				if (progMin == 59) {
	    				progMin = 0;
	    			} else progMin += 1;

	    			displayProgTime();
    			}

	    		//When in auto on setting "Auto On" tag: increase cups
	    		else if (progStep == 3) {
	    			if (progSize < 9){
			    		progSize += 1;
			    		displayProgSize();
			    	}
	    		}

	    		//When in auto on setting "Auto On" tag: switch between different strength settings from left to right
	    		else if (progStep == 4) {
	    			console.log("1");
		    		progStrSelector += 1;

	    			if (progStrSelector > 3) {
	    				progStrSelector = 0;
	    			}

	    			//Selected tag blinks
					if (progStrSelector == 0) {
						gold.classList.add("blink");
						light.classList.remove("blink");
						medium.classList.remove("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 1) {
						gold.classList.remove("blink");
						light.classList.add("blink");
						medium.classList.remove("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 2) {
						gold.classList.remove("blink");
						light.classList.remove("blink");
						medium.classList.add("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 3) {
						gold.classList.remove("blink");
						light.classList.remove("blink");
						medium.classList.remove("blink");
						bold.classList.add("blink");
					}
	    		}

	    		//When in auto on setting "Auto On" tag: increase temperature
	    		if (progStep == 5) {
	    			if (progTemp > 0 && progTemp < 280) {
	    				progTemp += 1;
	    				displayProgTemp();
	    			}
	    		}
	    	}

	    	//When in clock setting
	    	if (clockOn == 1) {

	    		console.log("5");

	    		//Switch between "AM"/"PM"
	    		if (clockStep == 0) {
	    			if (clockamDisplaySel == 1) {
	    				clockamDisplaySel = 0;
	    				clockamDisplay.classList.remove("blink");
	    				clockpmDisplaySel = 1;
	    				clockpmDisplay.classList.add("blink");
	    				console.log("B switched to PM");
	    			}
	    			else {
	    				clockpmDisplaySel = 0;
	    				clockpmDisplay.classList.remove("blink");
	    				clockamDisplaySel = 1;
	    				clockamDisplay.classList.add("blink");
	    				console.log("B switched to AM");
	    			}
	    		}

	    		//increase hour
	    		else if (clockStep == 1) {

	    			if (clockHour == 12) {
	    				clockHour = 1;
	    			} else clockHour += 1;

	    			displayClockTime();
	    		}

	    		//increase minute
	    		else if (clockStep == 2) {
	    			if (clockMin == 59) {
	    				clockMin = 0;
	    			} else clockMin += 1;

	    			displayClockTime();
	    		}
	    	}

	    	//When in idle state, size display pops up and awaits press to brew
	    	if (cupsMenuOn == 1) {
	    		console.log("6");
	    		if (size < 9){
		    		size += 1;
		    		displaySize();
		    	}
	    	}
    	};

    	//Press the knob (equivalent to input keyboard C
    	if (e && e.keyCode == 67) {

    		//When in "Strength" menu, exit the submenu
    		if (strMenuOn == 1) {
    			exitStrength();
    		}

    		//When in "Temperature" menu, exit the submenu
    		else if (tempMenuOn == 1) {
    			exitTemperature();
    		}

    		//When in idle state, size display pops up and awaits press to brew
			else if (strMenuOn == 0 && tempMenuOn == 0 && clockOn == 0 && progOn == 0 && cupsMenuOn == 0) {
				//Cups menu on
				cupsMenuOn = 1;
				//Time display shuts off
				timeDisplayOn = 0;
				timeDisplay.style.display = "none";
				//Time shift display hidden
				timeShiftDisplayOn = 0;
				timeShiftDisplay.style.opacity = "0";
				//Size display turns on
				sizeDisplayOn = 1;
				sizeDisplay.style.display = "block";
				//Cups tag lights up
				cupsTagOn = 1;
				cupsTag.style.opacity = "1";
				//segments flashing
				sizeDisplay.classList.add("blink");
				//Knob LED lights up
				knob.classList.add("illumination");
				//Machine is ready to brew
				ready = 1;
			}
			//When cups menu is on, press to start brewing
			else if (ready == 1) {
				//Exit cups menu
				cupsMenuOn = 0;
				//Switch from ready state to brewing state
				ready = 0;
				brewOn = 1;

				//Size display turns on
				sizeDisplayOn = 1;
				sizeDisplay.style.display = "block";

				//segments stop flashing
				sizeDisplay.classList.remove("blink");

				//Selected strength tag unhidden
				if (strSelector == 0) {
					goldTagOn = 1;
					goldTag.style.opacity = "1";
				}
				else if (strSelector == 1) {
					lightTagOn = 1;
					lightTag.style.opacity = "1";
				}
				else if (strSelector == 2) {
					mediumTagOn = 1;
					mediumTag.style.opacity = "1";
				}
				else if (strSelector == 3) {
					boldTagOn = 1;
					boldTag.style.opacity = "1";
				}

				//Knob glowing hidden
				knob.classList.remove("illumination");

				//Dancing knob
				dancingKnob.style.opacity = "1";

				//Machine running sound plays
				machineRunnigSound.play();

				//After 30 secs
				setTimeout(function() {

					//Complete animation
					background.style.display = "none";
					complete.style.display = "block";

					//Time display turns on
					timeDisplayOn = 1;
					timeDisplay.style.display = "block";

					//Time shift display unhidden
					timeShiftDisplayOn = 1;
					timeShiftDisplay.style.opacity = "1";

					//Size display turns off
					sizeDisplayOn = 0;
					sizeDisplay.style.display = "none";

					//Cups tag hidden
					cupsTagOn = 0;
					cupsTag.style.opacity = "0";

					//Selected strength tag hidden
					if (strSelector == 0) {
						goldTagOn = 0;
						goldTag.style.opacity = "0";
					}
					else if (strSelector == 1) {
						lightTagOn = 0;
						lightTag.style.opacity = "0";
					}
					else if (strSelector == 2) {
						mediumTagOn = 0;
						mediumTag.style.opacity = "0";
					}
					else if (strSelector == 3) {
						boldTagOn = 0;
						boldTag.style.opacity = "0";
					}

					//Dancing knob turns off
					dancingKnob.style.opacity = "0";
					//Machine running sound stops
					machineRunnigSound.pause();
					//End sound plays
					endSound.play();

				}, 5000)

				setTimeout(function(){
					//Complete animation time out
					background.style.display = "block";
					complete.style.display = "none";
					brewOn = 0;
				}, 10000)
			}

    		//When in clock, confirm time
			if (clockOn == 1) {

				//Confirm AM/PM
				if (clockStep == 0) {
					//Turn off the unselected time shift,remove blink
					if (clockamDisplaySel == 1) {
	    				clockpmDisplay.style.opacity = "0";
	    				clockpmDisplayOn = 0;
	    				clockamDisplayOn = 1;
	    				clockamDisplay.classList.remove("blink");
	    			}
	    			else {
	    				clockamDisplay.style.opacity = "0";
	    				clockamDisplayOn = 0;
	    				clockpmDisplayOn = 1;
	    				clockpmDisplay.classList.remove("blink");
	    			}
	    			//Hour starts blinking
	    			clockTimeHourDisplay.classList.add("blink");

					clockStep = 1;
				}

				//Confirm hour
				else if (clockStep == 1) {

					//Hour stops blinking
					clockTimeHourDisplay.classList.remove("blink");
					//Minute starts blinking
					clockTimeMinuteDisplay.classList.add("blink");

					clockStep =2;
				}

				//Confirm minute
				else if (clockStep == 2) {
					//Return the value to real time shift display
					if (clockamDisplaySel == 1) {
	    				amDisplayOn = 1;
	    				amDisplay.style.opacity = "1";
	    				pmDisplayOn = 0;
	    				pmDisplay.style.opacity = "0";
	    				console.log ("set up AM successfully");
	    			}
	    			else {
	    				pmDisplayOn = 1;
	    				pmDisplay.style.opacity = "1";
	    				amDisplayOn = 0;
	    				amDisplay.style.opacity = "0";
	    				console.log ("set up PM successfully");
	    			}
					//Return the value to real time hour
					hour = clockHour;
					//Return the value to real time minute
					min = clockMin;
					//Minute stops blinking
					clockTimeMinuteDisplay.classList.remove("blink");
				
					//Real time display turns on
					timeDisplayOn = 1;
					timeDisplay.style.display = "block";
					//Real time shift display turns on
					timeShiftDisplayOn = 1;
					timeShiftDisplay.style.display = "block";
					timeShiftDisplay.style.opacity = "1";

					//Clock time display shuts off
					clockTimeDisplayOn = 0;
					clockTimeDisplay.style.display = "none";
					//Clock time shift display shuts off
					clockTimeShiftDisplayOn = 0;
					clockTimeShiftDisplay.style.display = "none";

					//Clock tag off
					clockTagOn = 0;
					clockTag.style.opacity = "0";

					//Reset clockStep and clockOn
					clockStep = 0;
					clockOn = 0;
				}
			}

    		//When in auto on setting "Auto On" tag
    		if (progOn == 1) {

				//Confirm programmed time shift
				if (progStep == 0) {
					//Turn off the unselected time shift,remove blink
					if (progamDisplaySel == 1) {
	    				progpmDisplay.style.opacity = "0";
	    				progpmDisplayOn = 0;
	    				progamDisplayOn = 1;
	    				progamDisplaySel = 0;
	    				progamDisplay.classList.remove("blink");
	    			}
	    			else {
	    				progamDisplay.style.opacity = "0";
	    				progamDisplayOn = 0;
	    				progpmDisplayOn = 1;
	    				progpmDisplaySel = 0;
	    				progpmDisplay.classList.remove("blink");
	    			}
	    			//Hour starts blinking
	    			progTimeHourDisplay.classList.add("blink");

					progStep = 1;
				}

				//Confirm programmed hour
				else if (progStep == 1) {

					//Hour stops blinking
					progTimeHourDisplay.classList.remove("blink");
					//Minute starts blinking
					progTimeMinuteDisplay.classList.add("blink");

					progStep =2;
				}

				//Confirm programmed minute
				else if (progStep == 2) {
					//Minute stops blinking
					progTimeMinuteDisplay.classList.remove("blink");

					//prog time display shuts off
					progTimeDisplayOn = 0;
					progTimeDisplay.style.display = "none";
					//prog time shift display hidden
					progTimeShiftDisplayOn = 0;
					progTimeShiftDisplay.style.opacity = "0";
					//cups display turns on
					progSizeDisplayOn = 1;
					progSizeDisplay.style.display = "block";
					//cups tag unhidden
					cupsTagOn = 1;
					cupsTag.style.opacity = "1";

					progStep = 3;

					displayProgSize();
				}

				//When in auto on setting "Auto On" tag: confirm cups
				else if (progStep == 3) {
					//prog size display hidden
					progSizeDisplay.style.opacity = "0";
					//cups tag off
					cupsTagOn = 0;
					cupsTag.style.opacity = "0";
					//strength tags on
					goldTagOn = 1;
					goldTag.style.opacity = "1";
					lightTagOn = 1;
					lightTag.style.opacity = "1";
					mediumTagOn = 1;
					mediumTag.style.opacity = "1";
					boldTagOn = 1;
					boldTag.style.opacity = "1";
					//selected strength tags flashes
					if (progStrSelector == 0) {
						gold.classList.add("blink");
						light.classList.remove("blink");
						medium.classList.remove("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 1) {
						gold.classList.remove("blink");
						light.classList.add("blink");
						medium.classList.remove("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 2) {
						gold.classList.remove("blink");
						light.classList.remove("blink");
						medium.classList.add("blink");
						bold.classList.remove("blink");
					}
					else if (progStrSelector == 3) {
						gold.classList.remove("blink");
						light.classList.remove("blink");
						medium.classList.remove("blink");
						bold.classList.add("blink");
					}

					progStep = 4;
				}

				//When in auto on setting "Auto On" tag: confirm strength
				else if (progStep == 4) {
					//prog size display unhidden and shuts off
					progSizeDisplay.style.opacity = "1";
					progSizeDisplayOn = 0;
					progSizeDisplay.style.display = "none";
					//Strength tags turn off
					goldTagOn = 0;
					goldTag.style.opacity = "0";
					lightTagOn = 0;
					lightTag.style.opacity = "0";
					mediumTagOn = 0;
					mediumTag.style.opacity = "0";
					boldTagOn = 0;
					boldTag.style.opacity = "0";

					//Selected tag remove blinks
					if (progStrSelector == 0) {
						gold.classList.remove("blink");
					}
					else if (progStrSelector == 1) {
						light.classList.remove("blink");
					}
					else if (progStrSelector == 2) {
						medium.classList.remove("blink");
					}
					else if (progStrSelector == 3) {
						bold.classList.remove("blink");
					}
					//prog temp display shows up
					progTempDisplayOn = 1;
					progTempDisplay.style.display = "block";
					displayProgTemp();
					//temp unit display unhidden
					faTempDisplayOn = 1;
					tempUnitDisplayOn = 1;
					tempUnitDisplay.style.opacity = "1";
					faTempDisplayOn = 1
					faTempDisplay.style.opacity = "1";

					progStep = 5;
				}

				//When in auto on setting "Auto On" tag: confirm temperature
				else if (progStep == 5) {
					//prog time shift display unhidden
					progTimeShiftDisplay.style.opacity = "1";
					//prog time shift display shuts off
					progTimeShiftDisplayOn = 0;
					progTimeShiftDisplay.style.display = "none";
					//prog temp unit display shuts off
					progTempDisplayOn = 0;
					progTempDisplay.style.display = "none";
					//prog temp unit display shuts off
					tempUnitDisplayOn = 0;
					tempUnitDisplay.style.opacity = "0";
					faTempDisplayOn = 0;
					faTempDisplay.style.opacity = "0";

					//auto brew is on ⭕
					autoOn = 1;
					//realtime display on
					timeDisplayOn = 1;
					timeDisplay.style.display = "block";
					//realtime time shift display on
					timeShiftDisplayOn = 1;
					timeShiftDisplay.style.display = "block";

					progStep = 0;
					progOn = 0;
					progFirstTime = 1;
				}
			}

    	}
}

function caculateHour(){

	hour += 1;

	if (hour > 12 ){
		hour = hour - 12;
	}

	if (hour == 12) {
		if (amDisplayOn == 1) {
			amDisplayOn = 0;
			amDisplay.style.opacity = "0";
			pmDisplayOn = 1;
			pmDisplay.style.opacity = "1";
		} else{
			amDisplayOn = 1;
			amDisplay.style.opacity = "1";
			pmDisplayOn = 0;
			pmDisplay.style.opacity = "0";
		}
	}

	setTimeout(caculateHour, 60*60*1000);
}

function caculateMinute(){
	min += 1;

	if (min > 59){
		min = min - 60;
	}

	setTimeout(caculateMinute, 60*1000);
}

function displayTime(){

	if (hour<10 && min<10) {
		var time = "0" + hour + ":" + "0" + min;
	}else if (hour<10 && min>=10) {
		var time = "0" + hour + ":" + min;
	}else if (hour>=10 && min<10) {
		var time = hour + ":" + "0" + min;
	}else var time = hour + ":" + min;

	timeDisplay.innerText = time;
	timeDisplay.textContent = time;

	setTimeout(displayTime, 1000);
}

caculateHour();
caculateMinute();
displayTime();

function displayTemp(){
	tempDisplay.innerText = temp;
	tempDisplay.textContent = temp;
}

displayTemp();

function displaySize(){
	sizeDisplay.innerText = "0" + size;
	sizeDisplay.textContent = "0" + size;
}

displaySize();

function displayProgSize(){
	progSizeDisplay.innerText = "0" + progSize;
	progSizeDisplay.textContent = "0" + progSize;
}

function displayClockTime(){
	if (clockHour<10 && clockMin<10) {
		clockTimeHourDisplay.innerText = "0" + clockHour;
		clockTimeHourDisplay.textContent = "0" + clockHour;
		clockTimeMinuteDisplay.innerText = "0" + clockMin;
		clockTimeMinuteDisplay.textContent = "0" + clockMin;
	}else if (clockHour<10 && clockMin>=10) {
		clockTimeHourDisplay.innerText = "0" + clockHour;
		clockTimeHourDisplay.textContent = "0" + clockHour;
		clockTimeMinuteDisplay.innerText = clockMin;
		clockTimeMinuteDisplay.textContent = clockMin;
	}else if (clockHour>=10 && clockMin<10) {
		clockTimeHourDisplay.innerText = clockHour;
		clockTimeHourDisplay.textContent = clockHour;
		clockTimeMinuteDisplay.innerText = "0" + clockMin;
		clockTimeMinuteDisplay.textContent = "0" + clockMin;
	}else {
		clockTimeHourDisplay.innerText = clockHour;
		clockTimeHourDisplay.textContent = clockHour;
		clockTimeMinuteDisplay.innerText = clockMin;
		clockTimeMinuteDisplay.textContent = clockMin;
	}
}

function displayProgTime(){
	if (progHour<10 && progMin<10) {
		progTimeHourDisplay.innerText = "0" + progHour;
		progTimeHourDisplay.textContent = "0" + progHour;
		progTimeMinuteDisplay.innerText = "0" + progMin;
		progTimeMinuteDisplay.textContent = "0" + progMin;
	}else if (progHour<10 && progMin>=10) {
		progTimeHourDisplay.innerText = "0" + progHour;
		progTimeHourDisplay.textContent = "0" + progHour;
		progTimeMinuteDisplay.innerText = progMin;
		progTimeMinuteDisplay.textContent = progMin;
	}else if (progHour>=10 && progMin<10) {
		progTimeHourDisplay.innerText = progHour;
		progTimeHourDisplay.textContent = progHour;
		progTimeMinuteDisplay.innerText = "0" + progMin;
		progTimeMinuteDisplay.textContent = "0" + progMin;
	}else {
		progTimeHourDisplay.innerText = progHour;
		progTimeHourDisplay.textContent = progHour;
		progTimeMinuteDisplay.innerText = progMin;
		progTimeMinuteDisplay.textContent = progMin;
	}
}

function displayProgTemp(){
	progTempDisplay.innerText = progTemp;
	progTempDisplay.textContent = progTemp;
}

function exitStrength() {

	//Exit strength menu
	strMenuOn = 0;
	//Turn off strength LED
	strLight.style.opacity = "0.1";

	//Strength tags turn off
	goldTagOn = 0;
	goldTag.style.opacity = "0";
	lightTagOn = 0;
	lightTag.style.opacity = "0";
	mediumTagOn = 0;
	mediumTag.style.opacity = "0";
	boldTagOn = 0;
	boldTag.style.opacity = "0";

	//Selected tag remove blinks
	if (strSelector == 0) {
		gold.classList.remove("blink");
	}
	else if (strSelector == 1) {
		light.classList.remove("blink");
	}
	else if (strSelector == 2) {
		medium.classList.remove("blink");
	}
	else if (strSelector == 3) {
		bold.classList.remove("blink");
	}

	//Display turns on
	display.style.display = "block";
	display.style.opacity = "1";
	//Time display is no longer hidden (opacity = 1)
	timeDisplay.style.opacity = "1";
	//Time shift display lights up
	timeShiftDisplayOn = 1;
	timeShiftDisplay.style.opacity = "1";
}

function exitTemperature() {

	//Exit temperature menu
	tempMenuOn = 0;
	//Turn off temperature LED
	tempLight.style.opacity = "0.1";

	//Temperature display turns off
	tempDisplayOn = 0;
	tempDisplay.style.display = "none"
	//Temp unit display turns off
	faTempDisplayOn = 0;
	faTempDisplay.style.opacity = "0";

	//Time display lights up
	timeDisplayOn = 1;
	timeDisplay.style.display = "block";
	//Time shift display lights up
	timeShiftDisplayOn = 1;
	timeShiftDisplay.style.opacity = "1";
}

function exitSize() {
	//Exit cups menu
	cupsMenuOn = 0;
	//Time display turns on
	timeDisplayOn = 1;
	timeDisplay.style.display = "block";
	//Time shift display unhidden
	timeShiftDisplayOn = 1;
	timeShiftDisplay.style.opacity = "1";
	//Size display shuts off
	sizeDisplayOn = 0;
	sizeDisplay.style.display = "none";
	//Cups tag hidden
	cupsTagOn = 0;
	cupsTag.style.opacity = "0";
	//Knob LED turns off
	knob.classList.remove("illumination");
	//Ready state goes back to idle
	ready = 0;
}

