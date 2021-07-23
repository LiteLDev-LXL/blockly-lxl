import * as Blockly from 'blockly/core';

Blockly.Blocks['newintpos'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("整数坐标：");
    this.appendValueInput("x")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X轴：");
    this.appendValueInput("y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y轴：");
    this.appendValueInput("z")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("z轴：");
    this.appendValueInput("NAME")
      .setCheck(["String", "Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("维度：");
    this.setOutput(true, "IntPos");
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['newfloatpos'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("浮点坐标：");
    this.appendValueInput("x")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("X轴：");
    this.appendValueInput("y")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("y轴：");
    this.appendValueInput("z")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("z轴：");
    this.appendValueInput("NAME")
      .setCheck(["String", "Number"])
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("维度：");
    this.setOutput(true, "FloatPos");
    this.setColour(65);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['runcmd'] = {
  init: function () {
    this.appendValueInput("cmd")
      .setCheck("String")
      .appendField("执行指令：");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['getruncmdfeedback'] = {
  init: function () {
    this.appendValueInput("cmd")
      .setCheck("String")
      .appendField("执行指令：");
    this.appendDummyInput()
      .appendField("的")
      .appendField(new Blockly.FieldDropdown([["命令执行状态", "runcmd"], ["命令执行结果", "runcmdEx"]]), "type");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['regplayercmddescription'] = {
  init: function () {
    this.appendValueInput("cmd")
      .setCheck("String")
      .appendField("为命令：");
    this.appendValueInput("description")
      .setCheck("String")
      .appendField("添加描述：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['regcmd'] = {
  init: function () {
    this.appendValueInput("cmd")
      .setCheck(null)
      .appendField("当")
      .appendField(new Blockly.FieldDropdown([["玩家", "Player"], ["OP", "op"], ["控制台", "Console"]]), "object")
      .appendField("执行：");
    this.appendStatementInput("callback")
      .setCheck(null)
      .appendField("时，");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sendcmdoutput'] = {
  init: function () {
    this.appendValueInput("output")
      .setCheck("String")
      .appendField("向控制台输出：");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['getonlineplayers'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("所有在线的玩家");
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['playerobject'] = {
  init: function () {
    this.appendValueInput("info")
      .setCheck(["String", "Number"])
      .appendField("获取对象：");
    this.appendDummyInput()
      .appendField("的")
      .appendField(new Blockly.FieldDropdown([["玩家名", "name"], ["坐标", "pos"], ["名字", "realName"], ["xuid", "xuid"], ["uuid", "uuid"], ["ip地址", "ip"], ["权限等级", "permLevel"], ["OP状态", "isOP()"], ["游戏模式", "gameMode"], ["最大生命值", "maxHealth"], ["当前生命值", "health"], ["悬空状态", "inAir"], ["潜行状态", "sneaking"]]), "type");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['kickplayer'] = {
  init: function () {
    this.appendValueInput("info")
      .setCheck(["String", "Number"])
      .appendField("踢出对象：");
    this.appendValueInput("msg")
      .setCheck("String")
      .appendField("原因：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['sendtexttoplayer'] = {
  init: function () {
    this.appendValueInput("info")
      .setCheck(["String", "Number"])
      .appendField("给对象：");
    this.appendDummyInput()
      .appendField("发送")
      .appendField(new Blockly.FieldDropdown([["普通消息", "0"], ["聊天消息", "1"], ["物品栏消息", "5"], ["json消息", "9"]]), "type");
    this.appendValueInput("msg")
      .setCheck("String")
      .appendField("：");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['broadcast'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("广播一条")
      .appendField(new Blockly.FieldDropdown([["普通消息", "0"], ["聊天消息", "1"], ["物品栏消息", "5"], ["json消息", "9"]]), "type");
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
};

Blockly.Blocks['runcmdas'] = {
  init: function () {
    this.appendValueInput("info")
      .setCheck(["String", "Number"])
      .appendField("以对象：");
    this.appendValueInput("cmd")
      .setCheck("String")
      .appendField("的身份执行命令：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['teleportplayer'] = {
  init: function () {
    this.appendValueInput("info")
      .setCheck(["String", "Number"])
      .appendField("传送对象：");
    this.appendValueInput("pos")
      .setCheck("FloatPos")
      .appendField("到坐标：");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['newintpos'] = function (block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'mc.newIntPos' + '(' + value_x + ',' + value_y + ',' + value_z + ',';
  switch (value_name.replace(/'/g, '')) {
    case '主世界':
      code += 0;
      break;
    case '下界':
      code += 1;
      break;
    case '地狱':
      code += 1;
      break;
    case '末地':
      code += 2;
      break;
    default:
      code += value_name;
  }
  code += ')'
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['newfloatpos'] = function (block) {
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.newFloatPos' + '(' + value_x + ',' + value_y + ',' + value_z + ',';
  switch (value_name.replace(/'/g, '')) {
    case '主世界':
      code += 0;
      break;
    case '下界':
      code += 1;
      break;
    case '地狱':
      code += 1;
      break;
    case '末地':
      code += 2;
      break;
    default:
      code += value_name;
  }
  code += ')'
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['runcmd'] = function (block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.runcmd' + '(' + value_cmd + ')' + ';\n';
  return code;
};

Blockly.JavaScript['getruncmdfeedback'] = function (block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var code = 'mc.' + dropdown_type + '(' + value_cmd + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['regplayercmddescription'] = function (block) {
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var value_description = Blockly.JavaScript.valueToCode(block, 'description', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'let ' + value_cmd.replace(/'/g, '') + '_description' + ' = ' + value_description + ';\n';
  return code;
};

Blockly.JavaScript['regcmd'] = function (block) {
  var dropdown_object = block.getFieldValue('object');
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_callback = Blockly.JavaScript.statementToCode(block, 'callback');
  var code;
  if (dropdown_object != 'op') {
    code = 'mc.reg' + dropdown_object + 'Cmd' + '(' + value_cmd + ',' + value_cmd.replace(/'/g, '') + '_description' + ',' + 'function(args){\n' + statements_callback + '});\n';
  }
  else {
    code = 'mc.regPlayerCmd' + '(' + value_cmd + ',' + value_cmd.replace(/'/g, '') + '_description' + ',' + 'function(args){\n' + statements_callback + '}' + ',1' + ');\n';
  }
  return code;
};

Blockly.JavaScript['sendcmdoutput'] = function (block) {
  var value_output = Blockly.JavaScript.valueToCode(block, 'output', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.sendCmdOutput' + '(' + value_output + ')' + ';\n';
  return code;
};

Blockly.JavaScript['getonlineplayers'] = function () {
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

Blockly.JavaScript['playerobject'] = function (block) {
  var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + dropdown_type;
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['kickplayer'] = function (block) {
  var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'kick' + '(' + value_msg + ')' + ';\n';
  return code;
};

Blockly.JavaScript['sendtexttoplayer'] = function (block) {
  var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_type = block.getFieldValue('type');
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'sendText' + '(' + value_msg + ',' + dropdown_type + ')' + ';\n';
  return code;
};

Blockly.JavaScript['broadcast'] = function (block) {
  var dropdown_type = block.getFieldValue('type');
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.broadcast' + '(' + value_msg + ',' + dropdown_type + ')' + ';\n';
  return code;
};

Blockly.JavaScript['runcmdas'] = function (block) {
  var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
  var value_cmd = Blockly.JavaScript.valueToCode(block, 'cmd', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'runcmd' + '(' + value_cmd + ')' + ';\n';
  return code;
};

Blockly.JavaScript['teleportplayer'] = function (block) {
  var value_info = Blockly.JavaScript.valueToCode(block, 'info', Blockly.JavaScript.ORDER_ATOMIC);
  var value_pos = Blockly.JavaScript.valueToCode(block, 'pos', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 'mc.getPlayer' + '(' + value_info + ')' + '.' + 'teleport' + '(' + value_pos + ')' + ';\n';
  return code;
};