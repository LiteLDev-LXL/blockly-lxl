<template>
    <div id="app">
        <BlocklyComponent id="blockly" :options="options" ref="foo" @click="showCode()"></BlocklyComponent>
        <p id="code">
        
       
        <m-button size="max" type="info" style="color:#ffffff;background-color:#008766;font-weight:bold" @click="gotodoc()">LXL文档页</m-button>
        <m-button size="samll" type="info" style="color:#000000;background-color:#DBD2CC" @click="demoplug()">示例插件</m-button>
        <m-button size="samll" type="info" style="color:#000000;background-color:#DBD2CC" @click="downplug()">LXL下载</m-button>


        <m-button mode="float-icon" size="normal" theme="color" style="position:absolute;right:0px;top:0px;" @click="download()">
        <m-icon value="file_download"></m-icon>
        </m-button> 
       
        <!-- <input ref="filElem" type="file" class="upload-file" style="display: none" @change="getFile"> -->
        
        
        <pre v-html="code"></pre>
        </p> 
    </div>
</template>

<script>
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/stocks";

import BlocklyJS from "blockly/javascript";

export default {
    name: "app",
    components: {
        BlocklyComponent,
    },
    data() {
        return {
            code: "",
            options: {
                media: "media/",
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                    snap: true,
                },
                toolbox: `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
  <category name="逻辑" colour="#5b80a5">
    <block type="controls_if"></block>
    <block type="logic_compare">
      <field name="OP">EQ</field>
    </block>
    <block type="logic_operation">
      <field name="OP">AND</field>
    </block>
    <block type="logic_negate"></block>
    <block type="logic_boolean">
      <field name="BOOL">TRUE</field>
    </block>
    <block type="logic_null"></block>
    <block type="logic_ternary"></block>
  </category>
  <category name="循环" colour="#5ba55b">
    <block type="controls_repeat_ext">
      <value name="TIMES">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="controls_whileUntil">
      <field name="MODE">WHILE</field>
    </block>
    <block type="controls_for">
      <field name="VAR" id="{+F:*ux)b%gAO*AsTj}{">i</field>
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
      <value name="BY">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="controls_forEach">
      <field name="VAR" id="KAYJBR5HEi#n@pQRzKJn">j</field>
    </block>
    <block type="controls_flow_statements">
      <field name="FLOW">BREAK</field>
    </block>
  </category>
  <category name="计算" colour="#5b67a5">
    <block type="math_number">
      <field name="NUM">0</field>
    </block>
    <block type="math_arithmetic">
      <field name="OP">ADD</field>
      <value name="A">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
    </block>
    <block type="math_single">
      <field name="OP">ROOT</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">9</field>
        </shadow>
      </value>
    </block>
    <block type="math_trig">
      <field name="OP">SIN</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">45</field>
        </shadow>
      </value>
    </block>
    <block type="math_constant">
      <field name="CONSTANT">PI</field>
    </block>
    <block type="math_number_property">
      <mutation divisor_input="false"></mutation>
      <field name="PROPERTY">EVEN</field>
      <value name="NUMBER_TO_CHECK">
        <shadow type="math_number">
          <field name="NUM">0</field>
        </shadow>
      </value>
    </block>
    <block type="math_round">
      <field name="OP">ROUND</field>
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">3.1</field>
        </shadow>
      </value>
    </block>
    <block type="math_on_list">
      <mutation op="SUM"></mutation>
      <field name="OP">SUM</field>
    </block>
    <block type="math_modulo">
      <value name="DIVIDEND">
        <shadow type="math_number">
          <field name="NUM">64</field>
        </shadow>
      </value>
      <value name="DIVISOR">
        <shadow type="math_number">
          <field name="NUM">10</field>
        </shadow>
      </value>
    </block>
    <block type="math_constrain">
      <value name="VALUE">
        <shadow type="math_number">
          <field name="NUM">50</field>
        </shadow>
      </value>
      <value name="LOW">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="HIGH">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_int">
      <value name="FROM">
        <shadow type="math_number">
          <field name="NUM">1</field>
        </shadow>
      </value>
      <value name="TO">
        <shadow type="math_number">
          <field name="NUM">100</field>
        </shadow>
      </value>
    </block>
    <block type="math_random_float"></block>
  </category>
  <category name="文字" colour="#5ba58c">
    <block type="text">
      <field name="TEXT"></field>
    </block>
    <block type="text_join">
      <mutation items="2"></mutation>
    </block>
    <block type="text_append">
      <field name="VAR" id="2YeTYsWn=e.jWZ1_jcJC">item</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_length">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_isEmpty">
      <value name="VALUE">
        <shadow type="text">
          <field name="TEXT"></field>
        </shadow>
      </value>
    </block>
    <block type="text_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="cZu0g~S;L.v,R7:PZm~3">text</field>
        </block>
      </value>
      <value name="FIND">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_charAt">
      <mutation at="true"></mutation>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="cZu0g~S;L.v,R7:PZm~3">text</field>
        </block>
      </value>
    </block>
    <block type="text_getSubstring">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="STRING">
        <block type="variables_get">
          <field name="VAR" id="cZu0g~S;L.v,R7:PZm~3">text</field>
        </block>
      </value>
    </block>
    <block type="text_changeCase">
      <field name="CASE">UPPERCASE</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_trim">
      <field name="MODE">BOTH</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_print">
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
    <block type="text_prompt_ext">
      <mutation type="TEXT"></mutation>
      <field name="TYPE">TEXT</field>
      <value name="TEXT">
        <shadow type="text">
          <field name="TEXT">abc</field>
        </shadow>
      </value>
    </block>
  </category>
  <category name="列表" colour="#745ba5">
    <block type="lists_create_with">
      <mutation items="0"></mutation>
    </block>
    <block type="lists_create_with">
      <mutation items="3"></mutation>
    </block>
    <block type="lists_repeat">
      <value name="NUM">
        <shadow type="math_number">
          <field name="NUM">5</field>
        </shadow>
      </value>
    </block>
    <block type="lists_length"></block>
    <block type="lists_isEmpty"></block>
    <block type="lists_indexOf">
      <field name="END">FIRST</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getIndex">
      <mutation statement="false" at="true"></mutation>
      <field name="MODE">GET</field>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE">
        <block type="variables_get">
          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>
        </block>
      </value>
    </block>
    <block type="lists_setIndex">
      <mutation at="true"></mutation>
      <field name="MODE">SET</field>
      <field name="WHERE">FROM_START</field>
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>
        </block>
      </value>
    </block>
    <block type="lists_getSublist">
      <mutation at1="true" at2="true"></mutation>
      <field name="WHERE1">FROM_START</field>
      <field name="WHERE2">FROM_START</field>
      <value name="LIST">
        <block type="variables_get">
          <field name="VAR" id="-hbRDCa(~y6co@wAQ04y">list</field>
        </block>
      </value>
    </block>
    <block type="lists_split">
      <mutation mode="SPLIT"></mutation>
      <field name="MODE">SPLIT</field>
      <value name="DELIM">
        <shadow type="text">
          <field name="TEXT">,</field>
        </shadow>
      </value>
    </block>
    <block type="lists_sort">
      <field name="TYPE">NUMERIC</field>
      <field name="DIRECTION">1</field>
    </block>
  </category>
  <sep></sep>
  <category name="变量" colour="#a55b80" custom="VARIABLE"></category>
  <category name="函数" colour="#995ba5" custom="PROCEDURE"></category>
  <sep></sep>

<!-- ————————————————————————原版———————————————————————— -->
<!-- ————————————————————————原版———————————————————————— -->
<!-- ————————————————————————原版———————————————————————— -->

 <category name="通用接口" colour="#282C34">
    <block type="log">
      <value name="uni">
        <block type="text">
          <field name="TEXT">hello world!</field>
        </block>
      </value>
    </block>

    <block type="colorlog">
      <value name="log">
        <block type="text">
          <field name="TEXT">hello world!</field>
        </block>
      </value>
      <value name="color">
        <block type="text">
          <field name="TEXT">yellow</field>
        </block>
      </value>
    </block>

    <block type="settimeout">
      <value name="func">
        <block type="log">
          <value name="uni">
          <block type="text">
            <field name="TEXT">hello world!</field>
          </block>
        </value>
        </block>
      </value>
      <value name="timeout">
        <block type="math_number">
          <field name="NUM">1000</field>
        </block>
      </value>
    </block>

    <block type="setInterval">
      <value name="func">
        <block type="log">
          <value name="uni">
          <block type="text">
            <field name="TEXT">hello world!</field>
          </block>
        </value>
        </block>
      </value>
      <value name="timeout">
        <block type="math_number">
          <field name="NUM">1000</field>
        </block>
      </value>
    </block>

    <block type="clearinterval">
      <value name="id">
        <block type="math_number">
          <field name="NUM">1</field>
        </block>
      </value>
    </block>

  </category>

<!-- ————————————————————————旧版———————————————————————— -->
<!-- ————————————————————————旧版———————————————————————— -->
<!-- ————————————————————————旧版———————————————————————— -->

  <category name="基础接口" colour="#9fa55b">
    <block type="newintpos"></block>
    <block type="newfloatpos"></block>
  </category>

  <category name="命令操作" colour="#5b67a5">
    <block type="runcmd">
      <value name="cmd">
        <block type="text">
          <field name="TEXT">help</field>
        </block>
      </value>
    </block>
    <block type="regplayercmddescription">
      <value name="cmd">
        <block type="text">
          <field name="TEXT">menu</field>
        </block>
      </value>
      <value name="description">
        <block type="text">
          <field name="TEXT">打开主菜单</field>
        </block>
      </value>
    </block>
    <block type="regcmd">
      <field name="object">Player</field>
      <value name="cmd">
        <block type="text">
          <field name="TEXT">menu</field>
        </block>
      </value>
    </block>
    <block type="getcmdrunner"></block>
    <block type="getruncmdfeedback">
      <field name="type">runcmd</field>
      <value name="cmd">
        <block type="text">
          <field name="TEXT">help</field>
        </block>
      </value>
    </block>
    <block type="sendcmdoutput"></block>
  </category>
  
  <category name="玩家操作" colour="#a5745b">
    <block type="getonlineplayers"></block>
    <block type="playerobject">
      <field name="type">name</field>
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="kickplayer">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="msg">
        <block type="text">
          <field name="TEXT">你被踢了！</field>
        </block>
      </value>
    </block>
    <block type="sendtexttoplayer">
      <field name="type">0</field>
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="msg">
        <block type="text">
          <field name="TEXT">114514</field>
        </block>
      </value>
    </block>
    <block type="broadcast">
      <field name="type">0</field>
      <value name="msg">
        <block type="text">
          <field name="TEXT">114514</field>
        </block>
      </value>
    </block>
    <block type="runcmdas">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="cmd">
        <block type="text">
          <field name="TEXT">kill</field>
        </block>
      </value>
    </block>
    <block type="talkas">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="text">
        <block type="text">
          <field name="TEXT">114514!</field>
        </block>
      </value>
    </block>
    <block type="teleportplayer">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="pos">
        <block type="newfloatpos">
          <value name="x">
            <block type="math_number">
              <field name="NUM">1.1</field>
            </block>
          </value>
          <value name="y">
            <block type="math_number">
              <field name="NUM">4.5</field>
            </block>
          </value>
          <value name="z">
            <block type="math_number">
              <field name="NUM">1.4</field>
            </block>
          </value>
          <value name="NAME">
            <block type="text">
              <field name="TEXT">主世界</field>
            </block>
          </value>
        </block>
      </value>
    </block>
    <block type="killplayer">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="hurt">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="num">
        <block type="math_number">
          <field name="NUM">10</field>
        </block>
      </value>
    </block>
    <block type="setOnFire">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="num">
        <block type="math_number">
          <field name="NUM">114</field>
        </block>
      </value>
    </block>
    <block type="renameplayer">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="newname">
        <block type="text">
          <field name="TEXT">PA744</field>
        </block>
      </value>
    </block>
    <block type="getblockstandingon">
      <field name="type">name</field>
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="getdevice">
      <field name="type">name</field>
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="getplayerhanditem">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="getOffHand">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="getplayerallitems">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="getArmor">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="getEnderChest">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="getRespawnPosition">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="clearitem">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="item">
        <block type="text">
          <field name="TEXT">minecraft:bread</field>
        </block>
      </value>
    </block>
    <block type="refreshitems">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="refreshChunks">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="setplayerpermlevel">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="level">
        <block type="math_number">
          <field name="NUM">4</field>
        </block>
      </value>
    </block>
    <block type="setplayergamemode">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="mode">
        <block type="text">
          <field name="TEXT">创造</field>
        </block>
      </value>
    </block>
    <block type="addplayerlevel">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="count">
        <block type="math_number">
          <field name="NUM">114514</field>
        </block>
      </value>
    </block>
    <block type="transplayertoserver">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="server">
        <block type="text">
          <field name="TEXT">xiabeize.com</field>
        </block>
      </value>
      <value name="port">
        <block type="math_number">
          <field name="NUM">1145</field>
        </block>
      </value>
    </block>
    <block type="crashplayerclient">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
    </block>
    <block type="setsidebar">
      <value name="info">
        <block type="text">
          <field name="TEXT">PA733</field>
        </block>
      </value>
      <value name="title">
        <block type="text">
          <field name="TEXT">Money</field>
        </block>
      </value>
      <value name="data">
        <block type="text">
          <field name="TEXT">"PA733":100,"eoe":80,"YQ":114514</field>
        </block>
      </value>
    </block>





  </category>

</xml>
                `,
            },
        };
    },
    methods: {
        showCode() {
            this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
        },
        download() {
          let str = this.code;
          // let x = document.getElementById("output");
          function custon_file() {
              var name = prompt("请输入要生成的文件名：", "lxl-plugin");
              if (name != null) 
              {
                window.alert("您的文件名为 "+ name + ".js,点击确认开始下载...")
                download(name+".js",str);
              }

          }
          function download(filename, text) {
          var element = document.createElement('a');
          element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          element.setAttribute('download', filename);
          element.style.display = 'none';
          document.body.appendChild(element);
          element.click();
          document.body.removeChild(element);
        }
        custon_file();
        },
        gotodoc(){
          window.open("https://lxl.litebds.com/#/zh_CN/Development/");
        },
        demoplug(){
          window.open("https://github.com/LiteLDev-LXL");
        },
        downplug(){
          window.open("https://www.minebbs.com/resources/litexloader-x-bds.2670/");
        }
    },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html,
body {
  margin: 0;
}

#code {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30%;
  height: 100%;
  margin: 0;
  background-color: beige;
  --color-primary: 33, 150, 243;
}

#blockly {
  position: absolute;
  left: 1;
  top: 0;
  width: 70%;
  height: 100%;
}
</style>
