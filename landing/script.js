/* here I set all variables*/

var joinBtn = document.getElementById("block-1-joinbtn");
var overlay = document.getElementById("overlay");
var message_overlay = document.getElementById("message-overlay");
var message_overlay_content = document.getElementById("message-block-content");
var message_overlay_close = document.getElementById("message-block-close");
var join_inputs = {
	email: document.getElementById("join-form-email"),
	tg: document.getElementById("join-form-tg"),
	consent: document.getElementById("join-form-consent"),
	close: document.getElementById("join-form-close"),
	submit: document.getElementById("join-form-submit")
};
var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* basic functions */

function showJoinDialog () {
	overlay.classList.add("show");
}

function hideJoinDialog () {
	overlay.classList.remove("show");
}

function showMessageOverlay (text) {
	message_overlay.classList.add("show");
	message_overlay_content.innerText = text;
}

function hideMessageOverlay () {
	message_overlay.classList.remove("show");
}

function submit () {
	var checked = join_inputs.consent.children[0].classList.contains("checked");

	if (!checked) {
		showMessageOverlay("You have to accept processing of personal data.");
		return;
	}

	var email = join_inputs.email.value;

	if (!email.match(email_regex)) {
		join_inputs.email.handle.error("Invalid email format");
		return;
	}

	var telegram = join_inputs.tg.value;

	var data = new URLSearchParams();
	data.append("email", email);
	data.append("telegram", telegram);

	fetch("./addWaitlist.php", {
	    method: 'POST',
	    headers:{
	      'Content-Type': 'application/x-www-form-urlencoded'
	    },    
	    body: data.toString()
	});

	hideJoinDialog();
	showMessageOverlay("You have been added to waitlist.");
}

joinBtn.onclick = showJoinDialog;
join_inputs.close.onclick = hideJoinDialog;
join_inputs.submit.onclick = submit;
message_overlay_close.onclick = hideMessageOverlay;

window.scrollTo(0,0);

/* checkboxes */
function toggleCheckbox (checkbox) {
	checkbox.children[0].classList.toggle("checked");
}

var checkboxes = document.getElementsByClassName("form-checkbox");
for (var i=0; i<checkboxes.length; i++) {
	checkboxes[i].onclick = toggleCheckbox.bind({}, checkboxes[i]);
}

/* inputs effects */
function input_focus (ev) {
	this.root.classList.add("active");
}

function input_blur (ev) {
	this.root.classList.remove("active");
}

function input_error (text) {
	this.root.classList.add("error");
	this.error_message = text;
	this.error_div.innerText = text;
}

function input_error_cleared () {
	this.root.classList.remove("error");
	this.error_message = null;
	this.error_div.innerText = "";
}

function input_change (ev) {
	this.error_cleared();
}

function create_input (root) {
	var obj = {
		root: root,
		error_message: null
	};

	obj.focus = input_focus.bind(obj);
	obj.blur = input_blur.bind(obj);
	obj.error = input_error.bind(obj);
	obj.error_cleared = input_error_cleared.bind(obj);
	obj.change = input_change.bind(obj);

	obj.error_div = root.children[2];
	obj.input = root.children[1];
	obj.input.handle = obj;
	obj.input.onfocus = obj.focus;
	obj.input.onblur = obj.blur;
	obj.input.onchange = obj.change;
}

var inputs = document.getElementsByClassName("form-text-input");
for (var i=0; i<inputs.length; i++) {
	create_input(inputs[i]);
}