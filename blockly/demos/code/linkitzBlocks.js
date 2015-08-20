
/*This is a file for the Linkitz API blocks.  
TODO: Add images
TODO: Add actual JS code for the generator stubs
*/

'use strict';


/*Set HSV values for these blocks.
set to ~6cbe45 ('green')
*/

var LinkitzHue=101;
var LinkitzSaturation=0.637;
var LinkitzValue=0.745;


Blockly.Blocks['getmotiondata'] = {
  init: function() {
  	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../../images/Petal_Top_Motion_Preview.jpg", 64, 64, "GetMotionData"));
    this.setOutput(true, "Array");
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('Get Motion Data');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['getmotiondata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['getmicdata'] = {
  init: function() {
  	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../../images/Petal_Top_Mic_Preview.jpg", 64, 64, "GetMicData"));
    this.setOutput(true, "Array");
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('Get Mic Data');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['getmicdata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['getspeakerdata'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../images/Petal_Top_Speaker_Preview.jpg", 64, 64, "GetSpeakerData"));
    this.setOutput(true, "Array");
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('Get Speaker Data');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['getspeakerdata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['getleddata'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../images/Petal_Top_LED_Preview.jpg", 64, 64, "GetLEDData"));
    this.setOutput(true, "Array");
   this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('Get LED Data');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['getleddata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['getfrienddata'] = {
  init: function() {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../images/Petal_Top_Friend_Preview.jpg", 64, 64, "GetFriendData"));
    this.setOutput(true, "Array");
   this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('Get Friend Data');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['getfrienddata'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['onmotiontrigger'] = {
  init: function() {
  	this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../../images/Petal_Top_Motion_Preview.jpg", 64, 64, "GetMotionData"));
	this.appendDummyInput()
		.appendField(new Blockly.FieldDropdown([["tap","tap"],["click","click"],["donemoving","done moving"]]),"interruptModes");	
    this.appendStatementInput("EventCode");
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('Motion Trigger');
    this.setHelpUrl('http://www.example.com/');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.JavaScript['onmotiontrigger'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};





Blockly.Blocks['ledoutput'] = {
  init: function() {
    this.appendValueInput("ledcolor")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_LED_Preview.jpg", 50, 50, "LEDLink"));
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['ledoutput'] = function(block) {
  var value_ledcolor = Blockly.JavaScript.valueToCode(block, 'ledcolor', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['onreceive'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Receive");
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Friend_Preview.jpg", 50, 50, "*"));
    this.appendStatementInput("Receive function execution")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['onreceive'] = function(block) {
  var statements_receive_function_execution = Blockly.JavaScript.statementToCode(block, 'Receive function execution');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.Blocks['transmit'] = {
  init: function() {
    this.appendValueInput("targetid")
        .setCheck("Number")
        .appendField("Wait To Transmit     Target ID");
    this.appendValueInput("message")
        .setCheck("String")
        .appendField("         ")
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Friend_Preview.jpg", 50, 50, "*"))
        .appendField("      Message");
    this.appendValueInput("range")
        .setCheck("Number")
        .appendField("                                Include range");
    this.setPreviousStatement(true, null);
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['transmit'] = function(block) {
  var value_targetid = Blockly.JavaScript.valueToCode(block, 'targetid', Blockly.JavaScript.ORDER_ATOMIC);
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  var value_range = Blockly.JavaScript.valueToCode(block, 'range', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};



Blockly.Blocks['check_type'] = {
  init: function() {
    this.appendValueInput("message")
        .setCheck("String")
        .appendField("Check if inputted message is")
        .appendField(new Blockly.FieldDropdown([["Output a microphone signal", "requestForMicrophone"], ["Output a motion signal", "requestForMotion"], ["Motion signal", "motion signal"], ["Microphone signal", "microphone signal"], ["LED signal", "LED signal"], ["Speaker signal", "speaker signal"], ["Secret message", "secret message"], ["Nothing", "Nothing"]]), "different messages");
    this.setOutput(true, "Boolean");
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.JavaScript['check_type'] = function(block) {
  var dropdown_different_messages = block.getFieldValue('different messages');
  var value_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};


/*
Here are my blocks to handle connection and/or 'roster' events.  What I'm calling the 'Roster' is a list of links that the hub creates.  
When a link is connected/detatched, it is added to/removed from the roster.  
*/

/*Roster Event-- input will be a custom list that only accepts names of links
currently set up to accept the list of event handlers as a statement input, can easily be changed to a block that accepts connections at the bottom.
Creates a hidden variable called "priority"
The idea is this, users will want to have scripts tied to every possible roster permutation.  
Some of those will involve only 1 or two links.  That means that any toy comprised of three links will be colliding with two other possible toys. 
eg. speaker=siren, speaker+mic=voice distortion, speaker+mic+radio=walkie talkie
With priority, we can end that collision.  Only the highest priority script is triggered
*/


Blockly.Blocks['roster_event'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.appendDummyInput()
        .appendField("Roster Event Hander: ");
    this.appendDummyInput()
        .appendField("I go off when These Links Are Connected");
    this.appendValueInput("LinkRoster")
        .setCheck("Array");  //I wonder if I can just create my own type and use it here?
    this.appendStatementInput("Script");
  }
};

Blockly.JavaScript['roster_event']= function(block) {
  var value_linkroster = Blockly.JavaScript.valueToCode(block, 'LinkRoster', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_script = Blockly.JavaScript.statementToCode(block, 'Script');
  // var priority = 4-length(value_linkroster);
  // TODO: Assemble JavaScript into code variable.
  var code = 'pass // When this list matches the one updated by the hub, use the set of event handlers in statements_script';
  return code;
};

//Special list to be the roster
//will try to give it a unique type, and make the inputs unique types-- might be smarter to get around this with a dropdown menu?
Blockly.Blocks['roster_list'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.appendDummyInput()
        .appendField("Roster:");
    this.appendValueInput("Link1")
        .setCheck("Array");
    this.appendValueInput("Link2")
        .setCheck("Array");
    this.appendValueInput("Link3")
        .setCheck("Array");
    this.appendStatementInput("Rostercode");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['roster_list'] = function(block) {
  var value_link1 = Blockly.JavaScript.valueToCode(block, 'Link1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_link2 = Blockly.JavaScript.valueToCode(block, 'Link2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_link3 = Blockly.JavaScript.valueToCode(block, 'Link3', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_rostercode = Blockly.JavaScript.statementToCode(block, 'Rostercode');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

//tidier in some ways, but it seems less fun to use

Blockly.Blocks['roster_event_two'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.appendDummyInput()
        .appendField("Roster:");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["none", "None"], ["Motion", "Motion"], ["LED", "LED"], ["Friend", "Friend"], ["Mic", "Mic"], ["Speaker", "Speaker"]]), "Link1");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["none", "None"], ["Motion", "Motion"], ["LED", "LED"], ["Friend", "Friend"], ["Mic", "Mic"], ["Speaker", "Speaker"]]), "Link2");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["none", "None"], ["Motion", "Motion"], ["LED", "LED"], ["Friend", "Friend"], ["Mic", "Mic"], ["Speaker", "Speaker"]]), "Link3");
    this.appendStatementInput("Script");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['roster_event_two'] = function(block) {
  var dropdown_link3 = block.getFieldValue('Link3');
  var dropdown_link2 = block.getFieldValue('Link2');
  var dropdown_link1 = block.getFieldValue('Link1');
  var statements_script = Blockly.JavaScript.statementToCode(block, 'Script');
  // TODO: Assemble JavaScript into code variable.
  var linkRoster =[]
  // TODO: append non 'None' values to this list
  var priority= 4-length(linkRoster)
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};




//Single connection event-- I imagine these being ONE TIME executions-- for continual execution, use the roster

Blockly.Blocks['connection_event'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.appendDummyInput()
        .appendField("Connect Event")
        .appendField(new Blockly.FieldDropdown([["none", "None"], ["Motion", "Motion"], ["LED", "LED"], ["Friend", "Friend"], ["Mic", "Mic"], ["Speaker", "Speaker"]]), "Link");
    this.appendStatementInput("script");
    this.setInputsInline(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript['connection_event'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var statements_script = Blockly.JavaScript.statementToCode(block, 'script');
  // TODO: Assemble JavaScript into code variable.
  var code = 'pass  // execute this script once when this link is plugged in';
  return code;
};

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//Speaker/Mic blocks

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


Blockly.Blocks['speakerpetal'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Speaker ")
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Speaker_Preview.jpg", 50, 50, "*"))
        .appendField("Volume")
        .appendField(new Blockly.FieldDropdown([["High", "highvolume"], ["Medium", "mediumvolume"], ["Low", "lowvolume"]]), "volumescale");
    this.appendValueInput("NAME")
        .appendField("                               Signal Input");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.JavaScript['speakerpetal'] = function(block) {
  var dropdown_volumescale = block.getFieldValue('volumescale');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};




Blockly.Blocks['mic_event'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
     this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Mic_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.appendDummyInput()
        .appendField("MicEvent");
    this.appendValueInput("event typye")
        .setCheck("Number")
        .appendField("When")
        .appendField(new Blockly.FieldDropdown([["Amplitude", "Amplitude"], ["Pitch", "Pitch"], ["Frequency", "Frequency"]]), "NAME")
        .appendField(" is above:");
    this.appendStatementInput("Do")
        .setCheck("null")
        .appendField("Do:");
    this.setTooltip('');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};


Blockly.JavaScript['mic_event'] = function(block) {
  var value_event_typye = Blockly.JavaScript.valueToCode(block, 'event typye', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  var statements_do = Blockly.JavaScript.statementToCode(block, 'Do');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};



Blockly.Blocks['read_sound_levels'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.appendDummyInput()
        .appendField("Read Sound Levels");
    this.setOutput(true, "Array");
    this.setTooltip('');
  }
};

Blockly.JavaScript['read_sound_levels'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//Lyssa's sound and radio blocks
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// radio event
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#evprcb

Blockly.Blocks['radio_event'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Radio Event");
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../images/Petal_Top_Friend_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.appendValueInput("NAME")
        .appendField(new Blockly.FieldDropdown([["Msg_Color", "MSG_COLOR"], ["Msg_Sound", "MSG_SOUND"], ["Msg_Blank", "MSG_BLANK"]]), "NAME");
    this.setNextStatement(true);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// motion event
// link: 
Blockly.Blocks['on_motion_trigger'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Motion Trigger");
    this.appendStatementInput("NAME");
    this.setNextStatement(true);
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("../../images/Petal_Top_Mic_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setHelpUrl('http://www.example.com/');
  }
};

// Call for speaker to play a sound file
// link: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#g7vr8s

Blockly.Blocks['speaker_play_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Play sound");
    this.appendValueInput("NAME")
        .setCheck("Valid_sound_block");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../images/Petal_Top_Speaker_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// Create your own sound. Could be combined or put in a loop to make more complex sounds
// link: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#jg6c8w

Blockly.Blocks['sound_fdv'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sound with");
    this.appendValueInput("Frequency")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Frequency");
    this.appendValueInput("Duration")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Duration");
    this.appendValueInput("Volume")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Volume");
    this.setOutput(true);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../../images/Petal_Top_Speaker_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// Use a pre-defined sound
// link: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#q8uiy9

Blockly.Blocks['sound_from_file'] = {
  init: function() {
    this.appendValueInput("NAME")
        .appendField(new Blockly.FieldDropdown([["beep", "BEEP"], ["whoohoo", "WOOHOO"], ["uhoh", "UHOH"], ["hi", "HI"]]), "NAME");
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Speaker_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// Use sound in from mic, out through speaker (requires and intermediate cache of sound_in to a file)
// Link: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#2ixsvm

Blockly.Blocks['sound_from_mic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sound from microphone");
    this.appendValueInput("Volume")
        .setCheck("Number")
        .appendField("Volume");
    this.appendDummyInput()
        .appendField("With filter");
    this.appendValueInput("NAME")
        .appendField(new Blockly.FieldDropdown([["None", "FILTER_NONE"], ["Like_a_duck", "FILTER_ADD_NOISE"], ["Squeaky", "FILTER_HIGH_SHIFT"], ["Scary", "FILTER_LOW_SHIFT"]]), "FILTER_OPTIONS");
    this.setInputsInline(false);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Mic_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// Play a user defined sound that a user records from the mic. It gets saved in a file. requires filename.
// this example shows three options. not sure if we want more.
// link: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#z4xtfp


Blockly.Blocks['sound_user_defined_from_mic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("My_sound");
    this.appendValueInput("Sound__userdefined_filename")
        .setCheck("Array")
        .appendField(new Blockly.FieldDropdown([["myfile1", "USER_DEFINED_SOUND1"], ["myfile2", "USER_DEFINED_SOUND2"], ["myfile3", "USER_DEFINED_SOUND3"]]), "My sound files");
    this.appendValueInput("Volume")
        .setCheck("Number")
        .appendField("Volume");
    this.setInputsInline(false);
    this.setOutput(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Mic_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// on microphone trigger
// link: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#sogot8
Blockly.Blocks['on_microphone_trigger'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("On Microphone Trigger");
    this.appendStatementInput("NAME");
    this.setInputsInline(false);
    this.setNextStatement(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Mic_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

// On microphone trigger, user may convert sound (PITCH) to color (HUE) with POWER (brightness)=VOLUME.
// 20150727 LN: I envision that incoming sound is stored in a LIFO buffer.
// 20150727 LN: I'm unclear on the role of bandwidth in this caluclation (as a user visible paramenter)
// link: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#mf254a

Blockly.Blocks['sound_convert_pitch_to_hue'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Sound_to_Colored_Light");
    this.appendValueInput("Pitch")
        .setCheck("Number")
        .appendField("Pitch");
    this.appendValueInput("Bandwidth")
        .setCheck("Number")
        .appendField("Bandwidth ???");
    this.appendValueInput("Volume")
        .setCheck("Number")
        .appendField("Volume");
    this.appendValueInput("Audio_buffer")
        .setCheck("Valid_sound_block")
        .appendField("Filename");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../../images/Petal_Top_Mic_Preview.jpg", 64, 64, "GetMicData"));
    this.setColour(LinkitzHue,LinkitzSaturation,LinkitzValue);;
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//---------------------------------------------------

Blockly.JavaScript['math_foo'] = function(block) {
  var value_sound_file_name = Blockly.JavaScript.valueToCode(block, 'sound_file_name', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volume = Blockly.JavaScript.valueToCode(block, 'volume', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

BBlockly.JavaScript['radio_event'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['speaker_play_sound'] = function(block) {
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

BBlockly.JavaScript['sound_fdv'] = function(block) {
  var value_frequency = Blockly.JavaScript.valueToCode(block, 'Frequency', Blockly.JavaScript.ORDER_ATOMIC);
  var value_duration = Blockly.JavaScript.valueToCode(block, 'Duration', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volume = Blockly.JavaScript.valueToCode(block, 'Volume', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sound_from_file'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sound_from_mic'] = function(block) {
  var value_volume = Blockly.JavaScript.valueToCode(block, 'Volume', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_filter_options = block.getFieldValue('FILTER_OPTIONS');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sound_user_defined_from_mic'] = function(block) {
  var dropdown_my_sound_files = block.getFieldValue('My sound files');
  var value_sound__userdefined_filename = Blockly.JavaScript.valueToCode(block, 'Sound__userdefined_filename', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volume = Blockly.JavaScript.valueToCode(block, 'Volume', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};



Blockly.JavaScript['on_microphone_trigger'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['sound_convert_pitch_to_hue'] = function(block) {
  var value_pitch = Blockly.JavaScript.valueToCode(block, 'Pitch', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bandwidth = Blockly.JavaScript.valueToCode(block, 'Bandwidth', Blockly.JavaScript.ORDER_ATOMIC);
  var value_volume = Blockly.JavaScript.valueToCode(block, 'Volume', Blockly.JavaScript.ORDER_ATOMIC);
  var value_audio_buffer = Blockly.JavaScript.valueToCode(block, 'Audio_buffer', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};

Blockly.JavaScript['on_motion_trigger'] = function(block) {
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  return code;
};