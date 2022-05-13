import * as Blockly from 'blockly/core';

export default function addCustomBlocks(BlocklyLocale) {
  
  Blockly.Blocks['log'] = {
    init: function () {
      this.appendValueInput("uni")
        .setCheck("String")
        .appendField(`${BlocklyLocale.ConsoleOutputLog}：`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['log'] = function (block) {
    var value_uni = Blockly.JavaScript.valueToCode(block, 'uni', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'log' + '(' + value_uni + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['colorlog'] = {
    init: function() {
      this.appendValueInput("log")
          .setCheck("String")
          .appendField(`${BlocklyLocale.ConsoleOutputColorLog}`);
      this.appendValueInput("color")
          .setCheck("String")
          .appendField(`，${BlocklyLocale.ConsoleOutputColor}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['colorlog'] = function(block) {
    var value_log = Blockly.JavaScript.valueToCode(block, 'log', Blockly.JavaScript.ORDER_ATOMIC);
    var value_color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'colorlog' + '('+value_color+','+value_log+')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['settimeout'] = {
    init: function() {
      this.appendStatementInput("func")
          .setCheck(null)
          .appendField(`${BlocklyLocale.ConsoleDelayFunction}`);
      this.appendValueInput("timeout")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(`${BlocklyLocale.ConsoleDelay}(ms)`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['settimeout'] = function(block) {
    var statements_func = Blockly.JavaScript.statementToCode(block, 'func');
    var value_timeout = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'setTimeout(()=>{\n'+statements_func+'},'+value_timeout+')';
    return code;
  };
  
  Blockly.Blocks['setInterval'] = {
    init: function() {
      this.appendStatementInput("func")
          .setCheck(null)
          .appendField(`${BlocklyLocale.ConsoleIntervalFunction}`);
      this.appendValueInput("timeout")
          .setCheck("Number")
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(`${BlocklyLocale.ConsoleIntervalCycle}(ms)`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['setInterval'] = function(block) {
    var statements_func = Blockly.JavaScript.statementToCode(block, 'func');
    var cycle_time = Blockly.JavaScript.valueToCode(block, 'timeout', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'setInterval(()=>{\n'+statements_func+'},'+cycle_time+')';
    return code;
  };
  
  Blockly.Blocks['clearinterval'] = {
    init: function() {
      this.appendValueInput("id")
          .setCheck("Number")
          .appendField(`${BlocklyLocale.ConsoleClearIntervalCycle}`)
          .appendField(`${BlocklyLocale.ConsoleClearIntervalCycleTime}ID:`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(160);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['clearinterval'] = function(block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'clearInterval('+value_id+');\n';
    return code;
  };
  
  Blockly.Blocks['newintpos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.BasicInterfaceIntegerCoordinates}：`);
      this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceXCoordinate}：`);
      this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceYCoordinate}：`);
      this.appendValueInput("z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceZCoordinate}：`);
      this.appendValueInput("NAME")
        .setCheck(["String", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceDimension}：`);
      this.setOutput(true, "IntPos");
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['newintpos'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.newIntPos' + '(' + value_x + ',' + value_y + ',' + value_z + ',';
    switch (value_name.replace(/'/g, '')) {
      case `${BlocklyLocale.BasicInterfaceOverworld}`:
        code += 0;
        break;
      case `${BlocklyLocale.BasicInterfaceNether}`:
        code += 1;
        break;
      case '地狱':
        code += 1;
        break;
      case `${BlocklyLocale.BasicInterfaceEnd}`:
        code += 2;
        break;
      default:
        code += value_name;
    }
    code += ')'
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['newfloatpos'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.BasicInterfaceFloatingPointCoordinates}：`);
      this.appendValueInput("x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceXCoordinate}：`);
      this.appendValueInput("y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceYCoordinate}：`);
      this.appendValueInput("z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceZCoordinate}：`);
      this.appendValueInput("NAME")
        .setCheck(["String", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(`${BlocklyLocale.BasicInterfaceDimension}：`);
      this.setOutput(true, "FloatPos");
      this.setColour(65);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['newfloatpos'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.newFloatPos' + '(' + value_x + ',' + value_y + ',' + value_z + ',';
    switch (value_name.replace(/'/g, '')) {
      case `${BlocklyLocale.BasicInterfaceOverworld}`:
        code += 0;
        break;
      case `${BlocklyLocale.BasicInterfaceNether}`:
        code += 1;
        break;
      case '地狱':
        code += 1;
        break;
      case `${BlocklyLocale.BasicInterfaceEnd}`:
        code += 2;
        break;
      default:
        code += value_name;
    }
    code += ')'
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['dimension_type'] = {
    init: function () {
      this.appendValueInput("dimension")
        .setCheck("String")
        .appendField(`${BlocklyLocale.BasicInterfaceDimension}：`);
      this.setOutput(true, "Number");
      this.setColour(65);
    }
  };Blockly.JavaScript['dimension_type'] = function (block) {
    var value_dimension_type = Blockly.JavaScript.valueToCode(block, 'dimension', Blockly.JavaScript.ORDER_ATOMIC).replaceAll("'", "");
    var output = -1;
    switch (value_dimension_type) {
      case BlocklyLocale.BasicInterfaceOverworld:
        output = 0; break;
      case BlocklyLocale.BasicInterfaceNether:
        output = 1; break;
      case BlocklyLocale.BasicInterfaceEnd:
        output = 2; break;
      default:
        output = 0;
      }
      return [output, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['runcmd'] = {
    init: function () {
      this.appendValueInput("cmd")
        .setCheck("String")
        .appendField(`${BlocklyLocale.CommandExecution}：`);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['runcmd'] = function (block) {
    var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.runcmd' + '(' + value_cmd + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['getruncmdfeedback'] = {
    init: function () {
      this.appendValueInput("cmd")
        .setCheck("String")
        .appendField(`${BlocklyLocale.CommandExecution}：`);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.CommandOf}：`)
        .appendField(new Blockly.FieldDropdown([[`${BlocklyLocale.CommandExecutionStatus}`, "runcmd"], [`${BlocklyLocale.CommandExecutionResult}`, "runcmdEx"]]), "type");
      this.setOutput(true, ["String", "Boolean"]);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getruncmdfeedback'] = function (block) {
    var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    var code = 'mc.' + dropdown_type + '(' + value_cmd + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  };
  
  Blockly.Blocks['regplayercmddescription'] = {
    init: function () {
      this.appendValueInput("cmd")
        .setCheck("String")
        .appendField(`${BlocklyLocale.CommandFor}：`);
      this.appendValueInput("description")
        .setCheck("String")
        .appendField(`${BlocklyLocale.CommandDescription}：`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['regplayercmddescription'] = function (block) {
    var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
    var value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'let ' + value_cmd.replace(/'/g, '') + '_description' + ' = ' + value_description + ';\n';
    return code;
  };
  
  Blockly.Blocks['getcmdrunner'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.CommandExecutor}`);
      this.setOutput(true, null);
      this.setColour(230);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['regcmd'] = function (block) {
    var dropdown_object = block.getFieldValue('object');
    var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
    var code;
    switch (dropdown_object){
      case 'Console':
        code = 'mc.regConsoleCmd' + '(' + value_cmd + ',' + 'function() {\n'+
            '    if (typeof ' + value_cmd.replace(/'/g, '') + '_description' + ' == "undefined") { \n'+
            `        return "${BlocklyLocale.CommandUndefined}";\n`+
            '    }else{\n'+
            '        return ' + value_cmd.replace(/'/g, '') + '_description;\n'
            +'    }\n'
            +'}()' + ', ' + 'function(args){\n' + statements_callback + '});\n';
        break;
      case 'op':
        code = 'mc.regPlayerCmd' + '(' + value_cmd + ',' + 'function() {\n'+
            '    if (typeof ' + value_cmd.replace(/'/g, '') + '_description' + ' == "undefined") {\n '+
            `        return "${BlocklyLocale.CommandUndefined}";\n`+
            '    }else{\n'+
            '        return ' + value_cmd.replace(/'/g, '') + '_description;\n'+
            '    }\n'+
            '}()' + ', ' + 'function(player,args){\n' + statements_callback + '},1);\n';
        break;
      case 'Player':
        code = 'mc.regPlayerCmd' + '(' + value_cmd + ',' + 'function() {\n'+
            '    if (typeof ' + value_cmd.replace(/'/g, '') +  '_description' + ' == "undefined") {\n'+
            `        return "${BlocklyLocale.CommandUndefined}";\n`+
            '    }else{ \n'+
            '        return ' + value_cmd.replace(/'/g, '') + '_description;\n'+
            '    }\n'+
            '}()' + ', ' + 'function(player,args){\n' + statements_callback + '});\n';
        break;
    }
    return code;
  };
  
  Blockly.Blocks['regcmd'] = {
    init: function () {
      this.appendValueInput("cmd")
        .setCheck(null)
        .appendField(`${BlocklyLocale.CommandWhen}`)
        .appendField(new Blockly.FieldDropdown([[`${BlocklyLocale.CommandPlayer}`, "Player"], ["OP", "op"], [`${BlocklyLocale.CommandConsole}`, "Console"]]), "object")
        .appendField(`${BlocklyLocale.CommandImplement}：`);
      this.appendStatementInput("callback")
        .setCheck(null)
        .appendField(`${BlocklyLocale.CommandTime}, `);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getcmdrunner'] = function() {
    var code = 'player.xuid';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['sendcmdoutput'] = {
    init: function () {
      this.appendValueInput("output")
        .setCheck("String")
        .appendField(`${BlocklyLocale.CommandConsoleOutput}: `);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(230);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['sendcmdoutput'] = function (block) {
    var value_output = Blockly.JavaScript.valueToCode(block, 'output', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.sendCmdOutput' + '(' + value_output + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['getonlineplayers'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationOne}`);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getonlineplayers'] = function () {
    var code = 'function () {\n\
      let xuid_list = [];\n\
      let player_list = (mc.getOnlinePlayers());\n\
      for (var player_index in player_list) {\n\
        xuid_list[player_index] = player_list[player_index].xuid;\n\
      }\n\
      return xuid_list;\n\
    }()';
  
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['playerobject'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationThree}`)
        .appendField(new Blockly.FieldDropdown(
            [[`${BlocklyLocale.PlayerTranslationFour}`, "name"],
            [`${BlocklyLocale.PlayerTranslationFive}`, "pos"],
            [`${BlocklyLocale.PlayerTranslationSix}`, "realName"],
            ["xuid", "xuid"],
            ["uuid", "uuid"],
            [`${BlocklyLocale.PlayerTranslationSeven}`, "ip"],
            [`${BlocklyLocale.PlayerTranslationEight}`, "permLevel"],
            [`${BlocklyLocale.PlayerTranslationNine}`, "isOP()"],
            [`${BlocklyLocale.PlayerTranslationTen}`, "gameMode"],
            [`${BlocklyLocale.PlayerTranslationEleven}`, "maxHealth"],
            [`${BlocklyLocale.PlayerTranslationTwelve}`, "health"],
            [`${BlocklyLocale.PlayerTranslationThirteen}`, "inAir"],
            [`${BlocklyLocale.PlayerTranslationForteen}`, "sneaking"]]), "type");
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['playerobject'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + dropdown_type;
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['kickplayer'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationFifteen}: `);
      this.appendValueInput("msg")
        .setCheck("String")
        .appendField(`${BlocklyLocale.PlayerTranslationSixteen}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['kickplayer'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'kick' + '(' + value_msg + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['sendtexttoplayer'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationSeventeen}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationEighteen}`)
        .appendField(new Blockly.FieldDropdown(
            [[`${BlocklyLocale.PlayerTranslationNineteen}`, "0"],
            [`${BlocklyLocale.PlayerTranslationTwenty}`, "1"],
            [`${BlocklyLocale.PlayerTranslationTwentyOne}`, "5"],
            [`${BlocklyLocale.PlayerTranslationTwentyTwo}`, "9"]]), "type");
      this.appendValueInput("msg")
        .setCheck("String")
        .appendField("：");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['sendtexttoplayer'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'sendText' + '(' + value_msg + ',' + dropdown_type + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['broadcast'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationTwentyThree}`)
        .appendField(new Blockly.FieldDropdown(
          [[`${BlocklyLocale.PlayerTranslationNineteen}`, "0"],
          [`${BlocklyLocale.PlayerTranslationTwenty}`, "1"],
          [`${BlocklyLocale.PlayerTranslationTwentyOne}`, "5"],
          [`${BlocklyLocale.PlayerTranslationTwentyTwo}`, "9"]]), "type");
      this.appendValueInput("msg")
        .setCheck("String")
        .appendField("：");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['broadcast'] = function (block) {
    var dropdown_type = block.getFieldValue('type');
    var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.broadcast' + '(' + value_msg + ',' + dropdown_type + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['runcmdas'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwentyFour}: `);
      this.appendValueInput("cmd")
        .setCheck("String")
        .appendField(`${BlocklyLocale.PlayerTranslationTwentyFive}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['runcmdas'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'runcmd' + '(' + value_cmd + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['talkas'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwentyFour}: `);
      this.appendValueInput("text")
        .setCheck("String")
        .appendField(`${BlocklyLocale.PlayerTranslationTwentySeven}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['talkas'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_text = Blockly.JavaScript.valueToCode(block, 'text', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'talkAs' + '(' + value_text + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['teleportplayer'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwentyEight}: `);
      this.appendValueInput("pos")
        .setCheck("FloatPos")
        .appendField(`${BlocklyLocale.PlayerTranslationTwentyNine}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['teleportplayer'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'teleport' + '(' + value_pos + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['killplayer'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationThirty}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['killplayer'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'kill' + '()' + ';\n';
    return code;
  };
  
  Blockly.Blocks['hurt'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck("String")
          .appendField(`${BlocklyLocale.PlayerTranslationThirtyOne}: `);
      this.appendValueInput("num")
          .setCheck("Number")
          .appendField(`${BlocklyLocale.PlayerTranslationThirtyTwo}`);
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.PlayerTranslationThirtyThree}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['hurt'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'hurt' + '('+value_num+')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['setOnFire'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck("String")
          .appendField(`${BlocklyLocale.PlayerTranslationThirtyOne}: `);
      this.appendValueInput("num")
          .setCheck("Number")
          .appendField(`${BlocklyLocale.PlayerTranslationThirtyFour}`);
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.PlayerTranslationThirtyFive}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['setOnFire'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_num = Blockly.JavaScript.valueToCode(block, 'num', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'setOnFire' + '('+value_num+')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['renameplayer'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationThirtySix}: `);
      this.appendValueInput("newname")
        .setCheck("String")
        .appendField(`${BlocklyLocale.PlayerTranslationThirtySeven}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['renameplayer'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_newname = Blockly.JavaScript.valueToCode(block, 'newname', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'rename' + '(' + value_newname + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['getblockstandingon'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck(null)
          .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.PlayerTranslationThirtyEight}`)
          .appendField(new Blockly.FieldDropdown(
              [[`${BlocklyLocale.PlayerTranslationSix}`,"name"],
              [`${BlocklyLocale.PlayerTranslationThirtyNine}`,"type"],
              ["id","id"],
              [`${BlocklyLocale.PlayerTranslationFive}`,"pos"],
              [`${BlocklyLocale.PlayerTranslationForty}`,"tileData"]]), "type");
      this.setOutput(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['getblockstandingon'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getBlockStandingOn' + '()'+ '.' + dropdown_type;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['getdevice'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck(null)
          .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.PlayerTranslationFortyOne}`)
          .appendField(new Blockly.FieldDropdown(
            [[`${BlocklyLocale.PlayerTranslationSeven}`,"ip"],
            [`${BlocklyLocale.PlayerTranslationFortyTwo} (ms)`,"avgPing"], 
            [`${BlocklyLocale.PlayerTranslationFortyThree} (%)`,"avgPacketLoss"], 
            [`${BlocklyLocale.PlayerTranslationFortyFour}`,"os"], 
            [`${BlocklyLocale.PlayerTranslationFortyFive} ID`,"clientId"]]), "type");
      this.setOutput(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['getdevice'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('type');
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getDevice' + '()'+ '.' + dropdown_type;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['getplayerhanditem'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationFortySix}`);
      this.setInputsInline(true);
      this.setOutput(true, "item");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getplayerhanditem'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getHand' + '()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['getOffHand'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationFortySeven}`);
      this.setInputsInline(true);
      this.setOutput(true, "item");
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getOffHand'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getOffHand' + '()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['getplayerallitems'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationFortyEight}`);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getplayerallitems'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getInventory' + '()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['getArmor'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationFortyNine}`);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getArmor'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getArmor' + '()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['getEnderChest'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationFifty}`);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getEnderChest'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getEnderChest' + '()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['getRespawnPosition'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationTwo}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationFiftyOne}`);
      this.setInputsInline(true);
      this.setOutput(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['getRespawnPosition'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'getRespawnPosition' + '()';
    return [code, Blockly.JavaScript.ORDER_NONE];
  };
  
  Blockly.Blocks['clearitem'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck("String")
          .appendField(`${BlocklyLocale.PlayerTranslationFiftyTwo}: `);
      this.appendValueInput("item")
          .setCheck("String")
          .appendField(`${BlocklyLocale.PlayerTranslationFiftyThree}`);
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.PlayerTranslationFiftyFour}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['clearitem'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'clearItem' + '(' + value_item + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['refreshitems'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck(null)
          .appendField(`${BlocklyLocale.PlayerTranslationFiftyFive}: `);
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.PlayerTranslationFiftySix}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['refreshitems'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'refreshItems' + '()' + ';\n';
    return code;
  };
  
  Blockly.Blocks['refreshChunks'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck(null)
          .appendField(`${BlocklyLocale.PlayerTranslationFiftyFive}: `);
      this.appendDummyInput()
          .appendField(`${BlocklyLocale.PlayerTranslationFiftySeven}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['refreshChunks'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'refreshChunks' + '()' + ';\n';
    return code;
  };
  
  Blockly.Blocks['setplayerpermlevel'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationFiftyEight}: `);
      this.appendValueInput("level")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationFiftyNine}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['setplayerpermlevel'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_level = Blockly.JavaScript.valueToCode(block, 'level', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'setPermLevel' + '(' + value_level + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['setplayergamemode'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationFiftyEight}: `);
      this.appendValueInput("mode")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationSixty}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['setplayergamemode'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_mode = Blockly.JavaScript.valueToCode(block, 'mode', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'setGameMode' + '(';
    //TODO: Create blocks that represent each of the below gamemodes, like for dimensions
    switch (value_mode.replace(/'/g, '')) {
      case `${BlocklyLocale.GamemodeSurvival}`:
        code += 0;
        break;
      case `${BlocklyLocale.GamemodeCreative}`:
        code += 1;
        break;
      case `${BlocklyLocale.GamemodeAdventure}`:
        code += 2;
        break;
      default:
        code += value_mode;
    }
    code += ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['addplayerlevel'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationSixtyOne}: `);
      this.appendValueInput("count")
        .setCheck("Number")
        .appendField(`${BlocklyLocale.PlayerTranslationSixtyTwo}: `);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['addplayerlevel'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_count = Blockly.JavaScript.valueToCode(block, 'count', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'addLevel' + '(' + value_count + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['transplayertoserver'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationSixtyThree}: `);
      this.appendValueInput("server")
        .setCheck("String")
        .appendField(`${BlocklyLocale.PlayerTranslationSixtyFour}: `);
      this.appendValueInput("port")
        .setCheck("Number")
        .appendField(`${BlocklyLocale.PlayerTranslationSixtyFive}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationSixtySix}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['transplayertoserver'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_server = Blockly.JavaScript.valueToCode(block, 'server', Blockly.JavaScript.ORDER_ATOMIC);
    var value_port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'transServer' + '(' + value_server + ',' + value_port + ')' + ';\n';
    return code;
  };
  
  Blockly.Blocks['crashplayerclient'] = {
    init: function () {
      this.appendValueInput("info")
        .setCheck(["String", "Number"])
        .appendField(`${BlocklyLocale.PlayerTranslationSixtySeven}: `);
      this.appendDummyInput()
        .appendField(`${BlocklyLocale.PlayerTranslationSixtyEight}`);
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
      this.setTooltip("");
      this.setHelpUrl("");
    }
  };Blockly.JavaScript['crashplayerclient'] = function (block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'crash' + '()'+ ';\n';
    return code;
  };
  
  Blockly.Blocks['setsidebar'] = {
    init: function() {
      this.appendValueInput("info")
          .setCheck("String")
          .appendField(`${BlocklyLocale.PlayerTranslationFiftyEight}: `);
      this.appendValueInput("title")
          .setCheck("String")
          .appendField(`${BlocklyLocale.PlayerTranslationSixtyNine}: `);
      this.appendValueInput("data")
          .setCheck("String")
          .appendField(`${BlocklyLocale.PlayerTranslationSeventy}: `);
      this.appendDummyInput()
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(`${BlocklyLocale.PlayerTranslationSeventyOne}: `)
          .appendField(new Blockly.FieldDropdown(
            [[`${BlocklyLocale.PlayerTranslationSeventyTwo}`,"1"],
            [`${BlocklyLocale.PlayerTranslationSeventyThree}`,"0"]]), "sortOrder");
      this.setInputsInline(false);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(20);
   this.setTooltip("");
   this.setHelpUrl("");
    }
  };Blockly.JavaScript['setsidebar'] = function(block) {
    var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
    var value_title = Blockly.JavaScript.valueToCode(block, 'title', Blockly.JavaScript.ORDER_ATOMIC);
    var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC);
    var dropdown_sortorder = block.getFieldValue('sortOrder');
    // TODO: Assemble JavaScript into code variable.
    var code = 'mc.getPlayer' + '(' + value_info + ')' + `\n`
    +'  .' + 'setSidebar' + '("' + value_title + '",{' + value_data + '},' + dropdown_sortorder + ')' + ';\n';
    return code;
  };
}