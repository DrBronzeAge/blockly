
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