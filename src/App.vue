<template>
    <div id="app">
        <BlocklyComponent id="blockly" :options="options" ref="foo" @mouseover="showCode()" @click="showCode()"></BlocklyComponent>
        <div id="code">
          <a href="https://lxl.litebds.com/#/zh_CN/Development/" target="_blank">
            <button id="menubuttons" style="color:#ffffff;background-color:#008766;font-weight:bold;">
              {{BlocklyLocale.LXLDocumentation}}
            </button>
          </a>
          <a href="https://github.com/LiteLScript-Dev/LXL-Plugins" target="_blank">
            <button id="menubuttons" style="color:#000000;background-color:#DBD2CC">
              {{BlocklyLocale.ExamplePlugins}}
            </button>
          </a>
          <a href="https://www.minebbs.com/resources/litexloader-x-bds.2670/" target="_blank">
            <button id="menubuttons" style="color:#000000;background-color:#DBD2CC;">
              {{BlocklyLocale.DownloadLXL}}
            </button>
          </a>

          <button id="downloadbutton" size="normal" theme="color" @click="download()">
            <svg id="edcD1BShn9F1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 640" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="matrix(2.5 0 0 1.75-476.329552-39.889714)"><line x1="0" y1="-128.689884" x2="0" y2="-27.689884" transform="matrix(25 0 0 1 320 233.341149)" fill="none" stroke="#fff" stroke-width="3"/><polygon points="0,-12.923474 11.192057,6.461737 -11.192057,6.461737 0,-12.923474" transform="matrix(-6.704883 0 0-5.297823 320 216.774109)" fill="#fff" stroke-width="0"/></g><rect width="342.385" height="46.4345" rx="0" ry="0" transform="matrix(1.082173 0 0-1.020139 138.410548 542.086399)" fill="#fff" stroke-width="0"/></svg>
          </button>
          <div>
          <img style="vertical-align:middle;" src="./media/languageicon.png">
          <select style="marginTop: 5px;">
              <option class="language_option" id="zh_hans_option" @click="language('zh-hans')">中文</option>
              <option class="language_option" id="en_US_option" @click="language('en-US')">English</option>
          </select>
          </div>
          <!-- <input ref="filElem" type="file" class="upload-file" style="display: none" @change="getFile"> -->
          
          
          <pre v-html="code"></pre>
        </div> 
    </div>
</template>

<script>
import BlocklyComponent from "./components/BlocklyComponent.vue";
import addCustomBlocks from "./blocks/stocks";

import Blockly from "blockly";
import BlocklyJS from "blockly/javascript";
import toolBox from "./toolbox/ToolBox";

import { BlocklyLocale as en_us } from "./localizations/en-us";
import { BlocklyLocale as zh_hans } from "./localizations/zh-hans";
//设置Blockly语言为中文
import hans from "blockly/msg/zh-hans";
//Set Blockly language to English
import english from "blockly/msg/en";


export default {
    name: "app",
    components: {
        BlocklyComponent,
    },
    data() {
        var blocklyLocale;
        if (document.URL.search("en-US") != -1) {
            blocklyLocale = en_us;
            Blockly.setLocale(english);
        } else {
            blocklyLocale = zh_hans;
            Blockly.setLocale(hans);
        }
        addCustomBlocks(blocklyLocale);

        return {
            BlocklyLocale: blocklyLocale,
            code: "",
            options: {
                media: "media/",
                grid: {
                    spacing: 25,
                    length: 3,
                    colour: "#ccc",
                    snap: true,
                },
                toolbox: toolBox(blocklyLocale),
            },
        };
    },
    mounted() {
      this.updateOptions();
    },
    methods: {
        language(language) {
           window.open(`#${language}`, "_self");
            var blocklyLocale;
            if (document.URL.search("en-US") != -1) {
                blocklyLocale = en_us;
            } else {
                blocklyLocale = zh_hans;
            }
            this.updateOptions();
            this.BlocklyLocale = blocklyLocale;
            this.locale = blocklyLocale;
            document.location.reload();
        },
        updateOptions() {
            var options = document.getElementsByClassName("language_option");
            for (var i = 0; i < options.length; i++) {
              options[i].selected = false;
            }
            if (document.URL.search("en-US") != -1) {
                document.getElementById("en_US_option").selected = true;
            } else {
                document.getElementById("zh_hans_option").selected = true;
            }
        },
        showCode() {
            this.code = BlocklyJS.workspaceToCode(this.$refs["foo"].workspace);
        },
        download() {
          let str = this.code;
          // let x = document.getElementById("output");
          function custom_file() {
              var name = prompt(`${this.BlocklyLocale.DownloadPluginMessage}: `, "lxl-plugin");
              if (name != null) {
                window.alert(`${this.BlocklyLocale.DownloadPluginMessageFilename}:` + name + `.js, ${this.BlocklyLocale.DownloadPluginMessageOk}...`)
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
        custom_file();
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

#menubuttons {
  display: inline-block;
  vertical-align: middle;
  min-height: 36px;
  border-radius: 2px;
  min-width: 72px;
  text-transform: uppercase;
  cursor: pointer;
  user-select: none;
  font-size: .9rem;
  letter-spacing: 1px;
  position: relative;
  border: none;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 0.2s;
  opacity: 0.85;
}

#downloadbutton {
  background-color:#36A0F4;
  border-radius:50%;
  height:40px;
  width:40px;
  position:absolute;
  right:1px;
  top:1px;
  border: 0px;
  cursor: pointer;
}

button {
  transition:0.5s;
}

#menubuttons:hover {
  opacity: 1;
}

#downloadbutton:hover {
    opacity: 0.9
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
