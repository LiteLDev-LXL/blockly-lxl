<template>
    <div id="app">
        <BlocklyComponent id="blockly" :options="options" ref="foo" @click="showCode()"></BlocklyComponent>
        <p id="code">
          <a href="https://lxl.litebds.com/#/zh_CN/Development/" target="_blank">
            <button id="menubuttons" size="max" type="info" style="color:#ffffff;background-color:#008766;font-weight:bold;">
              LXL文档页
            </button>
          </a>
          <a href="https://github.com/LiteLScript-Dev/blockly-lxl" target="_blank">
            <button id="menubuttons" size="small" type="info" style="color:#000000;background-color:#DBD2CC">
              示例插件
            </button>
          </a>
          <a href="https://www.minebbs.com/resources/litexloader-x-bds.2670/" target="_blank">
            <button id="menubuttons" size="small" type="info" style="color:#000000;background-color:#DBD2CC;">
              LXL下载
            </button>
          </a>

          <button id="downloadbutton" size="normal" theme="color" @click="download()">
            <svg id="edcD1BShn9F1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 640" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><g transform="matrix(2.5 0 0 1.75-476.329552-39.889714)"><line x1="0" y1="-128.689884" x2="0" y2="-27.689884" transform="matrix(25 0 0 1 320 233.341149)" fill="none" stroke="#fff" stroke-width="3"/><polygon points="0,-12.923474 11.192057,6.461737 -11.192057,6.461737 0,-12.923474" transform="matrix(-6.704883 0 0-5.297823 320 216.774109)" fill="#fff" stroke-width="0"/></g><rect width="342.385" height="46.4345" rx="0" ry="0" transform="matrix(1.082173 0 0-1.020139 138.410548 542.086399)" fill="#fff" stroke-width="0"/></svg>
          </button> 
        
          <!-- <input ref="filElem" type="file" class="upload-file" style="display: none" @change="getFile"> -->
          
          
          <pre v-html="code"></pre>
        </p> 
    </div>
</template>

<script>
import BlocklyComponent from "./components/BlocklyComponent.vue";
import "./blocks/stocks";

import BlocklyJS from "blockly/javascript";
import toolBox from "./toolbox/ToolBox";

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
                toolbox: toolBox(),
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
          function custom_file() {
              var name = prompt("请输入要生成的文件名：", "lxl-plugin");
              if (name != null) {
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
  /*background-image: linear-gradient(rgba(0, 0, 0, 0.05) 0 0);*/
  opacity: 1;
}

#downloadbutton:hover {
    /*background-image: linear-gradient(rgba(255, 255, 255, 0.05) 0 0);*/
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
